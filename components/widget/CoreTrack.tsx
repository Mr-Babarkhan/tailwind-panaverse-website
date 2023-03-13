import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import Quarter from "@/components/shared/Quarter";

export default function CoreTrack() {
  const CoreTrackData = [
    {
      header: "Quarter I",
      description: "CS-101: Object-Oriented Programming using TypeScript",
      number: "1",
    },
    {
      header: "Quarter II",
      description:
        "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
      number: "2",
    },
    {
      header: "Quarter III",
      description:
        "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
      number: "3",
    },
  ];

  const header = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="mt-16 lg:mt-32">
      <Wrapper>
        <div className="max-w-screen-md">
          <h4 className="text-teal-800 font-semibold text-lg mt-4">
            Program of Studies
          </h4>
          <h2 className="text-4xl  lg:text-5xl font-bold whitespace-pre-line">
            {header}
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="mt-6">
            <Button text="Learn more" />
          </div>
        </div>

        {/* Boxes */}
        <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6">
          {/* props method  */}
          {/* <Quarter
            text="Quarter I"
            desc="CS-101: Object-Oriented Programming using TypeScript"
            log={1}
          />

        <Quarter
            text="Quarter II"
            desc="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
            log={2}
          />

        <Quarter
            text="Quarter III"
            desc="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
            log={3}
          /> */}

          {/* {
            CoreTrackData.map((items)=>{ console.log(items.header + " babar")})
          }; */}
          {CoreTrackData.map((items, i) => (
            <Quarter text={items.header} desc={items.description} log={i + 1}  />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
