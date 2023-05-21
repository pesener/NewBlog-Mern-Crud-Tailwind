import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../axios";
import { toast } from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  return (
    <div className="min-h-screen">
      <div className="flex justify-center ">
        <div className=" w-full max-w-sm p-4 mt-12 bg-[#e2e0c1] border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8  dark:border-gray-700 ">
          <form
            className="space-y-6"
            action=""
            onSubmit={(e) => {
              e.preventDefault();

              login(formData)
                .then((res) => {
                  toast.success(res.data.message);

                  localStorage.setItem("user", JSON.stringify(res.data.user));

                  navigate("/");
                })
                .catch((err) => {
                  toast.error(err.response.data.message);
                });
            }}
          >
            <h5 className="text-xl font-medium text-gray-900 ">Sign in</h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-[#EEEEDE] border
            border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-[#EEEEDE]
            dark:border-gray-500 dark:placeholder-gray-400 "
                placeholder="Your email"
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              ></input>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-[#EEEEDE] dark:bg-[#EEEEDE] border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5  dark:border-gray-500
            dark:placeholder-gray-400 "
                required
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              ></input>
            </div>

            <button
              disabled={formData.email === "" || formData.password === ""}
              type="submit"
              className="disabled:opacity-60 disabled:cursor-not-allowed w-full text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-blue-800"
            >
              Sign in to your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
