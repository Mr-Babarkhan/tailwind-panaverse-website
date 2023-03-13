import Logo from "/public/images/logo11.png"
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";


export default function Header() {
  return (
    <Wrapper>
    <header className="flex justify-between  bg-white py-4 sticky top-0 items-center">
            {/* logo  */}
        <div>
            {/* <h1 className="text-xl font-bold">panaverse dao</h1> */}
            <Image src={Logo} alt="Panaverse dao logo"/>
        </div>
        {/* nav  */}
        <ul className="flex space-x-2 font-semibold">
            <li>
              <Link href={'#'}>Home</Link>
              </li>
            <li>
            <Link href={'#'}>About</Link>
              </li>
        </ul>
    </header>
    </Wrapper>
  )
}
