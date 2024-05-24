import React from 'react'

function Rider() {
  return (
    <div className=' flex items-center justify-between text-[#000000] font-normal text-base border-b pb-5 border-[#000000] '>


      <div className=' flex items-center '>
        <input type="checkbox" className="custom-checkbox" />
      </div>
    
        <div>01</div>
        <div>
            <div>Md Shahed</div>
            <div>+8801789548766</div>
        </div>
        <div>
            <div>Rahima Mansion, Road No 2,</div>
            <div>Gec more, Agrabad. Chittagong</div>
        </div>
        <div>
            <button className=' px-10 py-2 bg-[#FAF6F6] rounded-md text-[#D71A21] hover:bg-[#D71A21] hover:text-[#fff] font-semibold '>Send Request</button>
        </div>

    </div>
  )
}

export default Rider