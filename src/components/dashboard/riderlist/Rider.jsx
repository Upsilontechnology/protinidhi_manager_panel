import React, { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";


function Rider() {
  const [openModal, setOpenModal] = useState(false);
  const fileRef = useRef(null);

  return (
    <>
      <div className=" flex items-center justify-between text-[#000000] font-normal text-base border-b pb-5 border-[#000000] ">
        <div className=" flex items-center ">
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
          <div>
            <button
              onClick={() => setOpenModal(true)}
              className=" px-10 py-2 bg-[#FAF6F6] rounded-md text-[#D71A21] hover:bg-[#D71A21] hover:text-[#fff] font-semibold"
            >
              Send Request
            </button>
            <div
              className={`fixed z-[100] flex items-center justify-center ${
                openModal ? "opacity-1 visible" : "invisible opacity-0"
              } inset-0 bg-[black]/20 backdrop-blur-sm duration-100`}
            >
              <div
                className={`absolute w-[600px]  rounded-lg bg-white p-3 pb-5 text-center drop-shadow-2xl  dark:text-black ${
                  openModal
                    ? "scale-1 opacity-1 duration-300"
                    : "scale-0 opacity-0 duration-150"
                } `}
              >
                <svg
                  onClick={() => setOpenModal(false)}
                  className="mx-auto mr-0 w-8 cursor-pointer fill-black dark:fill-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g>
                    <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
                  </g>
                </svg>
                <div className=" flex flex-col gap-3 px-[5rem] justify-center w-full ">
                  <input
                    type="text"
                    placeholder="Paste link or information about customer"
                    className=" outline-none px-3 pt-2 pb-16 bg-slate-100 rounded  "
                  />
                  <div className=" flex items-center w-full gap-2 ">
                    <input
                      type="number"
                      placeholder="Client Budget"
                      className=" outline-none  flex-1 px-3 py-2 bg-slate-100 rounded "
                    />
                    <input
                      type="number"
                      placeholder="Company Budget"
                      className=" outline-none flex-1 px-3 py-2 bg-slate-100 rounded "
                    />
                  </div>
                  <input
                    type="number"
                    placeholder="Rider Commission"
                    className=" outline-none flex-1 px-3 py-2 bg-slate-100 rounded "
                  />
                  <div>
                    <input 
                    type="file"
                    ref={fileRef}
                    accept="image/*"
                    hidden
                    />
                    <div onClick={()=> fileRef.current.click()} className=" flex flex-col items-center justify-center border border-dashed rounded cursor-pointer py-4 border-[#7a7a7a] ">
                      <FiUploadCloud />
                      <p>Drag or Upload File</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpenModal(false)}
                    className="rounded font-semibold bg-[#D71A21] mt-4 hover:bg-[#D71A21] px-6 py-1.5 text-white"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rider;
