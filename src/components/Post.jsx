import React, { useEffect, useRef, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import LikeIcon from "./icons/LikeIcon"
import CommentIcon from "./icons/CommentIcon"
import ShareIcon from "./icons/ShareIcon"
import PostComment from './PostComment'
    const editList = [
        "Edit Post",
        "Delete Post",
        "Report Post",
        "Report Author"
    ]

const Post = ({Postcomment}) => {
    let post = `I have great news to share with you all! I’ve been officially made a game streaming verified partner by Streamy http://lyt.ly/snej25. What does this mean? I’ll be uploading new content every day, improving the quality and I’m gonna have access to games a month before the official release. This is a dream come true, thanks to all for the support!!!`
    let [isEdit,setEdit] = useState(false)
    let dropdownRef = useRef(null)

    useEffect(()=>{

        let handleClick = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setEdit(false)
            }
        }
        document.addEventListener("click",handleClick)
        return ()=>{ document.removeEventListener("click",handleClick)}

    },[])

    return (
    <>
        <div className=' mb-[25px]'>
            <div className=' bg-white w-[585px] pt-[15px] pl-5 pr-10 rounded-t-[15px] overflow-hidden'>
        <div className='w-full relative flex justify-between items-center'>
            <div className=' flex gap-x-[18px]'>
                <div className=' w-[50px] h-[50px] rounded-[50%] bg-[#615DFA] overflow-hidden border-3 border-[#D9D9D9]'>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className=' flex flex-col justify-center'>
                    <h3 className=' text-black font-poppins text-sm font-bold leading-normal'>A B M Shawon Islam</h3>
                    <span className=' relative top-[-2px] text-lavender-gray font-poppins text-[12px] font-medium leading-normal'>29 minutes ago</span>
                </div>
            </div>
            <div ref={dropdownRef}>
                <div onClick={()=> setEdit(!isEdit)}  className='duration-300 cursor-pointer h-6 w-6 rounded-[50%] flex items-center justify-center bg-transparent hover:bg-[rgba(0,0,0,0.1)] '>
               <BsThreeDots/>
            </div>
            {isEdit 
             && 
              <div className={` ${isEdit ? "scale-100" : "scale-0"} duration-500 absolute right-0 top-[52px] p-4 flex flex-col justify-center gap-y-1.5 bg-white rounded-[7px] shadow-[0px_1px_4px_1px_rgba(0,0,0,0.11)]`}>
                {editList.map((item,index)=>{

                   return <button className=' cursor-pointer text-black text-start font-poppins font-normal text-[12px] leading-normal' key={index}> {item} </button>

                })}
              </div>
            }
            </div>
        </div>


        <p className=" w-full pt-5 pb-7.5 bg-white resize-none box-border font-poppins text-[12px] text-black font-normal leading-normal outline-hidden border-hidden">
        {post}
        </p>

        <hr  className=' border-[#D9D9D9]' />

        <div className=' flex justify-between py-[15px]'>
            <div className=' flex items-center'>
               <div className=' flex items-center '>
                 <div className=' relative left-[-10px] flex justify-center'>
                    <img src="./images/like.png" alt="like" className=' relative left-2.5 z-1'/>
                    <img src="./images/love.png" alt="love" className='relative left-[5px] z-0'/>
                    <img src="./images/wow.png" alt="wow" />
                </div>
                <span className=' text-black font-inter font-bold text-[12px] leading-normal'>12</span>
               </div>

               <div className=' flex items-center  ml-[7px]'>
                  <div className=' flex items-center justify-center'>
                    <div style={{"--i":"2"}} className='participate z-50 h-5 w-5 bg-[#615DFA] rounded-[50%] border border-[#D9D9D9]'></div>
                    <div style={{"--i":"1"}} className='participate z-40 h-5 w-5 bg-[#615DFA] rounded-[50%] border border-[#D9D9D9]'></div>
                    <div style={{"--i":"0"}} className='participate z-20 h-5 w-5 bg-[#615DFA] rounded-[50%] border border-[#D9D9D9]'></div>
                    <div style={{"--i": "-1"}} className='participate h-5 w-5 bg-[#615DFA] rounded-[50%] border border-[#D9D9D9]'></div>
                 </div>
                 <span className=' ml-[4px] text-black font-inter font-bold text-[12px] leading-normal'>12 Participants</span>
               </div>
            </div>
            <div className=' flex items-center justify-center gap-x-[15px]'>
                <p className=' text-black font-inter font-bold text-[12px] leading-normal'>13 Comments</p>
                <p className=' text-black font-inter font-bold text-[12px] leading-normal'>2 Shares</p>
            </div>
        </div>

        </div>
        <div className=' flex items-center justify-between box-border bg-[#FCFCFD] pl-5 pr-10 border-t border-t-[#D9D9D9] py-[25px] pb-5'>
            <div className=' flex items-center justify-center gap-x-4'>
                <LikeIcon/>
                <span className=' relative top-0.5 text-lavender-gray font-inter font-bold text-[12px] leading-normal'>Like</span>
            </div>
            <div className=' flex items-center justify-center gap-x-4'>
                <CommentIcon/>
                <span className=' text-lavender-gray font-inter font-bold text-[12px] leading-normal'>Comment</span>
            </div>
            <div className=' flex items-center justify-center gap-x-4'>
                <ShareIcon/>
                <span className=' text-lavender-gray font-inter font-bold text-[12px] leading-normal'>Share</span>
            </div>
        </div>
        {Postcomment
         && 
         <PostComment/>
        }
        </div>
    </>
  )
}

export default Post