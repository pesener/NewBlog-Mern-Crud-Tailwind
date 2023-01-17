import React from "react";
import {RiUserFill, RiUserAddFill} from 'react-icons/ri'
import {RiAdminLine} from 'react-icons/ri'
import{RiLogoutCircleLine} from 'react-icons/ri'
import { useEffect,useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";






const Navbar  = ( )=>{

const dispatch = useDispatch()    
const navigate= useNavigate()
const location = useLocation()    
const[user,setUser] = useState()

const exit= async (id)=>{
    await dispatch(logout(id))
    setUser(null)
    navigate('/')
}


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

        { user? ( 
<nav className=" flex gap-x-8 font-semibold text-opacity-90 text-white  pr-10  ">
<a className="flex items-center gap-x-1 bg-blue-700 hover:bg-blue-800 rounded-full px-2 py-1 " href="/create">
        <RiAdminLine size={20}/>
             Admin Panel
        </a>
        <a className="flex items-center gap-x-1 bg-red-800 hover:bg-red-900 rounded-full px-4 py-1"   onClick={(e) =>{
            exit(user.user._id)
        }}>
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