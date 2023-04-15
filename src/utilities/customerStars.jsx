import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

export const OneStar = () => {
    return (
      <div className="flex" >
        <FaStar className="text-yellow-400" />
        <FaRegStar className="text-yellow-400" />
        <FaRegStar className="text-yellow-400" />
        <FaRegStar className="text-yellow-400" />
        <FaRegStar className="text-yellow-400" />
      </div>
    );
  };



 export const TwoStars = () => {
    return (
      <div className="flex text-yellow-400">
        <FaStar  />
        <FaStar />
        <FaRegStar  />
        <FaRegStar  />
        <FaRegStar  />
      </div>
    );
  };


 export const ThreeStars = () => {
    return (
        <div className="flex text-yellow-400">
        <FaStar  />
        <FaStar />
        <FaStar  />
        <FaRegStar  />
        <FaRegStar  />
      </div>
    );
  };

  

 export  const FourStars = () => {
    return (
        <div className="flex text-yellow-400">
        <FaStar  />
        <FaStar />
        <FaStar  />
        <FaStar  />
        <FaRegStar  />
      </div>
    );
  };
