import React from 'react'

const Home = () => {
  return (
    <div className='h-[112px] flex items-center justify-between'>
        
    <div className='px-2 '>
        <img src="/layer2.png" alt="" />
    </div>
    <ul className='text-[#F2DAC2] flex gap-5 px-2 cursor-pointer'>
        <li className='cursor-pointer hover:text-[#977656] hover:underline'>WORKS</li>
        <li className='cursor-pointer hover:text-[#977656] hover:underline'>SERVICES AND PRICES</li>
        <li className='cursor-pointer hover:text-[#977656] hover:underline'>CONTACT</li>
        <li className='cursor-pointer hover:text-[#977656] hover:underline'>PORTAFOLIO</li>
    </ul>
    </div>
  )
}

export default Home 