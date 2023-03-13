import React, { FC } from 'react'

interface IProps{
  text:"string",
  desc:"string",
  log:number,
  HaveBorder?:boolean,
}



// const  Quarter:FC<{text:string,desc:string,log:number}> =({text,desc,log}) => {
  // best practice with interface
  const  Quarter1:FC<IProps> =({text,desc,log ,HaveBorder=true}) => {
  return (
    <>
            <div className={` relative rounded-md flex-1 py-8 px-12 ${HaveBorder && 'border'}`} >
                <h4 className='font-bold text-lg'>{text}</h4>
                <p className='mt-2 text-slate-600'>{desc}</p>
                <span className="absolute top-0 right-20 font-bold text-9xl -z-10 text-gray-300">{log}</span>
            </div>
    </>
  )
}
export default Quarter1;