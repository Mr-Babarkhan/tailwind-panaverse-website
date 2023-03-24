import Image from "next/image";
import React from "react";
import Logo from "/public/images/logo11.png";
import facebook from "@/asstes/images/facebook.png"
import youtube from "@/asstes/images/youtube.png"
import linkedin from "@/asstes/images/linkedin.png"
import git from "@/asstes/images/git.png"
import insta from "@/asstes/images/instagram.png"
import Wrapper from "@/components/shared/Wrapper";
import Link from "next/link";

export default function Footer() {
  return (
    <section>
        <Wrapper>
      <div className="mt-24 px-3 flex flex-col lg:flex-row  gap-x-4 pb-12">
        {/* left box  */}
        <div className="mt-3">
          <Image src={Logo} alt="panaverse logo" />
          <p className="text-lg text-slate-500 max-w-screen-sm">
            Certified Web 3.0 and Metaverse Developer A One and Quarter Years
            Panaverse DAO Earn as you Learn Program Getting Ready for the Next
            Generation of the Internet
          </p>
          <div className="flex  w-8 cursor-pointer mt-3 gap-x-2">
            <Image src={facebook} alt="Facebook" />
            
            <Image src={linkedin} alt="Linkedin" />
            <Image src={insta} alt="Instagram" />
            <Image src={git} alt="github" />
          </div>
        </div>

        {/* right  */}
        <div className="mt-4">
            <h2 className="font-bold text-lg">Programs</h2>
            <ul className="list-none mt-2 cursor-pointer text-slate-600 space-y-1 ">
            <li className="hover:text-teal-800">Web 3.0 and Metaverse developer</li>
            <li className="hover:text-teal-800">Artificial Intelligence</li>
            <li className="hover:text-teal-800">Cloud-Native computing</li>
            <li className="hover:text-teal-800">Ambient computing IoT</li>
            <li className="hover:text-teal-800">Genomics and Bioinformatics</li>
            <li className="hover:text-teal-800">Network Programmability and Automation</li>
            </ul>
        </div>

        <div className="mt-4">
        <h2 className="font-bold text-lg ">Pages</h2>
            <ul className="list-none mt-2 cursor-pointer text-slate-600 space-y-1 ">
                <li className="hover:text-teal-800"> Home</li>
                <li className="hover:text-teal-800">Quarter 1</li>
                <li className="hover:text-teal-800">Quarter 2</li>
                <li className="hover:text-teal-800">Quarter 3</li>
            </ul>
        </div>

      </div>
      </Wrapper>
    </section>
  );
}
