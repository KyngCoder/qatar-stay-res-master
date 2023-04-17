import {FaStar, FaHotel, FaStreetView, FaCloudSun} from 'react-icons/fa'

import {Link} from 'react-router-dom'

const iconSize = 30, iconColor="skyblue"
const featuresInfo = [{
    icon: <FaStar  size={iconSize} color={iconColor}/>,
    text: "Easy to use",    
},
    {
        icon: <FaHotel  size={iconSize} color={iconColor}/>,
        text: "Best Hotels"
    },
    {
        icon: <FaStreetView size={iconSize} color={iconColor}  />,
        text: "Best views in Qatar"
    },
    {
        icon: <FaCloudSun size={iconSize} color={iconColor}/>,
        text: "Fun under the Sun"
    }

]



export default function Features() {


    const features = featuresInfo.map((feature, index) => {

        return (
            <div
                className='shadow-lg rounded-lg flex items-center p-2 gap-4 '
                key={index}
            >
                <span>{feature.icon}</span>
                <p className='text-xl'>{feature.text}</p>
            </div>
        )
    })
    
        return (
            <div className="flex  flex-col md:flex-row  mt-4 md:mt-12 gap-12 container mx-auto justify-center items-center p-4">
    
                <div className="w-full  md:w-2/5">
                    <h2 className="text-4xl  text-center mb-4 font-bold">Live your best Life!</h2>
                    <p>Live your best life in Qatar with our comprehensive travel guide. Discover the vibrant culture and rich history of this stunning Middle Eastern country. From the bustling streets of Doha to the tranquil beaches of the Persian Gulf, Qatar has something for everyone. Explore our hand-picked selection of top-rated hotels, restaurants, and attractions, and start planning your perfect getaway today!</p>
    
                    <div className='flex gap-6 mt-12 flex-wrap'>
    
                        {features}
    
                    </div>

                    <Link to='/signup'>
                        <button
                            className="py-2 px-6 bg-blue-600 uppercase  shadow-lg text-white font-semibold hover:rotate-4 transition rounded-lg mx-auto block mt-12"
                        >
                            Signup
                        </button>
                    </Link>
                    
                </div>
    
                <div className='bg-blue-200 w-4/5 md:w-1/2'>
                <img src="https://images.pexels.com/photos/5007455/pexels-photo-5007455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className=" -rotate-6 drop-shadow-lg transition hover:rotate-0 " />
                </div>
            </div>
        )
}