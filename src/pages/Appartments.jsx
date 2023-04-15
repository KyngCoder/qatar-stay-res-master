
import React, { useEffect, useState } from "react";
import properties from "../api/properties";


import Filter from "../components/Filter";
import RealEstate from "../components/RealEstate";


const Appartments = () => {
  //extracting hotels from the listing of properties

  const [type, setType] = useState("Apartment")

  const [hotels, setHotels] = useState(properties.listings.filter((property) => property.type === type));

  const [isActive,setIsActive] = useState(1)

  
  useEffect(()=>{
    setHotels(properties.listings.filter((property) => property.type === type))
  },[type])
  

  return (
    <section className="mt-32 flex-col space-x-5 pl-8 pr-16 overflow-x-hidden mb-8">
      <ul class="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-1 ">
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
       
        
        <li onClick={()=> {
          setIsActive(4)
          setType("Home")
        }}>
          {" "}
          <a href="#" className={`${isActive === 4 ? "flex justify-center bg-white rounded-full shadow duration-700 text-indigo-900 py-4" : "flex justify-center py-4"}`}>
            Home
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

export default Appartments;
