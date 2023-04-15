import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom'

import renderStars from "../utilities/renderStars";

const RealEstate = (hotels) => {
console.log(hotels.hotels)

  function truncateString(str) {
    if (str.length <= 180) {
      return str;
    } else {
      return str.slice(0, 180) + "...";
    }
  }

  const navigate = useNavigate();

  const toDetailsPage =(hotel)=>{
      console.log(hotel)
navigate('/rooms',{state:{"id":hotel}});
  }

  return (
    <div className="grow h-full ml-8 bg-white  flex-cols">
    {hotels.hotels.map((hotel) => {
      return (
      
        <div onClick={()=>toDetailsPage(hotel.property_name)} className="flex flex-col md:flex-row space-x-0 md:space-x-4 my-8 neumorphic-card">
          <img className="w-full md:w-64 bg-blue-200 h-64 object-cover" src={hotel.image} />

          <div className="flex-cols">
            <h2 className="text-blue-400 capitalize font-bold text-lg mb-1">
              {hotel.property_type}
            </h2>
            <div className="flex items-center mb-1">
              <FaMapMarkerAlt />
              <h2 className="text-2xl font-bold heading-text ml-2 mb-1">
                {hotel.location.street_address} {hotel.location.location_name}
              </h2>
            </div>
            <p className="max-w-md mb-2">
              {truncateString(hotel.description)}
            </p>

            {renderStars(hotel.ratings)}
          </div>
        </div>
       
      );
    })}
  </div>
  )
}

export default RealEstate