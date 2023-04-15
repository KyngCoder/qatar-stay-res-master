import React, { useState } from "react";
import { FourStars, OneStar, ThreeStars, TwoStars } from "../utilities/customerStars";

const Filter = () => {
  const [selectedState, setSelectedState] = useState("");
  const [rating, setRating] = useState(4)

  const states = [
    "Ad Dawhah(Doha)",
    "Al Wakrah",
    "Al Khor",
    "Umm Salal",
    "Al Daayen",
    "Ar Rayyan",
    "Al Shamal",
  ];

  const amenities = [
    
    "Chefs",
    "Boat",
    "Gym",
    "Bar",
    "Terrace",
    "Free Wi-Fi",
    "Pet-friendly",
    "Free Parking",
    "Swimming pool",
    "Cooking Lessons",
    "Private Beaches",
    "Air Conditioning",
    "Washing Machine",
    "Daily housekeeping",
    "Breakfast included",
    "Concierge Services",
    "TV and Entertainment",
    
  ];

  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleAmenityChange = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedState(event.target.value);
  };

  console.log(rating)

  return (
    <div className="neumorphic-card h-full md:w-2/5 w-0 mt-6 hidden lg:flex ">
      <div className="flex-cols ml-2 w-full ">
        <h2 className="font-bold text-2xl heading-text mb-2 ">Filters</h2>
        <hr className="bg-gray-500 h-0.5 w-full mb-4" />

        <div>
          <h2 className="font-semibold text-2xl heading-text mb-2 ">
            Location
          </h2>

          <div className="relative w-3/5  ">
            <select
              value={selectedState}
              onChange={handleSelectChange}
              className="block appearance-none w-full bg-gray-100 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight 
        focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option className="text-gray-700" key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M14.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L17.586 11H3a1 1 0 110-2h14.586l-3.293-3.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <hr className="bg-gray-500 h-0.5 w-full mb-2 mt-2" />

          <div className="flex-cols">
            <h2 className=" font-semibold text-2xl heading-text mb-2 ">
              Ammenities
            </h2>

            <div className="flex flex-col space-y-2 h-72 flex-wrap">
              {amenities.map((amenity) => (
                <label key={amenity} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                  />
                  <span className="ml-2 text-gray-700">{amenity}</span>
                </label>
              ))}
            </div>
          </div>
          <hr className="bg-gray-500 h-0.5 w-full mb-2 mt-2" />
          <div className="flex-cols">
            <h2 className=" font-semibold text-2xl heading-text mb-2 ">
              Property Rating
            </h2>

            <div onClick={()=>setRating(4)}  className="flex items-center cursor-pointer">
              <FourStars />
              <p className="ml-1"> & up</p>
            </div>

            <div onClick={()=>setRating(3)}  className="flex items-center cursor-pointer">
              <ThreeStars />
              <p className="ml-1"> & up</p>
            </div>

            <div onClick={()=>setRating(2)}   className="flex items-center cursor-pointer">
              <TwoStars />
              <p className="ml-1"> & up</p>
            </div>

            <div onClick={()=>setRating(1)}  className="flex items-center cursor-pointer">
              <OneStar/>
              <p className="ml-1"> & up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
