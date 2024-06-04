import React, { useRef } from "react";
import Person from "./Person";
import PersonOfMessage1 from "../../../assets/PersonOfMessage1.png";
import PersonOfMessage2 from "../../../assets/PersonOfMessage2.png";
import PersonOfMessage3 from "../../../assets/PersonOfMessage3.png";
import PersonOfMessage4 from "../../../assets/PersonOfMessage4.png";
import "./messageStyle.css";
import Msg from "./Msg";
import { IoCall } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";

function Message() {
  const fileRef = useRef(null);

  return (
    <div className=" bg-[#fff] h-full rounded-md ">
      <div className=" flex py-[1%] px-[2%] gap-3 ">
        <div className=" flex-1 ">
          <h4 className=" font-medium ">Message</h4>
          <div className=" py-5 ">
            <input
              type="text"
              placeholder="Search name or phone no"
              className=" w-full py-2 outline-none bg-[#F8F8F8] rounded-md px-3 "
            />
          </div>
          <div>
            <h4 className=" pl-[4%] mb-3 font-medium ">
              Default Message Center
            </h4>
            <div className=" flex flex-col gap-3 overflow-y-auto custom-scrollbar px-2 h-[70vh] ">
              <Person
                img={PersonOfMessage1}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
                count="3"
              />
              <Person
                img={PersonOfMessage2}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
                count="2"
              />
              <Person
                img={PersonOfMessage3}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
                count="1"
              />
              <Person
                img={PersonOfMessage4}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
                count="1"
              />
              <Person
                img={PersonOfMessage1}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
              />
              <Person
                img={PersonOfMessage2}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
              />
              <Person
                img={PersonOfMessage3}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
              />
              <Person
                img={PersonOfMessage4}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
              />
              <Person
                img={PersonOfMessage1}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
              />
              <Person
                img={PersonOfMessage2}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
              />
              <Person
                img={PersonOfMessage3}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
              />
              <Person
                img={PersonOfMessage4}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
              />
              <Person
                img={PersonOfMessage1}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
              />
              <Person
                img={PersonOfMessage2}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
              />
              <Person
                img={PersonOfMessage4}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
              />
              <Person
                img={PersonOfMessage1}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
              />
              <Person
                img={PersonOfMessage1}
                name="Md Shahed"
                message="I have a urgent need."
                time="09:34 PM"
              />
            </div>
          </div>
        </div>
        <div className=" flex-1 bg-[#F6F6F6] rounded-xl relative pb-4 overflow-hidden ">
          <div className=" absolute bg-[#D71A21] w-full flex items-center justify-between text-[#fff] py-2 pl-[4%] pr-[6%] ">
            <div className=" flex gap-4 ">
              <div>
                <img src={PersonOfMessage1} alt="" />
              </div>
              <div className=" font-semibold ">
                <h4>Md Shahed</h4>
                <h4>+8801789548766</h4>
              </div>
            </div>
            <div>
              <IoCall className=" text-[1.4rem] " />
            </div>
          </div>
          <div className=" flex  flex-col justify-end h-full ">
            <div className=" px-[4%] ">
              <div className=" mb-7 ">
                <Msg type="left" message="I have an urgent Need" />
                <Msg type="right" message="Yes! We are here for you." />
              </div>
              <div className=" relative">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Message"
                  className="  placeholder:text-[#FFFFFF] text-[#fff] text-sm bg-[#D71A21] outline-none rounded-full w-full py-3 pl-[4%] pr-[8%]  "
                />
                <div className=" absolute inset-y-0 right-0 flex items-center pr-[4%] ">
                  <input type="file" ref={fileRef} accept="image/*" hidden />
                  <MdAttachFile
                    onClick={() => fileRef.current.click()}
                    className=" cursor-pointer text-[#fff] rotate-[220deg] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
