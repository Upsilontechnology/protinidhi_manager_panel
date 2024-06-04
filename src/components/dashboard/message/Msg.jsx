import React from 'react'

function Msg({type, message}) {
  return (
    <div className=' flex '>
        <div className={` ${type === "right" ? "hidden" : "text-left"} flex-1 flex gap-3 text-[#fff]  `}>
            <div className=' flex-1 bg-[#5E5D5D] py-2 rounded-full rounded-bl-none pl-[3%] pr-1 '>{message}</div>
            <div className=' flex-1 '></div>
        </div>
        <div className={` ${type === "left" ? "hidden" : "text-right"} flex-1 flex  gap-3 text-[#fff] `}>
            <div className=' flex-1 '></div>
            <div className=' flex-1 bg-[#D71A21] text-left py-2 rounded-full rounded-br-none pl-[3%] pr-1 '>{message}</div>
        </div>
    </div>
  )
}

export default Msg