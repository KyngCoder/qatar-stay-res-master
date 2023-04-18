import { useEffect, useState } from "react"
import logo from '../assets/images/logo.png'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

// import 'jsonwebtoken'


export default function Dashboard() {
    
    const [userData, setUserData] = useState({})

    const navigate = useNavigate();

    useEffect( () => {

        async function  getId() {

            const id = localStorage.getItem('userID')
            console.log(id)

            let response = await axios.get(`http://10.44.16.58:5000/user/${id}`)

            console.log(response)
        
            setUserData(response.data.data[0])
        }

        getId()
        // console.log(token)

        // alert(jwt.decode(token))
    }, [])

    function logout() {
        alert("User logged out")
        navigate('/')

    }



    return (
            <div className="flex h-screen bg-gray-100 mt-24">
                <div className="flex-shrink-0 w-72 bg-white border-r">
                    <div className="flex items-center justify-center h-16 border-b">
                        <span className="text-lg font-bold">Dashboard</span>
                        
                    </div>
                    
                    <div className="p-2">
                        <h1 className="text-2xl font-bold">This is the dashboard info</h1>
                    </div>
                    
                    <nav className="py-4 px-6 items-center">
                        <Link
                            className="hover:scale-110 transition"
                            to="/"
                        >
                            <div className="logo flex items-center h-full">
                                <img src={logo} className="w-20 md:full p-4" alt="Logo Image" />
                    
                            </div>
                        </Link>
                    <a
                        href="#"
                        className="block py-2.5 px-4 hover:bg-gray-200"
                    >
                        <span className="text-gray-700">Section 1</span>
                    </a>
                    <a
                        href="#"
                        className="block py-2.5 px-4 hover:bg-gray-200"
                    >
                        <span className="text-gray-700">Section 2</span>
                    </a>

                    <button
                        onClick={logout}
                        className="ml-auto bg-red-500 text-white font-semibold py-2 px-4 rounded shadow-sm"
                    >
                        Logout
                    </button>
        </nav>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

        <div className="mb-6">
                <span>Welcome back, <span className="text-3xl font-semibold">{`${userData.first_name} ${userData.last_name}`}</span>  </span>
            </div>

          <div className="bg-white shadow sm:rounded-lg">

           
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold mb-2">Section 1</h2>
              <p className="text-gray-600 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur auctor vitae augue sit amet lobortis. In non ex non
                urna eleifend euismod.
              </p>
            </div>
          </div>


          <div className="mt-4 bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold mb-2">Section 2</h2>
              <p className="text-gray-600 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur auctor vitae augue sit amet lobortis. In non ex non
                urna eleifend euismod.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  

        
    )
}