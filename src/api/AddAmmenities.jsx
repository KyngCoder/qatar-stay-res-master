import React, { useState } from 'react'

const AddAmmenities = () => {

  const [ammenities, setAmmenities] = useState({
    name:" ",
    icon:" ",
  })

  const submitAmmenities = () => {
    console.log(ammenities)
  }

  const handleChange = (e) => {
      e.preventDefault()
      setAmmenities((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  
  }

  return (
    <div className='mt-24 bg-blue-300 h-screen'>

<h2 className='text-4xl text-center py-4 '>Add Ammenities</h2>

<div className='flex justify-center gap-4'>


<div>
  <input type="url" name="icon" placeholder='enter image url' onChange={handleChange} className='py-2 px-4 rounded-md my-2 ' />
  </div>

  <div>
  <input type="url" name="name" placeholder='Ammenities' onChange={handleChange} className='py-2 px-4 rounded-md my-2' />
  </div>
  

</div>


<div>



</div>

<button className='p-4 bg-green-300 translate-x-1/2 my-8 mx-32 text-lg' onClick={submitAmmenities()}>Add Ammenties</button>

    </div>
  )
}

export default AddAmmenities