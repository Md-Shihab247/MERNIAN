import { BsCalendarEventFill, BsThreeDots } from "react-icons/bs";
import { FaBars, FaFlag, FaGripfire } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchIcon from "../../icons/SearchIcon"
import CartIcon from "../../icons/CartIcon"
import MessageIcon from "../../icons/MessageIcon"
import NotificationIcon from "../../icons/NotificationIcon"
import SettingsIcon from "../../icons/SettingsIcon"
import { useEffect, useRef, useState } from "react";
import { MdGroups, MdVideoLibrary } from "react-icons/md";
const Header = () => {

  let [isMenuOpen, setMenuOpen] = useState(false)
  let [isDotsDropDown,setDotsDropDown] = useState(false) 
  const menuRef = useRef(null)
  const dotsRef = useRef(null)

    useEffect(() => {
    let handleDropDown1 = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }};
      document.addEventListener('click', handleDropDown1);
      return () => { document.removeEventListener('click', handleDropDown1)};
  },[]);

  useEffect(() => {
    let handleDropDown2 = (event)=>{
      if ( dotsRef.current && !dotsRef.current.contains(event.target)) {
        setDotsDropDown(false);
      }}
      document.addEventListener("mousedown", handleDropDown2)
      return ()=>{document.removeEventListener('mousedown',handleDropDown2)}
  }, []);

  return (
    <>
      <div className="bg-[#615DFA] py-[15px] pl-6 pr-7 flex items-center justify-between">
          <div>
            <Link to="#">
              <img src="./images/logo.png" alt="logo" />
            </Link>
          </div> 

        <div className=" flex items-center justify-center gap-x-[73px]">
          <div className=" flex items-center ml-[174px] gap-x-12">
           <div ref={menuRef}>
               <FaBars onClick={()=> setMenuOpen(!isMenuOpen)} className=" cursor-pointer text-xl text-white" />

            {isMenuOpen 
             &&
              <div className=" clip-path absolute top-20 shadow-[3px_3px_6px_rgba(0,0,0,0.5)] h-auto overflow-hidden w-[400px] bg-[#E2E5E9] p-5 rounded-[15px]">
                     <div className=" text-[#333334] text-[24px] leading-7 font-poppins font-bold ">
                       Menu
                     </div>

                    <div className=" bg-[#E2E5E9] px-4 pt-4 rounded-[15px] w-[100%] h-auto"> 
                       <input type="text" placeholder="Search menu"  className="text-[15px] font-normal text-[#333334] outline-hidden px-6 border-hidden bg-[rgba(0,0,0,0.2)] rounded-[50px] p-3 font-poppins w-[100%]"/>

                       <div className=" text-[#333334] mt-4 text-xl leading-4 font-poppins font-semibold ">Social</div>

                       <ul className=" mt-6">
                        <li className=" flex gap-x-3 mt-3 items-start">
                          <div className="w-[30px] flex justify-start">
                             <BsCalendarEventFill className=" text-4xl" />
                          </div>
                          <p className=" font-medium font-poppins text-[16px] text-[#333334]">Lorem ipsum dolor, sit consectetur elit amet  adipisicing .</p>
                        </li>
                        <li className=" flex gap-x-3 mt-3 items-start">
                          <div className="w-[30px] flex justify-start">
                             <MdGroups className=" text-[32px]" />
                          </div>
                          <p className=" font-medium font-poppins text-[16px] text-[#333334]">Lorem ipsum dolor, sit consectetur.</p>
                        </li>
                        <li className=" flex gap-x-3 mt-3 items-start">
                          <div className="w-[30px] flex justify-start">
                             <FaFlag className=" text-3xl"/>
                          </div>
                          <p className=" font-medium font-poppins text-[16px] text-[#333334]">Lorem ipsum dolor,sit consectetur elit adipisicing.</p>
                        </li>
                        <li className=" flex gap-x-3 mt-3 items-start">
                          <div className="w-[30px] flex justify-start">
                             <MdVideoLibrary className=" text-[40px]" />
                          </div>
                          <p className=" font-medium font-poppins text-[16px] text-[#333334]">Lorem ipsum dolor, sit consectetur elit amet  adipisicing .</p>
                        </li>
                        <li className=" flex gap-x-3 mt-3 items-start">
                          <div className="w-[30px] flex justify-start">
                             <FaGripfire className=" text-5xl"  />
                          </div>
                          <p className=" font-medium font-poppins text-[16px] text-[#333334]">Lorem ipsum dolor,sit consectetur elit amet  adipisicing .</p>
                        </li>
                       </ul>
                    </div>
              </div>
            }
           </div>

            <ul className="flex items-center  gap-x-12 text-sm font-poppins text-white font-bold leading-normal">
              <li>
                <Link to="profile">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="store">
                  Store
                </Link>
              </li>
              <li>
                <Link to="about">
                  FAQ
                </Link>
              </li>
            </ul>

            <div ref={dotsRef} className=" relative">
              <BsThreeDots onClick={()=> setDotsDropDown(!isDotsDropDown)} className=" mt-[7px] cursor-pointer text-white text-sm font-bold h-5" />

              {isDotsDropDown
              &&

              <div className="absolute z-[999] top-14 shadow-[2px_2px_6px_rgba(0,0,0,0.5)] h-auto overflow-hidden w-[200px] bg-[#E2E5E9] p-4 rounded-[15px] font-poppins text-base text-[#333334] font-medium ">
                  <p className="mt-2.5">Ads manager</p>
                  <p className="mt-2.5">Public presence</p>
                  <p className="mt-2.5">Climate scince center</p>
                  <p className="mt-2.5">Fundrisers</p>
              </div>
              }
            </div>
          </div>
          <div className=" relative flex items-center">
            <input
              required
              placeholder="Search here ...."
              type="text"
              className="header-input w-[415px] h-12.5 bg-[#4E4AC8] rounded-[11px] px-4 py-[15px] text-[#6965E0] text-sm font-poppins font-normal leading-normal pr-10 border-hidden outline-hidden duration-300 focus:bg-white"
            />
            <span className=" absolute right-4">
              <SearchIcon />
            </span>
          </div>
        </div>

        <div className="flex">          
          <div className="flex items-center">
            <div className="w-[111px]  ">
              <div className=" w-[100%] flex justify-between text-white font-poppins text-[12px] font-normal leading-normal">
                <span>Next</span>
                <span>35 EXP</span>
              </div>
              <div className=" relative w-[100%] h-[3px] bg-[#4E4AC8] rounded-[7px]">
                <span className=" absolute bg-[#41EFFF] h-[100%] w-[83px] rounded-[7px]"></span>
              </div>
            </div> 
            <div className="flex items-center gap-x-[33px] ml-10 px-[33px] h-8 border-l border-r border-[#7A77FD] ">
              <CartIcon />
              <MessageIcon />
              <NotificationIcon />
            </div>

            <div className="ml-[33px]">
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
