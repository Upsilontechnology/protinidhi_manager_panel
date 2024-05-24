import React from 'react'
import Pagination from '../orderlist/pagination/Pagination'
import Rider from './Rider'

function RiderList() {
  return (
    <div className=' bg-[#fff] h-full rounded-lg flex flex-col justify-between '>
        <div>
        <div className=' pt-[3%] flex justify-center '>
            <input type="text" placeholder='Search with Location' className=' bg-[#F8F8F8] outline-none px-3 rounded-lg text-[1.1rem] py-2 w-[60%] ' />
        </div>

        <div className=' px-[5%] pt-[2rem] flex flex-col gap-4 '>            
                
            <Rider />
            <Rider />
            <Rider />
            <Rider />
            <Rider />
            <Rider />

        </div>

        </div>
        <Pagination />
    </div>
  )
}

export default RiderList