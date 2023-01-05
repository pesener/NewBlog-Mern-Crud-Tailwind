import React from "react";
import {RiUserFill, RiUserAddFill} from 'react-icons/ri'

const Navbar  = ( )=>{
   
    return (
        <div className="bg-black">
        <div className="container mx-auto h-20 flex items-center justify-between">
        
        
        <a className="text-white  text-3xl font-bold pl-10" href="/">
        
            NewBlog
        
        </a>
<nav className=" flex gap-x-8 font-semibold text-opacity-90 text-white  pr-10  ">
        <a className="flex items-center gap-x-1 bg-red-800 hover:bg-red-900 rounded-full px-4 py-1"   href="/signin">
            <RiUserFill size={20}/>
             Sign In
        </a>

        <a className="flex items-center gap-x-1 bg-blue-700 hover:bg-blue-800 rounded-full px-3 py-1" href="/signup">
        <RiUserAddFill size={20}/>
             Sign Up
        </a>


</nav>
        
        
        
        
        
        </div>
        
        
        </div>

    )
}
export default Navbar