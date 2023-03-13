import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import PosterLogo from "@/asstes/images/hero.png"
import Button from "@/components/shared/Button";

export default function Hero() {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-center">
          {/* left side  */}
          <div className="flex-1">
          <h4 className="text-teal-800 font-semibold text-lg mt-4">
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </h4>
          <h1 className="text-4xl sm:text-6xl font-bold">Certified Web 3.0 and Metaverse Developer</h1>
          <div></div>
          <p className="mt-6 text-xl text-slate-600">
            A One and Quarter Years Panaverse DAO Earn as you Learn Program
            Getting Ready for the Next Generation of the Internet .
          </p> 
          <p className="mt-1 text-xl text-slate-600">Consolidating
            Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge,
            Ambient Computing/IoT, Network Automation, and Bioinformatics
            Technologies</p>
          <div className="mt-6">
          <Button text="Enroll now"/>
          </div>
         
          {/* <Button text="Enroll later"/> */}
          </div>
          {/* right side  */}

          <div className="flex-1">
            <Image src={PosterLogo} alt={'poster logo'}></Image>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
