"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

type GhostPlacement = {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly className: string;
  readonly opacity?: number;
};

const PLACEMENTS = {
  home: [
    {
      src: "/artwork/ghosts/wildlife-01.jpeg",
      width: 560,
      height: 840,
      className: "left-[-8%] top-[6%] w-[clamp(190px,34vw,520px)]",
      opacity: 0.145,
    },
    {
      src: "/artwork/ghosts/wildlife-11.jpeg",
      width: 512,
      height: 768,
      className:
        "right-[-8%] top-[28%] w-[clamp(190px,32vw,520px)] hidden md:block",
      opacity: 0.132,
    },
    {
      src: "/artwork/ghosts/wildlife-06.jpeg",
      width: 512,
      height: 768,
      className: "left-[58%] top-[57%] w-[clamp(200px,34vw,540px)]",
      opacity: 0.14,
    },
    {
      src: "/artwork/ghosts/wildlife-07.jpeg",
      width: 512,
      height: 768,
      className: "left-[-9%] top-[84%] w-[clamp(170px,31vw,460px)] hidden lg:block",
      opacity: 0.122,
    },
    {
      src: "/artwork/ghosts/lions.png",
      width: 1024,
      height: 1536,
      className: "right-[-7%] top-[42%] w-[clamp(190px,30vw,430px)]",
      opacity: 0.085,
    },
    {
      src: "/artwork/ghosts/pangolin.png",
      width: 1024,
      height: 1536,
      className: "left-[4%] top-[72%] w-[clamp(150px,23vw,320px)] hidden md:block",
      opacity: 0.078,
    },
    {
      src: "/artwork/ghosts/flamingos.png",
      width: 1024,
      height: 1536,
      className: "right-[8%] top-[92%] w-[clamp(155px,24vw,330px)] hidden lg:block",
      opacity: 0.075,
    },
  ] satisfies readonly GhostPlacement[],
  capeTown: [
    {
      src: "/artwork/ghosts/wildlife-15.jpeg",
      width: 512,
      height: 768,
      className: "right-[-11%] top-[9%] w-[clamp(220px,42vw,500px)]",
      opacity: 0.15,
    },
    {
      src: "/artwork/ghosts/wildlife-07.jpeg",
      width: 512,
      height: 768,
      className:
        "left-[-10%] top-[42%] w-[clamp(200px,34vw,500px)] hidden md:block",
      opacity: 0.13,
    },
    {
      src: "/artwork/ghosts/wildlife-09.jpeg",
      width: 512,
      height: 768,
      className: "right-[-9%] top-[74%] w-[clamp(160px,28vw,410px)]",
      opacity: 0.132,
    },
    {
      src: "/artwork/ghosts/wildlife-16.jpeg",
      width: 512,
      height: 768,
      className: "left-[-9%] top-[84%] w-[clamp(185px,33vw,480px)] hidden lg:block",
      opacity: 0.122,
    },
    {
      src: "/artwork/ghosts/penguins.png",
      width: 1024,
      height: 1536,
      className: "left-[6%] top-[24%] w-[clamp(150px,24vw,320px)] hidden md:block",
      opacity: 0.08,
    },
    {
      src: "/artwork/ghosts/flamingos.png",
      width: 1024,
      height: 1536,
      className: "right-[5%] top-[58%] w-[clamp(155px,25vw,340px)]",
      opacity: 0.074,
    },
  ] satisfies readonly GhostPlacement[],
  namibia: [
    {
      src: "/artwork/ghosts/wildlife-21.jpeg",
      width: 512,
      height: 768,
      className: "left-[-11%] top-[12%] w-[clamp(235px,43vw,560px)]",
      opacity: 0.15,
    },
    {
      src: "/artwork/ghosts/wildlife-17.jpeg",
      width: 512,
      height: 768,
      className: "right-[-12%] top-[39%] w-[clamp(190px,44vw,420px)]",
      opacity: 0.145,
    },
    {
      src: "/artwork/ghosts/wildlife-04.jpeg",
      width: 512,
      height: 768,
      className: "left-[-9%] top-[72%] w-[clamp(200px,36vw,500px)]",
      opacity: 0.13,
    },
    {
      src: "/artwork/ghosts/wildlife-14.jpeg",
      width: 512,
      height: 768,
      className: "right-[-10%] top-[88%] w-[clamp(180px,32vw,420px)] hidden md:block",
      opacity: 0.128,
    },
    {
      src: "/artwork/ghosts/gemsbok.png",
      width: 1024,
      height: 1536,
      className: "right-[3%] top-[24%] w-[clamp(170px,27vw,370px)] hidden md:block",
      opacity: 0.083,
    },
    {
      src: "/artwork/ghosts/pangolin.png",
      width: 1024,
      height: 1536,
      className: "left-[6%] top-[57%] w-[clamp(145px,22vw,310px)]",
      opacity: 0.076,
    },
  ] satisfies readonly GhostPlacement[],
  botswana: [
    {
      src: "/artwork/ghosts/wildlife-13.jpeg",
      width: 512,
      height: 768,
      className: "right-[-11%] top-[10%] w-[clamp(230px,44vw,560px)]",
      opacity: 0.15,
    },
    {
      src: "/artwork/ghosts/wildlife-16.jpeg",
      width: 512,
      height: 768,
      className: "left-[-10%] top-[35%] w-[clamp(180px,34vw,460px)]",
      opacity: 0.126,
    },
    {
      src: "/artwork/ghosts/wildlife-08.jpeg",
      width: 512,
      height: 768,
      className:
        "right-[-9%] top-[59%] w-[clamp(190px,33vw,470px)] hidden md:block",
      opacity: 0.134,
    },
    {
      src: "/artwork/ghosts/wildlife-20.jpeg",
      width: 512,
      height: 768,
      className: "left-[-9%] top-[86%] w-[clamp(175px,30vw,420px)] hidden lg:block",
      opacity: 0.12,
    },
    {
      src: "/artwork/ghosts/hippos.png",
      width: 1024,
      height: 1536,
      className: "left-[5%] top-[23%] w-[clamp(165px,26vw,360px)] hidden md:block",
      opacity: 0.082,
    },
    {
      src: "/artwork/ghosts/leopard.png",
      width: 1024,
      height: 1536,
      className: "right-[4%] top-[69%] w-[clamp(150px,24vw,330px)]",
      opacity: 0.076,
    },
  ] satisfies readonly GhostPlacement[],
  tanzania: [
    {
      src: "/artwork/ghosts/wildlife-06.jpeg",
      width: 512,
      height: 768,
      className: "right-[-9%] top-[12%] w-[clamp(220px,40vw,540px)]",
      opacity: 0.148,
    },
    {
      src: "/artwork/ghosts/wildlife-03.jpeg",
      width: 512,
      height: 768,
      className: "left-[-10%] top-[39%] w-[clamp(200px,37vw,500px)]",
      opacity: 0.136,
    },
    {
      src: "/artwork/ghosts/wildlife-11.jpeg",
      width: 512,
      height: 768,
      className:
        "right-[-10%] top-[66%] w-[clamp(180px,31vw,430px)] hidden md:block",
      opacity: 0.128,
    },
    {
      src: "/artwork/ghosts/wildlife-16.jpeg",
      width: 512,
      height: 768,
      className: "left-[-9%] top-[88%] w-[clamp(180px,31vw,430px)]",
      opacity: 0.118,
    },
    {
      src: "/artwork/ghosts/lions.png",
      width: 1024,
      height: 1536,
      className: "left-[5%] top-[25%] w-[clamp(170px,27vw,370px)] hidden md:block",
      opacity: 0.082,
    },
    {
      src: "/artwork/ghosts/flamingos.png",
      width: 1024,
      height: 1536,
      className: "right-[6%] top-[76%] w-[clamp(150px,23vw,320px)]",
      opacity: 0.075,
    },
  ] satisfies readonly GhostPlacement[],
  zambia: [
    {
      src: "/artwork/ghosts/wildlife-18.jpeg",
      width: 560,
      height: 840,
      className: "left-[-10%] top-[14%] w-[clamp(220px,39vw,560px)]",
      opacity: 0.148,
    },
    {
      src: "/artwork/ghosts/wildlife-19.jpeg",
      width: 512,
      height: 768,
      className: "right-[-11%] top-[42%] w-[clamp(190px,36vw,470px)]",
      opacity: 0.14,
    },
    {
      src: "/artwork/ghosts/wildlife-01.jpeg",
      width: 512,
      height: 768,
      className:
        "left-[-8%] top-[66%] w-[clamp(185px,34vw,460px)] hidden md:block",
      opacity: 0.128,
    },
    {
      src: "/artwork/ghosts/wildlife-08.jpeg",
      width: 512,
      height: 768,
      className: "right-[-9%] top-[88%] w-[clamp(175px,30vw,420px)] hidden lg:block",
      opacity: 0.122,
    },
    {
      src: "/artwork/ghosts/leopard.png",
      width: 1024,
      height: 1536,
      className: "right-[5%] top-[25%] w-[clamp(160px,25vw,350px)] hidden md:block",
      opacity: 0.081,
    },
    {
      src: "/artwork/ghosts/hippos.png",
      width: 1024,
      height: 1536,
      className: "left-[6%] top-[74%] w-[clamp(150px,23vw,320px)]",
      opacity: 0.075,
    },
  ] satisfies readonly GhostPlacement[],
  mixed: [
    {
      src: "/artwork/ghosts/wildlife-17.jpeg",
      width: 512,
      height: 768,
      className: "right-[-10%] top-[8%] w-[clamp(170px,30vw,420px)]",
      opacity: 0.132,
    },
    {
      src: "/artwork/ghosts/wildlife-20.jpeg",
      width: 512,
      height: 768,
      className: "left-[-8%] top-[34%] w-[clamp(170px,30vw,430px)]",
      opacity: 0.122,
    },
    {
      src: "/artwork/ghosts/wildlife-09.jpeg",
      width: 512,
      height: 768,
      className: "right-[-10%] top-[63%] w-[clamp(160px,27vw,380px)]",
      opacity: 0.12,
    },
    {
      src: "/artwork/ghosts/wildlife-05.jpeg",
      width: 512,
      height: 768,
      className: "left-[-9%] top-[86%] w-[clamp(190px,33vw,470px)] hidden lg:block",
      opacity: 0.118,
    },
    {
      src: "/artwork/ghosts/pangolin.png",
      width: 1024,
      height: 1536,
      className: "right-[5%] top-[23%] w-[clamp(145px,22vw,310px)]",
      opacity: 0.076,
    },
    {
      src: "/artwork/ghosts/gemsbok.png",
      width: 1024,
      height: 1536,
      className: "left-[5%] top-[70%] w-[clamp(155px,24vw,335px)] hidden md:block",
      opacity: 0.077,
    },
  ] satisfies readonly GhostPlacement[],
} as const;

