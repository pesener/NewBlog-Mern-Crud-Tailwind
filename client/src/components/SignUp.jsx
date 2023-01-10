import React,{useEffect,useState,useMemo
} from 'react'
import Select from 'react-select'
import countryList from "react-select-country-list";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { register } from "../axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [countrySelect, setCountrySelect] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    countries: countrySelect.label,
    email: "",
    password: "",
    correctionPassword: "",
  });



  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (
      formData.password.length >= 8 &&
      formData.correctionPassword === formData.password
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]);

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (countrySelect) => {
    setCountrySelect(countrySelect);
  };

  useEffect(() => {
    setFormData({ ...formData, countries: countrySelect.label });
  }, [countrySelect]);


  return (
    <div className='min-h-screen'>
    <div className='flex justify-center '>
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md sm:p-9   md:p-5 dark:bg-gray-700 dark:border-gray-800">
      <form className="space-y-3" action="#"
         onSubmit={(e) => {
          e.preventDefault();

          register(formData)
            .then((res) => {
              toast.success(res.data.message);
              navigate("/signin");
            })
            .catch((err) => {
              toast.error(err.response.data.message);
            });
        }}
      >
     

        <div>
          <label
            
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input 
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-600 dark:border-gray-500
            dark:placeholder-gray-400 dark:text-white" required>
            
            
          </input>
        </div>
        <div>
          <label
           
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Surname
          </label>
          <input 
          onChange={(e) =>
            setFormData({ ...formData, surname: e.target.value })
          }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-600 dark:border-gray-500
            dark:placeholder-gray-400 dark:text-white" required>
            
            
          </input>
        </div>
        <p className="text-sm font-medium text-gray-900 dark:text-white" >
              Country
            </p>
            <Select
              options={options}
              value={countrySelect}
              onChange={changeHandler}
            ></Select>
        
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input 
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }type="email" name="email" id="email" className="bg-gray-50 border
            border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
            dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com" required>
          
            
          </input>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input 
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }type="password" name="password"  placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-600 dark:border-gray-500
            dark:placeholder-gray-400 dark:text-white" required>
            
            
          </input>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password Again
          </label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, correctionPassword: e.target.value })
            }
            type="password" name="password" id="password" placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-600 dark:border-gray-500
            dark:placeholder-gray-400 dark:text-white" required>
            
            
          </input>
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-1">
              
            </div>
            
          </div>
          
        </div>
        <button  disabled={disabled}
          
          type="submit"
          className="
          disabled:opacity-70 disabled:cursor-not-allowed w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         
       >
          Create an account
        </button>
        
      </form>
      <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            <p
              style={{
                color: "red",
                display: formData.password.length >= 8 && "none",
              }}
            >
              # Your password must be at least 8 characters.
            </p>
        
        
            <p
              style={{
                color: "red",
                display:
                  formData.password === formData.correctionPassword && "none",
              }}
            >
              # Your password must be same as your password correction.
            </p>
          </div>
    </div>

    </div>
    </div>
  )
}

export default SignUp;