
import {useState, useEffect} from 'react';

import axios from 'axios'



export default function Signup() {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        gender: "",
        date_of_birth: "",
        nationality: "",
        password: "",
        email_address: "",
        password_confirm: "",
        agree: false,
        phone_number: "8763130347",
        language: "english"

    })

    const [countries, setCountries] = useState([])

    const submitForm = async () => {

        const {password, password_confirm} = formData
        // check if password fields match

        if(password === password_confirm) {

            try {
                await axios.post('http://localhost:5000/createUser', formData)
                .then( ()=> {
                    console.log("Success")
                })
            }catch(error) {
                console.error(error)
            }

        }else {
            alert('Passwords do not match!!!')
            return;
        }

        
    }


    useEffect( () => {
        fetch("https://restcountries.com/v2/all")
        .then(response => response.json())
        .then( data => {
            const result = data.map( country => {
                // console.log(country)
                return (
                    <option>
                        {country.name}
                    </option>
                )
            })

            // console.log(result)

            setCountries(result)
            // console.log("DATAT")

            
        } )
    }, [countries])


    const handleChange = (e) => {
        
        const {name, value, type, checked} = e.target


        setFormData( (prev) => {

            if(type == 'checkbox') {

                return ({
                    ...prev,
                    [name]: checked
                })

            }else {

                return ({
                    ...prev,
                    [name]: value,
                })
            }    
        } )


        console.log(formData)
    }

    return (

        <div className="signup-form mt-32 container mx-auto my-12">
            <h1 className="text-center text-5xl font-semibold my-4 succes-color">Welcome to Qatar Stay!</h1>
            <p className="text-center text-lg font-semibold">We are excited to have you join us. <br /> Please enter the following form so we can find the best stay for you!</p>
        
            <div className="flex justify-between flex-wrap flex-col w-full md:w-4/5  mx-auto my-6 border-2 p-6 drop-shadow-lg md:flex-row  ">
                
                <div className="form-input">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" placeholder='your first name' name="first_name" id="first_name" onChange={handleChange} pattern="[a-z]" />
                </div>

                <div className="form-input">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" placeholder='your last name' name="last_name" id="last_name" onChange={handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={handleChange}/>
                </div>

                <div className="lg:flex md:flex-cols items-center my-2 mt-0   space-x-5">
                    <label htmlFor="">Gender:</label>
                  
                    
                    <input type="radio" name="gender"  value="male" id="username" onChange={handleChange}/> 
                    <label htmlFor="firstname">Male</label>
                    
                    <input type="radio" name="gender" value="female" id="username" onChange={handleChange}/>
                    <label htmlFor="firstname">Female</label>
                </div>


                <div className="form-input">
                    <label htmlFor="dob">D.O.B.</label>
                    <input type="date" className='w-48' name="date_of_birth" id="dob" onChange={handleChange}/>
                </div>

                <div className="form-input">
                    <label htmlFor="firstname">Nationality</label>
                    <select name="nationality" className='p-2 ml-2' id="" onChange={handleChange}>

                     {countries}

                    </select>
                </div>

                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                    placeholder='enter password' onChange={handleChange}/>
                </div>

                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email_address" id="email" placeholder='enter your email' 
                onChange={handleChange}/>
                </div>

                <div className="form-input">
                    <label htmlFor="password_confirm">Retype Password</label>
                    <input type="password" name="password_confirm" placeholder="confirm password" id="password_confirm" onChange={handleChange}/>
                </div>

                <div className="flex items-center mt-2 md:-mt-8">
                    <input type="checkbox" name="agree" id="agree" onChange={handleChange}/>
                    <label htmlFor="agree" className='ml-8'> I agree to Terms and Conditions</label>
                </div>

            

            </div>

           
            <button
                className="bg-blue-500 py-3 px-6 rounded-full text-white block mx-auto disabled:bg-gray-300 text-2xl"
                disabled={!formData.agree}
                onClick = {submitForm}
            >
                SignUp
            </button>
        </div>

    )
}