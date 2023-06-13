import React from 'react'

const Navbar = () => {
  return (
    <div className='text-[#f1dcc6] h-[64px] bg-black flex justify-between items-center px-1 text-normal'>
        <ul className='flex gap-3'>
            <li>WE ARE OPEN</li>
            <li>7 DAYS</li>
        </ul>
        <ul className='flex gap-3'>
            <li><i className='bx bxs-map'></i> Carrera 10# 8-49</li>
            <li><i className='bx bx-phone'></i> 3007800231</li>
        </ul>
        
    </div>
  )
}

export default Navbar