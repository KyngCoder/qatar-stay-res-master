import axios from 'axios'
import React, { useState } from 'react'

const AddHotel = () => {

   const [property, setProperty] = useState({
    property_name:" ",
    description:" ",
    property_type:" ",
    has_owner:false,
    owner_details:" ",
    ratings:" ",
    image: " ",
    longitude: " ",
    latitude: " ",
    location_name: " ",
    street_address: " "
   })

   const submitProperty = async() => {
    await axios.post("http://localhost:5000/createProperty",property)
    alert("succesfully created property")
  }

   const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setProperty((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className='bg-blue-200 mt-24 h-full flex-col w-screen overflow-x-screen px-32'>
       
       <div>
       <h2 className='text-4xl text-center py-8 font-bold '>Add Property</h2>
       </div>

 
        <div className='flex-cols justify-center h-full w-screen'>
  <input type="text" name="property_name" placeholder='property name' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />

<div>
<input type="text" name="ratings" placeholder='property rating' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
</div>

<div>
<input type="text" name="street_address" placeholder='address' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
</div>


<div>
<input type="text" name="property_type" placeholder='property_type' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
</div>

 <div>
 <input type="text" name="longitude" placeholder='longitude' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
 </div>
 <div>
 <input type="text" name="location_name" placeholder='state' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
 </div>
 

 <div>
 <input type="text" name="latitude" placeholder='latitude' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
 </div>

  <div>
  <input type="text" name="hasOwner" placeholder='enter one or zero' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
  </div>

  <div>
  <input type="url" name="image" placeholder='enter image url' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
  </div>

  <div>
  <input type="text" name="num_rooms" placeholder='num of rooms' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
  </div>

  <div>
  <textarea type="text" name="description" placeholder='Enter description of hotel' onChange={handleChange} className='py-2 w-96 h-64 px-4 rounded-md my-2' />
  </div>

  


</div>


<button className='p-4 bg-green-300 translate-x-1/2 my-8 mx-32 text-lg' onClick={submitProperty}>Add Hotel</button>

    </section>
  )
}

export default AddHotel