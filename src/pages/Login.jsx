import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'

export default function Login() {

    const [formData, setFormData] = useState({})

const navigate = useNavigate()
    const handleChange =(e) => {
        const {name, value, type} = e.target

        setFormData( (prev) => {

            return ( {
                ...prev,
                [name]: value,

            })
        })

        console.log(formData)
    }

//     "heslopd",
//   "heslop321"
    const loginIn = async () => {
        try{
            await axios.post("http://localhost:5000/login", 
            formData
        )
        navigate('/')
        }catch (err) {
            console.log(err);
         
          }
    }

    return (
        <div className="mt-32 container mx-auto w-96 p-6 border-2 shadow-lg">
            <h1 className="text-blue-500 text-3xl text-center mb-6 font-semibold">Login</h1>
            <p className="text-gray-700 text-center mb-6">Welcome back esteemed traveller! <br />Please login so we can assist you in booking your <b>dream stay </b> in <b>Qatar!</b> </p>

            <div className="login">

                <input 
                    type="text"
                    placeholder="username"
                    name="username"
                    id="username"
                    onChange={handleChange}
                />

                <input 
                    type="password"
                    placeholder="password"
                    name="password"
                    id="password"
                    onChange={handleChange}

                />

                <button
                onClick={loginIn}
                    className="primary-color py-2 px-6 text-white font-bold rounded-lg block mx-auto transition hover:scale-110 shadow-lg"
                    >
                    Login
                </button>

                <span
                    className="text-blue-800 underline my-4 w-full text-center block cursor-pointer"
                onClick={() => alert("Sorry We cant help you...")}>Forgot Password</span>

                <hr className="border-gray-400 mb-4" />

                <p className="text-center">Dont have an account? <Link to="/signup"> SignUp</Link> </p>


            </div>
        </div>
    )
}