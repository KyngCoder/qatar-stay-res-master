import React, { useState } from 'react'

const AddVillas = () => {

   const [villa, setVilla] = useState({
    name: " ",
    address: " ",
    city:" ",
    longitude:" ",
    latitude:" ",
    ratings:" ",
    image: " "
   })

   const submitVilla = () => {
    console.log(villa)
  }

   const handleChange = (e) => {
    setVilla((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className='bg-blue-200 mt-24 h-full flex-col w-screen overflow-x-screen px-32'>
       
       <div>
       <h2 className='text-4xl text-center py-8 font-bold '>Add Villas</h2>
       </div>

 
        <div className='flex-cols justify-center h-full w-screen'>
  <input type="text" name="name" placeholder='Villa name' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />

<div>
<input type="text" name="city" placeholder='city of Villa' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
</div>


<div>
<input type="text" name="address" placeholder='address' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
</div>

 <div>
 <input type="text" name="longitude" placeholder='longitude' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
 </div>

 <div>
 <input type="text" name="latitude" placeholder='latitude' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
 </div>

  <div>
  <input type="text" name="ratings" placeholder='Villa rating' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
  </div>

  <div>
  <input type="url" name="image" placeholder='enter image url' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
  </div>

  <div>
  <textarea type="text" name="description" placeholder='Enter description of villa' onChange={handleChange} className='py-2 w-96 h-64 px-4 rounded-md my-2' />
  </div>

  


</div>


<button className='p-4 bg-green-300 translate-x-1/2 my-8 mx-32 text-lg' onClick={submitVilla()}>Add Villa</button>

    </section>
  )
}

export default AddVillas