function getPlacements(pathname: string): readonly GhostPlacement[] {
  const route = pathname.toLowerCase();

  if (route === "/") {
    return PLACEMENTS.home;
  }

  if (
    route.includes("/journeys/the-adventure") ||
    route.includes("solitude-architecture-of-silence-namibia") ||
    route.includes("/namibia")
  ) {
    return PLACEMENTS.namibia;
  }

  if (
    route.includes("cape-town") ||
    route.includes("south-africa") ||
    route.includes("/the-social") ||
    route.includes("/journeys/the-classic") ||
    route.includes("/journeys/the-romantic")
  ) {
    return PLACEMENTS.capeTown;
  }

  if (
    route.includes("/journeys/the-intimate") ||
    route.includes("botswana") ||
    route.includes("okavango")
  ) {
    return PLACEMENTS.botswana;
  }

  if (
    route.includes("/journeys/the-private-circuit") ||
    route.includes("tanzania")
  ) {
    return PLACEMENTS.tanzania;
  }

  if (route.includes("/journeys/the-untamed") || route.includes("zambia")) {
    return PLACEMENTS.zambia;
  }

  return PLACEMENTS.mixed;
}

export function WildlifeGhosts() {
  const pathname = usePathname() ?? "/";
  const placements = getPlacements(pathname);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {placements.map((placement) => (
        <Image
          key={`${placement.src}-${placement.className}`}
          src={placement.src}
          alt=""
          width={placement.width}
          height={placement.height}
          className={`wildlife-ghost absolute h-auto ${placement.className}`}
          style={{ opacity: placement.opacity ?? 0.09 }}
          sizes="(max-width: 768px) 56vw, 32vw"
          quality={88}
        />
      ))}
    </div>
  );
}
