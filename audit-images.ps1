$ErrorActionPreference = "Stop"
$root = Get-Location
$publicRoot = Join-Path $root "public"
$scanRoots = @("app","components","lib","styles") | ForEach-Object { Join-Path $root $_ } | Where-Object { Test-Path $_ }
$extensions = @("*.ts","*.tsx","*.js","*.jsx","*.css","*.mdx")
$files = foreach ($sr in $scanRoots) { Get-ChildItem -Path $sr -Recurse -File -Include $extensions }
$pattern = '/[^"''\s)]+\.(?:png|jpe?g|webp|avif|svg|gif|heic)'
$refs = @()
foreach ($f in $files) {
  $lines = Get-Content -LiteralPath $f.FullName
  for ($i = 0; $i -lt $lines.Count; $i++) {
    $matches = [regex]::Matches($lines[$i], $pattern, "IgnoreCase")
    foreach ($m in $matches) {
      $ref = $m.Value
      if ($ref -and $ref.StartsWith('/')) {
        $refs += [pscustomobject]@{ ref=$ref; file=$f.FullName.Substring($root.Path.Length + 1); line=$i + 1 }
      }
    }
  }
}
function Test-RefPath {
  param([string]$Ref,[string]$PublicRoot)
  $relative = $Ref.TrimStart('/')
  $segments = $relative -split '/'
  $current = $PublicRoot
  $actualSegments = @()
  for ($idx = 0; $idx -lt $segments.Count; $idx++) {
    $seg = $segments[$idx]
    if (-not (Test-Path -LiteralPath $current)) { return [pscustomobject]@{ status='missing'; actualPath=$null } }
    $children = Get-ChildItem -LiteralPath $current -Force
    $exact = $children | Where-Object { $_.Name -ceq $seg } | Select-Object -First 1
    if ($exact) { $actualSegments += $exact.Name; $current = Join-Path $current $exact.Name; continue }
    $ci = $children | Where-Object { $_.Name -ieq $seg } | Select-Object -First 1
    if ($ci) {
      $actualSegments += $ci.Name
      $remaining = if ($idx -lt $segments.Count - 1) { '/' + ($segments[($idx+1)..($segments.Count-1)] -join '/') } else { '' }
      return [pscustomobject]@{ status='case-mismatch'; actualPath='/' + (($actualSegments -join '/') + $remaining) }
    }
    return [pscustomobject]@{ status='missing'; actualPath=$null }
  }
  return [pscustomobject]@{ status='ok'; actualPath='/' + ($actualSegments -join '/') }
}
$grouped = $refs | Group-Object ref
$results = foreach ($g in $grouped) {
  $check = Test-RefPath -Ref $g.Name -PublicRoot $publicRoot
  [pscustomobject]@{
    ref = $g.Name
    status = $check.status
    actualPath = $check.actualPath
    uses = $g.Count
    locations = @($g.Group | Select-Object -First 8 | ForEach-Object { "$($_.file):$($_.line)" })
  }
}
$broken = @($results | Where-Object { $_.status -ne 'ok' } | Sort-Object status, ref)
Write-Output "SUMMARY total_refs=$($results.Count) ok=$(($results | Where-Object status -eq 'ok').Count) missing=$(($results | Where-Object status -eq 'missing').Count) case_mismatch=$(($results | Where-Object status -eq 'case-mismatch').Count)"
if ($broken.Count -eq 0) {
  Write-Output "BROKEN none"
} else {
  Write-Output "BROKEN_START"
  $broken | ConvertTo-Json -Depth 6
  Write-Output "BROKEN_END"
}
