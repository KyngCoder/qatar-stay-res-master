import React, { useState} from 'react'


import news from '../api/news'
import { Link , useNavigate} from 'react-router-dom'


const Articles = () => {

    const [position, setPosition] = useState(15)

    console.log(news)


    const navigate = useNavigate();

    const toDetailsPage =(info)=>{
        console.log(info)
  navigate('/articles/details',{state:{"title":info.title,"desc":info.description,"img": info.image}});
    }

  return (
    <div>
        <h2 className='text-center mt-32 mb-4  text-3xl md:text-4xl text-blue-400  font-bold'>Explore Qatar: Latest Travel Tips & Advice</h2>

        <div className="grid grid-cols-1 place-items-center md:grid-cols-3  lg:grid-cols-4 px-8">

    

{news.tips?.slice(0, position).map((info,index) => {
  return (
   
      <div onClick={()=>toDetailsPage(info)}  className="m-4 max-w-md cursor-pointer shadow-lg rounded-xl overflow-hidden  ">
        <div className="relative">
          <img
            className="w-full h-full object-cover "
            src={info.image || " "}
            alt=""
          />
        
        </div>

        <div className="p-2 text-xl font-semibold text-center md:text-left md:text-lg">{info.title.substring(0, 50)}...</div>
      </div>
    
 
  );
})}
</div>

    </div>
  
  )
}

export default Articles