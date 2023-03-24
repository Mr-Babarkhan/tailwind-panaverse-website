import Logo from "/public/images/logo11.png"
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";
import {useTheme} from "next-themes"
import {BsFillSunFill,BsMoonFill} from "react-icons/Bs"
import  { useState,useEffect } from 'react'
export default function Header() {
  const {systemTheme,theme, setTheme} = useTheme()
  const [mounted,setMounted]=useState(false);
  useEffect(()=>{
    setMounted(true)
  },[])


  const renderThemeChanger =()=>{
    if(!mounted) return null;
    const currentTheme =theme==='system' ?systemTheme:theme;

    if (currentTheme==='light'){
      return(
        <BsFillSunFill className="w-7 h-7 " role={'button'} onClick={()=>setTheme('dark')}/>
      )}
      else {
          return(
            <BsMoonFill className="w-7 h-7 " role={'button'} onClick={()=>setTheme('light')}/>
          )
          }
    }
  
  return (
    <header className="sticky top-0 bg-white z-10 dark:border-gray-700 ">
    <Wrapper>
    <div className="flex justify-between  py-4  items-center">
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
        {renderThemeChanger()}
    </div>
   
    </Wrapper>
    </header>
  )
}
