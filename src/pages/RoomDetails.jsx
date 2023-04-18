import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { BsCheck2Square } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
// import { IconName } from

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";

const RoomsDetails = () => {
  const location = useLocation();
  const { id, propertyLocation } = location.state;

  console.log(propertyLocation);
  const defaultImages = [
    {
      url: "https://www.publicdomainpictures.net/pictures/30000/t2/plain-white-background.jpg",
    },
    {
      url: "https://www.publicdomainpictures.net/pictures/30000/t2/plain-white-background.jpg",
    },
    {
      url: "https://www.publicdomainpictures.net/pictures/30000/t2/plain-white-background.jpg",
    },
  ];

  const center = useMemo(
    () => [propertyLocation.latitude, propertyLocation.longitude],
    []
  );
  const zoom = useMemo(() => 13, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const [selectedRoom, setSelectedRoom] = useState({});
  const [images, setImages] = useState(defaultImages);
  const navigate = useNavigate();

  const getRoom = async () => {
    const response = await axios.get("http://10.44.16.58:5000/room/");
    const room = response.data.find((room) => room.id === id);
    setSelectedRoom(room);
  };

  useEffect(() => {
    getRoom();
  }, []);

  console.log(selectedRoom);

  useEffect(() => {
    if (selectedRoom.images) {
      const str = selectedRoom.images;
      const image = JSON.parse(str.replace("javascript: ", ""));
      setImages(image);
    }
  }, [selectedRoom]);

  const [currentImage, setCurrentImage] = useState("");

  // ...

  useEffect(() => {
    if (images.length > 0) {
      setCurrentImage(images[0]);
    }
  }, [images]);

  const result = images.map((image) => {
    return (
      <SplideSlide>
        <img src={image} />
      </SplideSlide>
    );
  });

  const amenities = selectedRoom.amenities?.map((amenity, index) => {
    return (
      <div
        className={`shadow-lg rounded-full items-center flex justify-center py-2 px-4 gap-2  ${
          amenity.type === "free" ? "bg-green-300" : "bg-red-300"
        }`}
        key={index}
      >
        <img
          src={amenity.icon}
          height="full"
          className="relative translate-y-2"
          width="20px"
        />
        <p className="text-xl capitalize">{amenity.name}</p>
      </div>
    );
  });

  const imageCell = images.map((image, index) => {
    return (
      <img
        src={image}
        width="200px"
        onClick={() => setCurrentImage(images[index])}
      />
    );
  });

  const reserve = (index) => {
    navigate("/book", { state: { id: index } });
  };

  return (
    <div className="mt-36 container mx-auto mb-16">
      <h2 className="text-4xl text-center mb-6 text-blue-500 font-bold capitalize ">
        {selectedRoom.property_name}
      </h2>

      <div className="md:hidden block">
        <Splide
          onMoved={() => setCurrentSlide(splideObject.index)}
          options={{
            width: 400,

            type: "loop",
          }}
          start={currentSlide}
        >
          {result}
        </Splide>
      </div>

      <div className="hidden md:flex space-x-10 items-center justify-center">
        <img src={currentImage} className="w-1/2" />

        <div className="grid grid-cols-2 gap-2 items-center">{imageCell}</div>
      </div>

      <div className=" shadow-3xl p-4 rounded bg-gray-100 mt-12">
        <h3 className="text-4xl font-bold text-center mb-4">Room Details</h3>

        <div className="flex gap-6 justify-center flex-col sm:flex-row p-6">
          <div className="flex gap-6 mt-12 flex-wrap">{amenities}</div>
          <div>
            <table className="table-auto">
              <tr>
                <td>
                  <b>Available</b>
                </td>
                <td>{selectedRoom.availablity_status === 1 ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>
                  <b>Price</b>
                </td>
                <td>{selectedRoom.base_price}</td>
              </tr>
              <tr>
                <td>
                  <b>Type</b>
                </td>
                <td>{selectedRoom.room_type}</td>
              </tr>
              <tr>
                <td>
                  <b>Rating</b>
                </td>
                <td>
                  {" "}
                  <FaStar className="text-blue-700 inline" />{" "}
                  {selectedRoom.ratings}
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div class="flex-cols items-center">
          <div class="flex items-center">
            <span class="w-2 h-2 inline-block bg-red-500 rounded-full mr-2"></span>
            <span class="text-gray-600 dark:text-gray-400">Paid Ammenities</span>
          </div>

          <div class="flex items-center">
            <span class="w-2 h-2 inline-block bg-green-500 rounded-full mr-2"></span>
            <span class="text-gray-600 dark:text-gray-400">Free Ammenities</span>
          </div>
        </div>

        <div
          onClick={() => reserve(selectedRoom)}
          to="/book"
          className="flex  w-full justify-center"
        >
          <button class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-400 border-blue-700 text-white">
            <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span class="relative text-3xl">Book Now!</span>
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-4xl my-2 mb-1 font-semibold text-blue-400 heading-text">
          Location
        </h2>
        <p className="mb-2">
          {propertyLocation.street_address}, {propertyLocation.location_name}
        </p>
      </div>
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>Hotel</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default RoomsDetails;
