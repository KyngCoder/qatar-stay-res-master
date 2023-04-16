import React, { useEffect, useState } from "react";
import properties from "../api/properties";


import Filter from "../components/Filter";
import RealEstate from "../components/RealEstate";
import axios from "axios";


const Hotels = () => {
  //extracting hotels from the listing of properties

  const [type, setType] = useState("Hotel")

  const [hotels, setHotels] = useState([]);

  const [isActive,setIsActive] = useState(1)

  const getHotels = async() => {
    const property = await axios.get("http://localhost:5000/properties")
    const allProperties = property.data
    setHotels(allProperties.filter(list => list.property_type === type ))
  }

  // setHotels(properties.listings.filter((property) => property.type === type))
  useEffect(()=>{
    getHotels()
  },[type])
  
console.log(hotels)
  return (
    <section className="mt-24 flex-col  space-x-5 md:pl-8 md:pr-16 overflow-x-hidden">
      <ul class="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-1 w-full ">
        {" "}
        <li  onClick={()=>{
          setIsActive(1)
          setType("Hotel")
        } }>
          {" "}
          <a href="#" className={`${isActive === 1 ? "flex justify-center bg-white rounded-full shadow duration-700 text-indigo-900 py-4" : "flex justify-center py-4"}`}>
           Hotels
          </a>{" "}
        </li>{" "}
        <li onClick={()=> {
          setIsActive(2)
          setType("Apartment")
        }}>
          {" "}
          <a href="#" className={`${isActive === 2 ? "flex justify-center bg-white rounded-full shadow duration-700 text-indigo-900 py-4" : "flex justify-center py-4"}`}
 >
           Appartments
          </a>{" "}
        </li>{" "}
        <li onClick={()=> {
          setIsActive(3)
          setType("Villa")

        }}>
          {" "}
          <a
            href="#"
            className={`${isActive === 3 ? "flex justify-center bg-white rounded-full shadow duration-700 text-indigo-900 py-4" : "flex justify-center py-4"}`}

          >
            Villas
          </a>{" "}
        </li>{" "}
       
        
        
      </ul>

      <div className="flex">
        <Filter />
        <RealEstate hotels={hotels} />
        
      </div>
    </section>
  );
};

export default Hotels;
