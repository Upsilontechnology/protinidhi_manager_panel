import React, { useEffect, useState } from 'react'
import NavHoverIcon1 from "../../../icons/NavHoverIcon1.png"
import NavHoverIcon2 from "../../../icons/NavHoverIcon2.png"
import NavHoverIcon3 from "../../../icons/NavHoverIcon3.png"
import NavHoverIcon4 from "../../../icons/NavHoverIcon4.png"
import NavHoverIcon5 from "../../../icons/NavHoverIcon5.png"
import NavHoverIcon6 from "../../../icons/NavHoverIcon6.png"
import NavHoverIcon7 from "../../../icons/NavHoverIcon7.png"
import NavHoverIcon8 from "../../../icons/NavHoverIcon8.png"
import NavHoverIcon9 from "../../../icons/NavHoverIcon9.png"
import NavIcon1 from "../../../icons/NavIcon1.png"
import NavIcon2 from "../../../icons/NavIcon2.png"
import NavIcon3 from "../../../icons/NavIcon3.png"
import NavIcon4 from "../../../icons/NavIcon4.png"
import NavIcon5 from "../../../icons/NavIcon5.png"
import NavIcon6 from "../../../icons/NavIcon6.png"
import NavIcon7 from "../../../icons/NavIcon7.png"
import NavIcon8 from "../../../icons/NavIcon8.png"
import NavIcon9 from "../../../icons/NavIcon9.png"
import NavLastIcon from "../../../icons/NavLastIcon.png"
import { NavLink, useLocation } from 'react-router-dom'
// import "./NavItems.css"

