import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { login } from "../axios";

const SignIn = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password:"",
    email: "",
  });


  return (
   <div className="flex justify-center">
     <div class=" w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      <form class="space-y-6" action=""  onSubmit={(e) => {
                    e.preventDefault();
      
                    login(formData)
                      .then((res) => {
                        localStorage.setItem("user", JSON.stringify(res.data.user))
                        setUser(res.data.user);
                        navigate("/");
                      })
                      .catch((err) => {
                        toast.error(err.response.data.message);
                      });
                  }}>
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h5>
        <div >
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input type="email" name="email" id="email" class="bg-gray-50 border
            border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
            dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com" required  onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }>
          
            
          </input>
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input type="password" name="password" id="password" placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-600 dark:border-gray-500
            dark:placeholder-gray-400 dark:text-white" required
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }>
            
            
          </input>
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input  id="remember" type="checkbox" value="" class="w-4 h-4 border
                border-gray-300 rounded bg-gray-50 focus:ring-3
                focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600
                dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                
               
              </input>
            </div>
            <label
              for="remember"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
         
        </div>
        <button
        disabled={formData.email === "" || formData.password === ""} 
          type="submit"
          class="w-full text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-900"
        >
          Login to your account
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <a href="/signup" class="text-red-700 hover:underline dark:text-red-500">
            Create account
          </a>
        </div>
      </form>
    </div>
   </div>
  );
};

export default SignIn;
