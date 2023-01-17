import React from 'react'
import moment from 'moment'
import {MdModeEdit, MdDelete} from 'react-icons/md'
import { deletePost } from '../actions/postActions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cards = ({post}) => {

  const dispatch = useDispatch()

  return (

<div className="max-w-md opacity-90 m-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    
        <img className=" hover:opacity-90 rounded-t-lg h-52 w-96 " src={post.image} alt="" />
    
    <div className="p-5 ">
       
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
       
        <p className="mb-3 font-normal text-gray-400 dark:text-gray-200 truncate ">{post.content}</p>
        
            
            <p className="text-gray-600 dark:text-gray-400 font-normal mb-3">{moment(post.createdAt).fromNow()}</p>
            
        <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
<div className='flex justify-between mt-4 mx-auto'>

  <Link to={`/update/${post._id}`}>
        <div className='cursor-pointer mt-3 '><MdModeEdit  className='fill-blue-400 h-6 w-6'/> </div></Link>



        <div className='cursor-pointer mt-3 '><MdDelete  className='fill-red-400 h-6 w-6'  onClick={() => {
                  dispatch(deletePost(post._id));
                }}/> </div>
        </div>
    </div>
    
</div>

  )
}

export default Cards;