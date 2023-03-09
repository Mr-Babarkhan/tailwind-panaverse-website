import Link from "next/link";
import Btn from "./button";

export default function Home() {
  return (
    <>
    {/* <Btn text="click on this "  /><br/><br/>
    <Btn text="This is props"  /> */}
    <Btn>
      <li>click me</li>
    </Btn>
    <br/>
      <Link href={"/name"}>Go to name page </Link>
      <h1 className={"text-orange-600 md:text-lime-500" }>khan 7</h1>
      <button className="bg-blue-500 text-white rounded-md"> Click me</button>
      <h2>ion</h2>
      <br></br>
      <Link href={"/design"} className="text-3xl font-bold underline">Go to design page </Link>
      <h5>kkkkk</h5>
      <p className="text-lime-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate qui
        est officiis debitis quas porro, ad laborum expedita repellendus
        voluptas sunt facere excepturi esse magnam quisquam recusandae delectus
        tenetur exercitationem?
      </p>
    </>
  );
}
