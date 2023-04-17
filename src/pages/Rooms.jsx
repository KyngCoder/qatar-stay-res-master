import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import rooms from '../api/room';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';




// export const ImageComponent = ({ buffer }) => {
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     if (buffer) {
//       const dataUrl = bufferToDataUrl('image/png', Buffer.from(buffer.data));
//       setImageUrl(dataUrl);
//     }
//   }, [buffer]);

//   return (
//     <div>
//       {imageUrl ? (
//         <img src={imageUrl} alt="image" />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }





const Rooms = () => {

const location = useLocation();
const {id, propertyLocation} = location.state
console.log(id, propertyLocation)


const [associatedRooms, setAssociatedRooms] = useState(rooms.filter((room) => room.property_name === id));

const getRooms = async() => {
  const room = await axios.get("http://10.44.16.58:5000/room/")
  const selectedRoom = room.data.filter(room => room.property_name === id)
  console.log(selectedRoom)
  setAssociatedRooms(selectedRoom)

}

useEffect(()=>{
getRooms()
}, [])

console.log(associatedRooms)



console.log(associatedRooms.map(room => room))

const navigate = useNavigate();

const navigateToDetails =(index)=>{
    console.log(index)
navigate('/room/detail',{state:{"id":index, "propertyLocation": propertyLocation}});
}

  return(

    <section>

      <h2 className='text-blue-400 mt-32 font-bold text-3xl text-center'>Your Ideal Room Awaits you in Qatar</h2>
      <p className='text-left md:text-center p-6 md:px-32'>Discover Unforgettable Accommodations for Your Dream Stay in Qatar. Our hotel offers luxurious and thoughtfully appointed rooms, providing the perfect escape for an unforgettable stay in Qatar.</p>

    <div className="grid  grid-cols-1 place-items-center md:grid-cols-3  lg:grid-cols-4 mx-8">



      {associatedRooms.map((room, index) => {
        const str = room.images
        const images = JSON.parse(str.replace('javascript: ', ''));
        return(
          <div   className="m-4 max-w-md cursor-pointer shadow-lg rounded-xl overflow-hidden  ">
        <div className="relative">
         
            <img
            className="w-full h-full object-cover "
            src={images[0]}
            alt=""
          />
           
         
          
        
        </div>

        <div className=" px-2 flex font-semibold md:text-left justify-between p-0 mb-2">
        <p className='text-blue-400 capitalize font-bold m-0 p-0 text-lg'>  {room.room_type}</p>
          <div className='flex items-center text-blue-400'>
            <FaStar />
          <p className='text-sm m-0 p-0 pr-2 '>{room.ratings}</p>
            </div>
          </div>

          <div className=" px-2 flex  font-semibold md:text-left  justify-between p-0 mb-2 items-center">
        <p className=' capitalize text-sm m-0 p-0'>${room.base_price
}/night</p>
          
          <button onClick={()=>navigateToDetails(room.id)} className='px-4 py-2 text-white text-lg font-bold bg-blue-400 rounded-md'>Book Now</button>
          
         
      </div>
      </div>
        )
      })}
    </div>
    </section>
  )
};

export default Rooms