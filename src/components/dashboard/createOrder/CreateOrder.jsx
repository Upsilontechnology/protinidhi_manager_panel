import React, { useRef } from 'react'
import DashboardImg from "../../../icons/overviewMain.png"
import { FiUploadCloud } from "react-icons/fi";


function CreateOrder() {

    const fileRef = useRef(null)

  return (
    <div className=' flex flex-col h-[850px] gap-3 '>
        <div  className=' h-[20%] bg-[#fff]  rounded-md flex pl-[10%] gap-4  '>
            <div className=' flex items-end '>
            <img src={DashboardImg} alt="" />
            </div>
            <div className=' flex flex-col justify-center '>
                <h2 className=' text-[1.5rem] font-bold '>Welcome to Manager Dashboard</h2>
                <h4 className=' text-[1.2rem] '>Create an order for customer easily.</h4>
            </div>
        </div>
        <div  className=' h-[80%] bg-[#fff] rounded-md '>
            <h3 className=' text-[1.3rem] mt-[2%] ml-[3%] font-bold text-[#444444] '>Create a Order</h3>
            <div className=' flex flex-col px-[10%] pt-[5%] gap-4 '>
                <div className=' flex w-full gap-2 '>
                    <input type="text" placeholder='Name' className=' flex-1 bg-[#F0F2F5] outline-none py-3 px-3 rounded-md ' />
                    <input type="text" placeholder='Phone No' className=' flex-1 bg-[#F0F2F5] outline-none py-3 px-3 rounded-md ' />
                </div>
                <input type="text" placeholder='Location' className=' bg-[#F0F2F5] outline-none pt-3 pb-10 px-3 rounded-md ' />
                <input type="text" placeholder='Product Description' className=' bg-[#F0F2F5] outline-none pt-3 pb-16 px-3 rounded-md ' />
                <div>
                <input 
                    type="file"
                    ref={fileRef}
                    accept="image/*"
                    hidden
                    />
                    <div onClick={()=> fileRef.current.click()} className=" flex flex-col items-center justify-center border border-dashed rounded cursor-pointer py-5 border-[#7a7a7a] ">
                      <FiUploadCloud className=' text-[2rem] ' />
                      <p className=' text-[1.2rem] font-semibold '>Upload File</p>
                    </div>
                </div>
                <div className=' mt-5 '>
                    <button className=' text-[1.2rem] font-semibold hover:bg-[#D71A41] bg-[#D71A21] text-[#fff] w-full rounded-md py-3 '>Create</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateOrder