import React from 'react'

const SignUp = () => {
  return (
    <div className='min-h-screen'>
    <div className='flex justify-center '>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md sm:p-9   md:p-5 dark:bg-gray-700 dark:border-gray-800">
      <form class="space-y-3" action="#">
     

        <div>
          <label
            
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-600 dark:border-gray-500
            dark:placeholder-gray-400 dark:text-white" required>
            
            
          </input>
        </div>
        <div>
          <label
           
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Surname
          </label>
          <input 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-600 dark:border-gray-500
            dark:placeholder-gray-400 dark:text-white" required>
            
            
          </input>
        </div>
        <div>
          <label
           
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Country
          </label>
          <input 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-600 dark:border-gray-500
            dark:placeholder-gray-400 dark:text-white" required>
            
            
          </input>
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input type="email" name="email" id="email" class="bg-gray-50 border
            border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
            dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com" required>
          
            
          </input>
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input type="password" name="password" id="password" placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-600 dark:border-gray-500
            dark:placeholder-gray-400 dark:text-white" required>
            
            
          </input>
        </div>

        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password Again
          </label>
          <input type="password" name="password" id="password" placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-600 dark:border-gray-500
            dark:placeholder-gray-400 dark:text-white" required>
            
            
          </input>
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-1">
              
            </div>
            
          </div>
          
        </div>
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create an account
        </button>
        
      </form>
    </div>

    </div>
    </div>
  )
}

export default SignUp;