function NavItems() {

  const location = useLocation()

  const [activePath, setActivePath] = useState(location.pathname)

  const handleClick = () => {
    // setActivePath(location.pathname);
  }

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  // console.log(activePath);

  return (
    <div className=' p-[5%] '>
        <h3 className=' text-[1.3rem] font-semibold '>Manager Dashboard</h3>
        <div className=' flex flex-col gap-3 mt-[15%]   '>
          <NavLink onClick={handleClick} to={""}  className={` ${activePath === "/dashboard" ? "bg-[#d71a2a] text-[#fff]" : null}  group  text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md cursor-pointer `}>
            <img src={NavIcon1} alt="" className={` ${activePath === "/dashboard" ? "hidden" : null} group-hover:hidden block w-4 `}/>
            <img src={NavHoverIcon1} alt="" className={` ${activePath === "/dashboard" ? "block" : "hidden"} group-hover:block w-4 `} />
            <h3 className=' font-medium  '>Overview</h3>
          </NavLink>
        
        
          <NavLink onClick={handleClick}  to={"directOrderList"} className={` ${activePath === "/dashboard/directOrderList" ? "bg-[#d71a2a] text-[#fff]" : null} group  text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md cursor-pointer `}>
            <img src={NavIcon2} alt="" className={` ${activePath === "/dashboard/directOrderList" ? "hidden" : null}  group-hover:hidden block w-4 `} />
            <img src={NavHoverIcon2} alt="" className={` ${activePath === "/dashboard/directOrderList" ? "block" : "hidden"}   group-hover:block w-4 `} />
            <h3 className=' font-medium  '>Order List</h3>
          </NavLink>
          <NavLink onClick={handleClick}  to={"message"} className={` ${activePath === "/dashboard/message" ? "bg-[#d71a2a] text-[#fff]" : null} group  text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md cursor-pointer `}>
            <img src={NavIcon9} alt="" className={` ${activePath === "/dashboard/message" ? "hidden" : null}  group-hover:hidden block w-4 `} />
            <img src={NavHoverIcon9} alt="" className={` ${activePath === "/dashboard/message" ? "block" : "hidden"}   group-hover:block w-4 `} />
            <h3 className=' font-medium  '>Message (7)</h3>
          </NavLink>
        
        
          {/* <NavLink onClick={handleClick}  to={'clientlist'}   className={` ${activePath === "/dashboard/clientlist" ? "bg-[#d71a2a] text-[#fff]" : null} group text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md cursor-pointer `}>
            <img src={NavIcon3} alt="" className={` ${activePath === "/dashboard/clientlist" ? "hidden" : null}  group-hover:hidden block w-4 `} />
            <img src={NavHoverIcon3} alt="" className={` ${activePath === "/dashboard/clientlist" ? "block" : "hidden"}   group-hover:block w-4 `} />
            <h3 className=' font-medium  '>Client List</h3>
          </NavLink> */}
        
        
          {/* <NavLink onClick={handleClick}  to={'servicelist'} className={` ${activePath === "/dashboard/servicelist" ? "bg-[#d71a2a] text-[#fff]" : null} group text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md cursor-pointer `}>
            <img src={NavIcon4} alt="" className={` ${activePath === "/dashboard/servicelist" ? "hidden" : null}  group-hover:hidden block w-4 `} />
            <img src={NavHoverIcon4} alt="" className={` ${activePath === "/dashboard/servicelist" ? "block" : "hidden"}   group-hover:block w-4 `} />
            <h3 className=' font-medium  '>Service List</h3>
          </NavLink> */}
        
        
          <NavLink onClick={handleClick}  to={'riderlist'} className={` ${activePath === "/dashboard/riderlist" ? "bg-[#d71a2a] text-[#fff]" : null} group text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md  cursor-pointer`}>
            <img src={NavIcon5} alt="" className={` ${activePath === "/dashboard/riderlist" ? "hidden" : null}  group-hover:hidden block w-4 `} />
            <img src={NavHoverIcon5} alt="" className={` ${activePath === "/dashboard/riderlist" ? "block" : "hidden"}   group-hover:block w-4 `} />
            <h3 className=' font-medium  '>Rider List</h3>
          </NavLink>
        
        
          <NavLink onClick={handleClick}  to={'supportticket'} className={` ${activePath === "/dashboard/supportticket" ? "bg-[#d71a2a] text-[#fff]" : null} group text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md cursor-pointer `}>
            <img src={NavIcon6} alt="" className={` ${activePath === "/dashboard/supportticket" ? "hidden" : null}  group-hover:hidden block w-4 `} />
            <img src={NavHoverIcon6} alt="" className={` ${activePath === "/dashboard/supportticket" ? "block" : "hidden"}   group-hover:block w-4 `} />
            <h3 className=' font-medium  '>Support Ticket</h3>
          </NavLink>
        
        
          <NavLink onClick={handleClick}  to={'createorder'} className={` ${activePath === "/dashboard/createorder" ? "bg-[#d71a2a] text-[#fff]" : null} group text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md  cursor-pointer`}>
            <img src={NavIcon7} alt="" className={` ${activePath === "/dashboard/createorder" ? "hidden" : null}  group-hover:hidden block w-4 `} />
            <img src={NavHoverIcon7} alt="" className={` ${activePath === "/dashboard/createorder" ? "block" : "hidden"}   group-hover:block w-4 `} />
            <h3 className=' font-medium  '>Create Order</h3>
          </NavLink>
        
          <NavLink onClick={handleClick}  to={'orderlist'} className={` ${activePath === "/dashboard/orderlist" ? "bg-[#d71a2a] text-[#fff]" : null} group text-[#000] hover:text-[#fff] hover:bg-[#D71A21] flex items-center px-5 py-2 gap-3 rounded-md cursor-pointer `}>
            <img src={NavIcon8} alt="" className={` ${activePath === "/dashboard/orderlist" ? "hidden" : null}  group-hover:hidden block w-4 `} />
            <img src={NavHoverIcon8} alt="" className={` ${activePath === "/dashboard/orderlist" ? "block" : "hidden"}   group-hover:block w-4 `} />
            <h3 className=' font-medium  '>Order list</h3>
          </NavLink>
          </div>
        <div className=' mt-[50%] md:hidden flex justify-end  cursor-pointer'>
          <img src={NavLastIcon} alt="" />
        </div>
    </div>
  )
}

export default NavItems