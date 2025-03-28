'use client';

import ColorPalette from "@/components/layout/ColorPalette";
import { ScrollReveal } from "@/components/ScrollReveal";
import WorkProcess from "@/components/WorkProcess";
import ScrollAndSwapText from "@/src/fancy/components/text/scroll-and-swap-text";
import Image from "next/image";
import { useRef } from "react";



export default function Home() {
  const containerRef = useRef(null);

  return (
    <main className="w-full min-h-screen flex flex-col items-center">
    <div
      className="w-dvw h-dvh rounded-lg justify-center font-overused-grotesk p-2 overflow-auto overscroll-auto bg-white text-[#1c3f29] relative"
      ref={containerRef}
    >     
      <div className="h-[100%] flex justify-center items-center relative">
      <ScrollReveal>
      <div className="flex flex-row justify-center gap-12">
        <div className="flex md:text-4xl sm:text-3xl text-lg lg:text-5xl cl:text-6xl justify-center items-center flex-col">
          <ScrollAndSwapText
            label="BEVARA IDENTITETEN,"
            offset={["0 0.15", "0 0.35"]}
            className="font-bold "
            containerRef={containerRef}
          />
          <ScrollAndSwapText
            label="STÄRK GEMENSKAPEN."
            offset={["0 0.25", "0 0.45"]}
            className="font-bold "
            containerRef={containerRef}
          />
          <ScrollAndSwapText
            label="BÄR HISTORIEN."
            offset={["0 0.35", "0 0.55"]}
            className="font-bold"
            containerRef={containerRef}
          />
        </div>
        <Image
          src="/images/Football_Jersey.png"
            alt="jersey"
            width={300}
            height={300}
            />
        </div>
        </ScrollReveal>
      </div>
      <ScrollReveal>
          <WorkProcess />
        </ScrollReveal>
        <ScrollReveal>
            <ColorPalette />
        </ScrollReveal>
      <div className="h-[30%]"></div>
      </div>
      </main>
    );
}