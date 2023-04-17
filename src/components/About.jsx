import React from 'react'

const About = () => {
  return (
    <section className="bg-white mt-32 container mx-auto p-8">
    <div className="max-w-7xl mx-auto py-0  sm:px-6 lg:py-24 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Qatar Stay is a luxury travel company dedicated to providing the ultimate travel experiences in Qatar. We specialize in booking hotels, villas, and other accommodations, and offer a wide range of services to ensure your trip is unforgettable. With our local expertise and personalized approach, we help you plan your dream stay in Qatar.
          </p>
        </div>
        <div className="mt-12 lg:mt-0">
          <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h3>
          <p className="mt-4 text-lg text-gray-500">
            Our mission is to provide our clients with the highest level of service and luxury travel experiences. We aim to be the leading travel company in Qatar by offering a personalized approach to each of our clients, and by providing them with the best selection of hotels, villas, and other accommodations in Qatar. We strive to exceed our clients' expectations and make their trip to Qatar truly unforgettable.
          </p>
        </div>
      </div>
    </div>

    <div>
        <h3 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>Our Story</h3>

        <div className="flex gap-4 mb-12">
          <div className="md:w-3/5 w-full">

            <p className='mt-4 text-lg text-gray-500'>
            As a passionate traveler with a deep love for exploring new cultures and destinations, I've always been drawn to the unique and fascinating country of Qatar. From the bustling souks and traditional markets to the modern skyscrapers and innovative architecture, there's something special about Qatar that captures the imagination and leaves a lasting impression.
            </p>

            <p className='mt-4 text-lg text-gray-500'>
            Years ago, while on one of my many trips to Qatar, I met a group of fellow travelers who shared my enthusiasm for this beautiful country. We bonded over our love of adventure and our desire to share the beauty and culture of Qatar with others, and soon we decided to start a travel company that would focus exclusively on this amazing destination.
            </p>

            <p className='mt-4 text-lg text-gray-500'>
            Our goal was simple: to provide unique and authentic experiences that would showcase the best of Qatar's rich history and vibrant present. We wanted to create tours and packages that catered to different interests and budgets, and that would leave a lasting impression on our clients.s
            </p>

            <p className="mt-4 text-lg text-gray-500">
            Over the years, our travel company has grown and evolved, but our commitment to providing exceptional service and unforgettable experiences has remained the same. We've recruited a team of local experts who share our passion for Qatar and who have an intimate knowledge of the country's culture and attractions. We've designed and curated a range of tours and packages that cater to different interests and budgets, from luxury tours to adventure trips to cultural immersions.
            </p>

            <p className="mt-4 text-lg text-gray-500">
            As a team, we're deeply committed to responsible tourism and sustainable practices, and we strive to make a positive impact on the communities we visit. We believe that travel can be a force for good, and we're proud to share the beauty and culture of Qatar with the world.
            </p>

          </div>
          <div className="hidden lg:block">
            <img src="https://img.freepik.com/free-photo/successful-interracial-business-team-with-tablet-posing-outside_74855-1643.jpg?w=740&t=st=1681248426~exp=1681249026~hmac=3c2105e30e9cfa1203bfe3c521957b84dd4ba882186b8083bcfd2ceb2c99a635" width="100%" className="mb-12"/>

            <img src="https://img.freepik.com/free-photo/happy-excited-colleagues-chatting-smartphones_74855-1972.jpg?w=740&t=st=1681248519~exp=1681249119~hmac=146dcebc3190c7884aeaa5167ae3b238af0345ac38c4360ddd153ce10158b3d6" width="100%"/>
          </div>
        </div>
    </div>
</section>

  )
}

export default About