import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import Quarter from "@/components/shared/Quarter";

export default function SpecializedTracks() {
  return (
    <>
      <section>
        <Wrapper>
          {/* header  */}
          <div className="shadow-md rounded-xl border border-slate-200 py-8 px-6">
            <h2 className="text-4xl  lg:text-5xl font-bold whitespace-pre-line">
              Specialized Tracks:
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              After completing the first three quarters the participants will
              select one or more specializations consisting of two courses each:
            </p>
          </div>
          <div className="flex mt-10 gap-x-6 gap-y-8">
            {/* left contents  */}
            <div className="basis-8/12 ">
              <h4 className="text-teal-800 font-semibold text-lg mt-4">
                Specialized Program
              </h4>
              <h1 className="text-2xl  font-bold">
                Web 3.0 (Blockchain) and Metaverse Specialization
              </h1>

              <p className="mt-2 text-lg text-slate-600">
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0 and Metaverse experiences for the next
                generation of the internet by specializing in building worlds
                that merge the best of cutting-edge decentralized distributed
                blockchains with 3D metaverse client experiences.
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

                    
              <div className="flex gap-x-4 mt-8">
                <Quarter
                  text="Quarter IV"
                  desc="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                log={4}
                HaveBorder={false}
                />
                <Quarter
                  text="Quarter V"
                  desc="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                log={5}
                HaveBorder={false}
                />
              
            </div></div>
            {/* right content  */}
            <div className="px-4 py-6  basis-4/12  bg-slate-400 flex-1" >
                <div className="gap-x-6 flex items-center">
                <div >
                    <div className="w-20 h-20 bg-slate-300"></div>
                </div>
                <div>
                    <h4 className="text-primary">Specialized programs</h4>
                    <h2 className="text-xl font-medium">Web 3.0 (Blockchain) and Metaverse Specialization</h2>
                </div>
                </div>
            </div> 
          </div>
        </Wrapper>
      </section>
    </>
  );
}
