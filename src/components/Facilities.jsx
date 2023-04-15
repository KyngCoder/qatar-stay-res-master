import React from 'react'
import {FiWifi} from 'react-icons/fi'


const iconSize = 40, iconColor="skyblue"
const featuresInfo = [{
    icon: <FiWifi  size={iconSize} color={iconColor}/>,
    text: "Easy to use",    
},
    {
        icon: <FiWifi  size={iconSize} color={iconColor}/>,
        text: "Best Hotels"
    },
    {
        icon: <FiWifi size={iconSize} color={iconColor}  />,
        text: "Best views in Qatar"
    },
    {
        icon: <FiWifi size={iconSize} color={iconColor}/>,
        text: "Fun under the Sun"
    },
    {
        icon: <FiWifi size={iconSize} color={iconColor}/>,
        text: "Fun under the Sun"
    },
    {
        icon: <FiWifi size={iconSize} color={iconColor}/>,
        text: "Fun under the Sun"
    },
    {
        icon: <FiWifi size={iconSize} color={iconColor}/>,
        text: "Fun under the Sun"
    },
    {
        icon: <FiWifi size={iconSize} color={iconColor}/>,
        text: "Fun under the Sun"
    }

]

const features = featuresInfo.map((feature, index) => {

    return (
        <div
            className='shadow-lg center1 h-48   '
            key={index}
        >
            <div className=''>{feature.icon}</div>
            <p className='text-3xl'>{feature.text}</p>
        </div>
    )
})






const Facilities = () => {
  return (
    <div class="mt-8 w-screen h-full">
  <h2 className='main-font text-gray-500 text-center text-6xl '>Ammenities</h2>

  <div className="grid grid-cols-4 h-full mt-8  px-12 gap-4">
    
  
            {features}

   
</div>
 
  </div>
  
  )
}

export default Facilities