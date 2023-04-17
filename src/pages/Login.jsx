import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'
// import jwt from "jsonwebtoken";
import { useJwt } from "react-jwt";

export default function Login() {

    const [formData, setFormData] = useState({})
    const [valid, setValid] = useState(true)
    var response = ""

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
            response = await axios.post("http://10.44.16.58:5000/login", 
            formData)
            setValid(true)
            alert("Logged In Successfully")

            console.log(response.data)
            // save the loginstate
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userID', response.data.userId)
            // console.log(jwt.decode(response.data.token))
            // console.log(useJwt(response.data.token).decodedToken)

        navigate('/dashboard')
        }catch (err) {
            console.log(err);
            alert("Error loging in")
            setValid(false)
         
          }
    }

    return (
        <div className="mt-32 container mx-auto w-96 p-6 border-2 shadow-lg mb-12">
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
                {
                    !valid && <span className="text-red-500 underline text-sm text-center block mb-4">Username or password is incorrect</span>
                }
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

                <p className="text-center">Dont have an account? <Link to="/signup"> <span className="text-blue-800 underline">SignUp</span></Link> </p>


            </div>
        </div>
    )
}