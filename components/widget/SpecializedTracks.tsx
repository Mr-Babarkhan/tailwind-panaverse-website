"use client"
import React, { useState } from "react";
import Wrapper from "@/components/shared/Wrapper";
import Quarter from "@/components/shared/Quarter";
//images
import Web3Images from "@/asstes/images/metaverse.webp";
import aiImages from "@/asstes/images/ai.webp";
import cloudImages from "@/asstes/images/cloud.webp";
import AmImages from "@/asstes/images/ambient.webp";
import genomicImages from "@/asstes/images/genomics.webp";
import NetworkImages from "@/asstes/images/network.webp";

import Image from "next/image";
export const pogramsData = [
  {
    slug:"wmd",
    header: "Web 3.0 (blockcahin) and Metaverse Specialization",
    description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
   image:Web3Images,
    quarters: [
      {
        header: "Quarter IV",
        description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5,
      },
    ],
  },
//no2
  {
    slug:"ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image:aiImages,
    quarters: [
      {
        header: "Quarter VI",
        description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 6,
      },
      {
        header: "Quarter VII",
        description: "AI-361: Deep Learning and MLOps",
        number: 7,
      },
    ],
  },

  //no3
  {
    slug:"cnc",
    header: "Cloud-Native Computing Specialization",
    description:"The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image:cloudImages,
    quarters: [
      {
        header: "Quarter IV",
        description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 6,
      },
      {
        header: "Quarter V",
        description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 7,
      },
    ],
  },
  //no4
  {
    slug:"iot",
    header: "Ambient Computing and IoT Specialization",
    description:"The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices",
    image:AmImages,
    quarters: [
      {
        header: "Quarter IV",
        description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 6,
      },
      {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: 7,
      },
    ],
  },
  //no5
  {
    slug:"genomics",
    header: "Genomics and Bioinformatics Specialization",
    description:"Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image:genomicImages,
    quarters: [
      {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists",
        number: 6,
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 7,
      },
    ],
  },
  //n06
  {
    slug:"npa",
    header: "Network Programmability and Automation Specialization",
    description:"More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image:NetworkImages,
    quarters: [
      {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: 6,
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: 7,
      },
    ],
  },
];
/////////////////////
export default function SpecializedTracks() {

        const [selectedItem, setselectedItem] = useState("wmd");
        const selectedItemData = pogramsData.find((item) => (item.slug===selectedItem))
        console.log(selectedItem);
  return (
    <>
      <section>
        <Wrapper>
          {/* header  */}
          <div className="shadow-sm basis-8/12 rounded-xl border border-slate-200 py-8 px-6">
            <h2 className="text-4xl  lg:text-5xl font-bold whitespace-pre-line ">
              Specialized Tracks:
            </h2>
            <p className="mt-4 text-xl text-slate-600 max-w-screen-sm">
              After completing the first three quarters the participants will
              select one or more specializations consisting of two courses each:
            </p>
          </div>
          <div className="flex  flex-col-reverse lg:flex-row mt-10 gap-x-6 gap-y-8 ">
            {/* left contents  */}
            <div className="basis-8/12 sticky top-24 self-start rounded-xl border border-slate-200 shadow-sm pl-4">
              <h4 className="text-teal-800 font-semibold text-lg mt-4">
                Specialized Program
              </h4>
              <h1 className="text-2xl  font-bold">
                {selectedItemData?.header}
              </h1>

              <p className="mt-2 text-lg text-slate-600">
                {selectedItemData?.description}
              </p>
              <button className="text-teal-700 text-xl mt-4 underline flex gap-x-2 items-end">
                Learn more
                <svg
                  className="mb-1.5"
                  width="10"
                  height="13"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                    stroke="#00616C"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row gap-x-4 mt-8">
                {
                  selectedItemData?.quarters.map((item)=>(
                    <Quarter 
                    key={item.number}
                    text={item.header}
                    desc={item.description}
                    log={item.number}
                    HaveBorder={false}
                    
                  />
                  ))
                }
                
               
              </div>
            </div>
            {/* right content  */}
            <div className="px-3 py-6 shadow-md border space-y-6 basis-4/12 flex-1 ">
              {
                pogramsData.map((item,i)=>(
                  <div onClick={() => setselectedItem(item.slug)} key={item.slug} className="flex gap-x-6  items-center cursor-pointer">
                  <div className="flex-shrink-0 h-24 w-30">
                    {/* <div className="w-24  bg-slate-700 "> */}
                      
                      <Image src={item.image} alt={item.header} className={"h-24 bg-black object-cover rounded-md hover:scale-105 duration-300"}/>
                  </div>
                  <div>
                    <h4 className="text-primary">Specialized Track</h4>
                    <h2 className="text-xl font-medium">
                     {item.header} 
                    </h2>
                  </div>
                </div>
  
                ))
              }
            </div>
          </div>

          {/* <div className="h-screen"></div> */}
        </Wrapper>
      </section>
    </>
  );
}
