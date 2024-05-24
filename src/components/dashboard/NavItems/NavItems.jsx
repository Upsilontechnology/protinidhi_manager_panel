import React, { useState } from 'react'
import NavHoverIcon1 from "../../../icons/NavHoverIcon1.png"
import NavHoverIcon2 from "../../../icons/NavHoverIcon2.png"
import NavHoverIcon3 from "../../../icons/NavHoverIcon3.png"
import NavHoverIcon4 from "../../../icons/NavHoverIcon4.png"
import NavHoverIcon5 from "../../../icons/NavHoverIcon5.png"
import NavHoverIcon6 from "../../../icons/NavHoverIcon6.png"
import NavHoverIcon7 from "../../../icons/NavHoverIcon7.png"
import NavHoverIcon8 from "../../../icons/NavHoverIcon8.png"
import NavIcon1 from "../../../icons/NavIcon1.png"
import NavIcon2 from "../../../icons/NavIcon2.png"
import NavIcon3 from "../../../icons/NavIcon3.png"
import NavIcon4 from "../../../icons/NavIcon4.png"
import NavIcon5 from "../../../icons/NavIcon5.png"
import NavIcon6 from "../../../icons/NavIcon6.png"
import NavIcon7 from "../../../icons/NavIcon7.png"
import NavIcon8 from "../../../icons/NavIcon8.png"
import NavLastIcon from "../../../icons/NavLastIcon.png"
import { NavLink } from 'react-router-dom'
// import "./NavItems.css"

function NavItems() {

  const [hovered, setHovered] = useState(false)

  return (
    <div className=' p-[5%] '>
        <h3 className=' text-[1.3rem] font-semibold '>Manager Dashboard</h3>
        <div className=' flex flex-col gap-3 mt-[15%]   '>
          <NavLink to={""}  className={({ isActive }) => `${isActive ? "bg-[#D71A21] " : null} group  text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md cursor-pointer `}>
            <img src={NavIcon1} alt="" className=' group-hover:hidden block w-4 ' />
            <img src={NavHoverIcon1} alt="" className='  hidden group-hover:block w-4 ' />
            <h3 className=' font-medium  '>Overview</h3>
          </NavLink>
        
        
          <NavLink to={"directOrderList"} className={({ isActive }) => `${isActive ? "bg-[#D71A21]" : null} group  text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md cursor-pointer `}>
            <img src={NavIcon2} alt="" className='group-hover:hidden block w-4 ' />
            <img src={NavHoverIcon2} alt="" className=' hidden group-hover:block w-4 ' />
            <h3 className=' font-medium  '>Order List</h3>
          </NavLink>
        
        
          <NavLink   className={({ isActive }) => `${isActive ? "active" : null} group text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md cursor-pointer `}>
            <img src={NavIcon3} alt="" className='group-hover:hidden block w-4 ' />
            <img src={NavHoverIcon3} alt="" className=' hidden group-hover:block w-4 ' />
            <h3 className=' font-medium  '>Client List</h3>
          </NavLink>
        
        
          <NavLink className={({ isActive }) => `${isActive ? "active" : null} group text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md cursor-pointer `}>
            <img src={NavIcon4} alt="" className='group-hover:hidden block w-4 ' />
            <img src={NavHoverIcon4} alt="" className=' hidden group-hover:block w-4 ' />
            <h3 className=' font-medium  '>Service List</h3>
          </NavLink>
        
        
          <NavLink to={'riderlist'} className={({ isActive }) => `${isActive ? "active" : null} group text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md  cursor-pointer`}>
            <img src={NavIcon5} alt="" className='group-hover:hidden block w-4 ' />
            <img src={NavHoverIcon5} alt="" className=' hidden group-hover:block w-4 ' />
            <h3 className=' font-medium  '>Rider List</h3>
          </NavLink>
        
        
          <NavLink className={({ isActive }) => `${isActive ? "active" : null} group text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md cursor-pointer `}>
            <img src={NavIcon6} alt="" className='group-hover:hidden block w-4 ' />
            <img src={NavHoverIcon6} alt="" className=' hidden group-hover:block w-4 ' />
            <h3 className=' font-medium  '>Support Ticket</h3>
          </NavLink>
        
        
          <NavLink className={({ isActive }) => `${isActive ? "active" : null} group text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md  cursor-pointer`}>
            <img src={NavIcon7} alt="" className='group-hover:hidden block w-4 ' />
            <img src={NavHoverIcon7} alt="" className=' hidden group-hover:block w-4 ' />
            <h3 className=' font-medium  '>Create Order</h3>
          </NavLink>
        
          <NavLink className={({ isActive }) => `${isActive ? "active" : null} group text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md cursor-pointer `}>
            <img src={NavIcon8} alt="" className='group-hover:hidden block w-4 ' />
            <img src={NavHoverIcon8} alt="" className=' hidden group-hover:block w-4 ' />
            <h3 className=' font-medium  '>Order list</h3>
          </NavLink>
          </div>
        <div className=' mt-[50%] flex justify-end  cursor-pointer'>
          <img src={NavLastIcon} alt="" />
        </div>
    </div>
  )
}

export default NavItems