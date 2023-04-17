import React from 'react'
import {FiWifi, FiWind, FiTv} from 'react-icons/fi'
import {MdDirectionsBoatFilled, MdSportsGymnastics, MdPool, MdDinnerDining, MdCleaningServices} from 'react-icons/md'


const iconSize = 40, iconColor="skyblue"
const featuresInfo = [{
    icon: <FiWifi  size={iconSize} color={iconColor}/>,
    text: "Free WIfi",    
},
    {
        icon: <MdDirectionsBoatFilled  size={iconSize} color={iconColor}/>,
        text: "Boat Trips"
    },
    {
        icon: <MdSportsGymnastics size={iconSize} color={iconColor}  />,
        text: "Gym Membership"
    },
    {
        icon: <MdPool size={iconSize} color={iconColor}/>,
        text: "Fun and Clean Pool"
    },
    {
        icon: <FiWind size={iconSize} color={iconColor}/>,
        text: "Air Conditioning"
    },
    {
        icon: <MdDinnerDining size={iconSize} color={iconColor}/>,
        text: "Free Breakfast"
    },
    {
        icon: <FiTv size={iconSize} color={iconColor}/>,
        text: "Free Cable and Internet"
    },
    {
        icon: <MdCleaningServices size={iconSize} color={iconColor}/>,
        text: "24/7 House-keeping"
    }

]

const features = featuresInfo.map((feature, index) => {

    return (
        <div
            className='shadow-lg center1 h-32 mb-4  md:mb-12 border-2 flex-wrap border-black/10'
            key={index}
        >
            <div className=''>{feature.icon}</div>
            <p className='text-2xl text-black'>{feature.text}</p>
        </div>
    )
})






const Facilities = () => {
  return (
    <div class="mt-8 w-screen h-full">
  <h2 className='main-font text-gray-500 text-center text-6xl '>Ammenities</h2>

  <div className="grid md:grid-cols-4 h-full mt-8 grid-cols-1 px-4  md:px-12 gap-4">
    
  
            {features}

   
</div>
 
  </div>
  
  )
}

export default Facilities