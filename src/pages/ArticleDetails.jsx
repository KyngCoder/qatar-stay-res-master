import { useLocation } from "react-router-dom"


export default function ArticlesDetails(props) {

    const location = useLocation();

    const {title, desc,img} = location.state

    console.log(desc[0].subtitle)
    

    // var words = desc.split('.').map( word => {
    //     return (
    //         <p>
    //             {word}
    //             </p>
    //     )
    // })

    // console.log(words)

    


    return(
        <div
            className="mt-32 container mx-auto  py-6 px-4 gap-12 "
        >
            {/* <div className="w-1/2"> */}
                
            
            <div className="">
                <h2 className="text-4xl font-bold mb-8 heading-text">{title}</h2>
                <img src={img} className="md:float-left mr-6 md:w-1/2 w-full " alt="" />

                
                {desc.map((item, index) => {
                    return(
                        <div>
                        <h3 className="text-2xl my-2 font-semibold">{item.subtitle}</h3>

                        <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}