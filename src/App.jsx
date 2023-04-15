import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from './components/Banner'

import Hotels from './pages/Hotels'
import Home from './pages/Home'
import Villas from './pages/Villas'
import Appartments from './pages/Appartments'
import About from './components/About'
import Articles from './pages/Articles'
import ArticlesDetails from './pages/ArticleDetails'
import AddHotel from './api/AddHotel'

import AddHotelRoom from './api/AddHotelRoom'
import AddAmmenities from './api/AddAmmenities'
import AddVillas from './api/AddVillas'
import BookingForm from './components/BookingForm'
import Signup from './pages/Signup'
import Login from './pages/Login'

import Footer from './components/Footer'
import Rooms from './pages/Rooms'

import RoomsDetails from './pages/RoomDetails'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/villas" element={<Villas />} />

          <Route path="/appartments" element={<Appartments />} />

          <Route path="/about" element={<About />} />

          <Route path="/articles" element={<Articles />} />

          <Route path="/articles/details" element={<ArticlesDetails />} />

          <Route path="/admin/properties/add" element={<AddHotel />} />

          <Route path="/admin/hotel-room/add" element={<AddHotelRoom />} />

          <Route path="/rooms" element={<Rooms />} />

          <Route path="/admin/ammenities/add" element={<AddAmmenities />} />

          <Route path="/admin/villas/add" element={<AddVillas />} />

          <Route path="/book" element={<BookingForm />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={ <Login />} />

          <Route path="/room/detail" element={<RoomsDetails />} />
          
        </Routes>
      <Footer />
      </BrowserRouter>
     
    </div>
  )
}