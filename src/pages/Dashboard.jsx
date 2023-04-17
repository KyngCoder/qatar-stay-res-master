import { useEffect, useState } from "react"

import axios from "axios"

// import 'jsonwebtoken'


export default function Dashboard() {
    
    const [userData, setUserData] = useState({})

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



    return (
        <div className="mt-32">
            <h1>Dashboard</h1>

            <p>Welcome back <span className="text-3xl text-black">{`${userData.first_name} ${userData.last_name}`}</span></p>


        </div>
    )
}