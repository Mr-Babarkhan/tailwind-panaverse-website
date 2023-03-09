

import React from 'react'

export default function Btn({children}) {
  
  return (
    <>
    <button className='text-red-600 bg-black p-3 rounded-md ml-2 mt-2'>
      {children}
    </button>
    </>
  )
}
