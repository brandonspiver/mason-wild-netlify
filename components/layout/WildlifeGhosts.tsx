"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

type GhostPlacement = {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly className: string;
  readonly opacity?: number;
};

const PLACEMENTS = {
  home: [
    {
      src: "/artwork/ghosts/lions.png",
      alt: "Lions",
      width: 560,
      height: 840,
      className:
        "left-[-9%] top-[9%] w-[clamp(220px,31vw,560px)] hidden lg:block",
      opacity: 0.11,
    },
    {
      src: "/artwork/ghosts/gemsbok.png",
      alt: "Gemsbok",
      width: 512,
      height: 768,
      className:
        "right-[-6%] top-[34%] w-[clamp(200px,29vw,540px)] hidden md:block",
      opacity: 0.095,
    },
    {
      src: "/artwork/ghosts/hippos.png",
      alt: "Hippos",
      width: 512,
      height: 768,
      className: "left-[58%] top-[70%] w-[clamp(220px,34vw,600px)]",
      opacity: 0.082,
    },
  ] satisfies readonly GhostPlacement[],
  capeTown: [
    {
      src: "/artwork/ghosts/penguins.png",
      alt: "Penguins",
      width: 512,
      height: 768,
      className:
        "right-[-6%] top-[11%] w-[clamp(220px,30vw,560px)] hidden md:block",
      opacity: 0.11,
    },
    {
      src: "/artwork/ghosts/flamingos.png",
      alt: "Flamingos",
      width: 512,
      height: 768,
      className: "left-[-9%] top-[56%] w-[clamp(210px,28vw,520px)]",
      opacity: 0.084,
    },
  ] satisfies readonly GhostPlacement[],
  namibia: [
    {
      src: "/artwork/ghosts/gemsbok.png",
      alt: "Gemsbok",
      width: 512,
      height: 768,
      className:
        "left-[-10%] top-[18%] w-[clamp(250px,34vw,620px)] hidden md:block",
      opacity: 0.115,
    },
    {
      src: "/artwork/ghosts/pangolin.png",
      alt: "Pangolin",
      width: 512,
      height: 768,
      className:
        "right-[-7%] top-[58%] w-[clamp(220px,31vw,560px)] hidden lg:block",
      opacity: 0.09,
    },
  ] satisfies readonly GhostPlacement[],
  botswana: [
    {
      src: "/artwork/ghosts/hippos.png",
      alt: "Hippos",
      width: 512,
      height: 768,
      className:
        "right-[-10%] top-[14%] w-[clamp(240px,35vw,640px)] hidden md:block",
      opacity: 0.112,
    },
    {
      src: "/artwork/ghosts/flamingos.png",
      alt: "Flamingos",
      width: 512,
      height: 768,
      className: "left-[-8%] top-[63%] w-[clamp(220px,29vw,540px)]",
      opacity: 0.084,
    },
  ] satisfies readonly GhostPlacement[],
  tanzania: [
    {
      src: "/artwork/ghosts/leopard.png",
      alt: "Leopard",
      width: 512,
      height: 768,
      className:
        "right-[-7%] top-[21%] w-[clamp(200px,28vw,500px)] hidden md:block",
      opacity: 0.103,
    },
    {
      src: "/artwork/ghosts/flamingos.png",
      alt: "Flamingos",
      width: 512,
      height: 768,
      className: "left-[-7%] top-[66%] w-[clamp(220px,31vw,560px)]",
      opacity: 0.082,
    },
  ] satisfies readonly GhostPlacement[],
  zambia: [
    {
      src: "/artwork/ghosts/lions.png",
      alt: "Lions",
      width: 560,
      height: 840,
      className:
        "left-[-10%] top-[18%] w-[clamp(240px,34vw,620px)] hidden md:block",
      opacity: 0.11,
    },
    {
      src: "/artwork/ghosts/leopard.png",
      alt: "Leopard",
      width: 512,
      height: 768,
      className: "right-[-7%] top-[61%] w-[clamp(220px,30vw,540px)]",
      opacity: 0.09,
    },
  ] satisfies readonly GhostPlacement[],
  mixed: [
    {
      src: "/artwork/ghosts/pangolin.png",
      alt: "Pangolin",
      width: 512,
      height: 768,
      className:
        "right-[-7%] top-[16%] w-[clamp(190px,27vw,480px)] hidden md:block",
      opacity: 0.094,
    },
    {
      src: "/artwork/ghosts/penguins.png",
      alt: "Penguins",
      width: 512,
      height: 768,
      className: "left-[-8%] top-[50%] w-[clamp(180px,26vw,460px)]",
      opacity: 0.085,
    },
    {
      src: "/artwork/ghosts/gemsbok.png",
      alt: "Gemsbok",
      width: 512,
      height: 768,
      className:
        "right-[-7%] top-[76%] w-[clamp(220px,31vw,560px)] hidden lg:block",
      opacity: 0.092,
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
          sizes="(max-width: 768px) 38vw, 30vw"
          quality={95}
        />
      ))}
    </div>
  );
}
