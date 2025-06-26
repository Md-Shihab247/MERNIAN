import React from 'react'


    const friends = [
        {name: "Zara Blackwood",  src: ""},
        {name: "Marcus Chen", src: ""},
        {name: "Lucia Fernandez", src: ""},
        {name: "Finn O'Reilly", src: ""},
        {name: "Amara Patel", src: ""},
        {name: "Dominic Thorne", src: ""},
        {name: "Nadia Khoury", src: ""},
        {name: "Felix Bergström", src: ""},
        {name: "Maya Sinclair", src: ""},
        {name: "Kai Nakamura", src: ""},
    ]

const FriendsPanel = () => {
  return (
    <div className='w-[4.9140%] flex justify-center'>
       <div>
          {friends.map((friend,index)=>{

            return <div className='w-10 h-10 bg-[#4E4AC8] mt-2 rounded-[50%] border-2 border-[#D9D9D9]'>
                     <img src="" className='w-full h-full rounded-[50%] bg-cover'/>
                  </div>

          })}
       </div>
    </div>
  )
}

export default FriendsPanel