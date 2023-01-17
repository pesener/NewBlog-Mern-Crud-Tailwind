import React from "react";
import{AiOutlineContacts} from 'react-icons/ai'
import {RiAdminLine} from 'react-icons/ri'
import{RiLogoutCircleLine} from 'react-icons/ri'
import { useEffect,useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";







const Navbar  = ( )=>{

  
const navigate= useNavigate()
const location = useLocation()    
const[user,setUser] = useState()




useEffect(()=>{
    if(localStorage.getItem('user') && !user){
        setUser(JSON.parse(localStorage.getItem('user')))
    }
},[location, user])


   
    return (
        <div className="bg-black">
        <div className="container mx-auto h-20 flex items-center justify-between ">
        
        
        <a className="text-white  text-3xl font-bold pl-10" href="/">
        
            NewBlog
        
        </a>
        <a className="flex items-center gap-x-1 bg-orange-700 hover:bg-orange-800 text-white rounded-full px-2 py-1 mr-9 " href="/">
        <AiOutlineContacts size={20}/>
            Contact
        </a>
        { user? ( 
<nav className=" flex gap-x-8 font-semibold text-opacity-90 text-white  pr-10  ">
<a className="flex items-center gap-x-1 bg-blue-700 hover:bg-blue-800 rounded-full px-2 py-1 " href="/create">
        <RiAdminLine size={20}/>
             Admin Panel
        </a>
        <a className="flex items-center gap-x-1 bg-red-800 hover:bg-red-900 rounded-full px-4 py-1 cursor-pointer"   onClick={(e) => {
              localStorage.removeItem("user");
              setUser(null);
              navigate("/");
            }}
        >
            <RiLogoutCircleLine size={20}/>
             Sign Out
        </a>

      

</nav>
        ): ""
    }
        
        
        
        </div>
        
        
        </div>

    )
}
export default Navbar