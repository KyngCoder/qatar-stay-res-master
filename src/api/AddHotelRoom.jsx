import {useState} from 'react'



export default function AddHotelRoom() {

    const [formData, setFormData] = useState({
        title: "",
        cover_pic: "",
        night_price: "",
        description: "",
        room_number: "",
        hotel_id: "",
        hotel_floor: "",
        room_type: "",
        amenities: [],
        occupancy : "",
        currency: "",
        last_update: "",
        status: "",

    })    


     function handleChange(e) {
        const {name, value, type, checked} = e.target
        console.log(name, value, type, checked)

        if(type == 'checkbox') {
            setFormData( (prev) => {
                console.log(value)
                const {amenities} = prev
                const newArray = [...amenities, value]
                return (
                    {
                        ...prev,
                      amenities: newArray // fixed typo here
                    }
                ) 
            })
            
            
          
        }else {
            setFormData( (prev) => {
                return (
                    {
                        ...prev,
                        [name]: value
                    }
                )
            })
        }

        

        console.log(formData)

    }

    const amenities = [
        "Free Wi-Fi",
        "Air conditioning",
        "Cable/satellite TV",
        "Mini fridge",
        "Microwave",
        "Coffee maker",
        "Iron and ironing board",
        "Hairdryer",
        "In-room safe",
        "Room service",
        "Daily housekeeping",
        "On-site restaurant",
        "Fitness center",
        "Pool",
        "Spa",
        "Business center",
        "Conference facilities",
        "Laundry facilities",
        "Pet-friendly",
    ];

    // const amentitesData = amenities.map( (amenity, index) => {
    //     return {
    //         name: amenity
    //     }
    // })

    const checkboxes = amenities.map( (amentity, index) => {
        return (
            < span key={index}>
                <input type="checkbox" name={amentity} id={amentity} value={amentity}  onChange={handleChange}/>
                <label htmlFor={amentity}>{amentity}</label>
                
            </span>
        )
    })

    

    return (

        <div className="hotel-room-form container mx-auto">
            
            <h1 className="text-4xl font-bold">Hotel Rooms</h1>
            <p>Add new hotel room Lamar</p>

            <div className="flex justify-between w-full gap-12">
                
                <div>
                    <div>
                        <label htmlFor="title">Hotel Title</label>
                        <input type="text" name="title" id="title" 
                            onChange={handleChange}
                        />
                    </div>

                

                    <label htmlFor="cover_pic">Cover Picture <b>URL</b></label>
                    <input type="text" name="cover_pic" id="cover_pic" 
                        onChange = {handleChange}
                    />

                    <label htmlFor="night_price">Nightly Price</label>
                    <input type="number" name="night_price" id="night_price" 
                        onChange={handleChange}
                    />

                    <label htmlFor="description">Description</label> <br />
                    <textarea name="description" id="description" cols="30" rows="10"  onChange={handleChange}></textarea>

                    <br />

                    <label htmlFor="room_number">Room Number</label>
                    <input type="text" name="room_number" id="room_number"  onChange={handleChange} />

                    <label htmlFor="hotel_id">Hotel ID</label>
                    <input type="text" name="hotel_id" id="hotel_id"  onChange={handleChange} />

                    <label htmlFor="hotel_floor">Hotel Floor</label>
                    <input type="text" name="hotel_floor" id="hotel_floor"  onChange={handleChange} />

                    <label htmlFor="room_type">Room Type</label>
                    <select name="room_type" id="room_type" onChange={handleChange}>

                        <option value="standard">Standard Room</option>
                        <option value="deluxe">Deluxe Room</option>
                        <option value="excutive">Executive Suite:</option>
                        <option value="family">Family Suite</option>
                        <option value="penthouse">Penthouse Suite</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="occupancy">Occupancy</label>
                    <input type="text" name="occupancy" id="occupancy"  onChange={handleChange}/>

                    <label htmlFor="amentities">Amentities</label>
                    <br />
                    

                    
                    {checkboxes}                


                    <label htmlFor="currency"></label>
                    <input type="number" name="currency" id="currency"  onChange={handleChange}/>

                    <label htmlFor="last_update">Last Updated</label>
                    <input type="date" name="last_update" id="last_update" onChange={handleChange} /> 

                    <select name="status" id="status" onChange={handleChange}>
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                    </select>


                    <button
                    className='bg-green-500 text-lg text-black px-4 py-2 rounded border-2 block '
                        onClick={() => console.log(formData)}
                    >Submit Form</button>
                </div>
            </div>
        </div>
    )
}