import CoreTrack from "@/components/widget/CoreTrack";
import Hero from "@/components/widget/Hero";
import Outcome from "@/components/widget/Outcome";
import SpecializedTracks from "@/components/widget/SpecializedTracks";


export default function Home() {
  return (
    <>
    <Hero/>
    <CoreTrack/>

     {/* specialized tracks  */}
     <SpecializedTracks/>

     {/* outcome */}
     <Outcome/>
    </>
  );
}
