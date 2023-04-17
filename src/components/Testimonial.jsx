import { useState } from "react"

import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Testimonials() {
    const info = [
        {
            url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Anisha Li",
            content: 'Qatar Stay made booking my Doha trip in 2020 easy and affordable. The website was user-friendly and customer support was responsive.'
        },
        {
            url: "https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Ali Brave",
            content: 'Thanks to Qatar Stay, my family vacation to Qatar was a breeze in 2020. User-friendly website and great hotel options.'
        },
        {
            url: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg",
            name: "Anna-Maria Morgan",
            content: 'Qatar Stay was efficient and helpful in booking my business trip to Qatar in 2020. Clear confirmation email and responsive customer support'
        },
        
    ]

    const [width, setWidth] = useState(0)



    let elements = info.map( (info, index) => {
        return (
            
                <div className="bg-slate-100 rounded w-full md:w-1/3 text-black p-4 mt-12 mb-12" key={index}>
                    <img src={info.url} alt="Profile Pic" class="rounded-full w-24 -translate-y-12 mx-auto" />
                    <h4 className="font-bold mb-4">{info.name}</h4>
                    <p>{info.content}</p>
                </div>
            
        )
    })

    return (
        <section className="w-full md:p-12 p-4 mt-6">
            <h2 className="text-3xl font-bold text-center mb-6">What They've Said</h2>

            
            <section className="text-center">
            
                <div
                    className='md:flex gap-6 items-center  block'
                >
                    {elements}
                </div>

                
           
                <button className="bg-blue-500 py-2 px-6 rounded-md text-white text-xl mx-auto mt-0 md:mt-12">Get Started</button>
            </section>
        </section>
    )
} 