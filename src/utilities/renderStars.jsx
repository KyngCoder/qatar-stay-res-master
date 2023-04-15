import { FaStar, FaStarHalf } from "react-icons/fa";

 const OneStar = () => {
    return (
      <div className="text-yellow-400">
        <FaStar />
      </div>
    );
  };

  const OneAndHalfStars = () => {
    return (
      <div className="text-yellow-400 flex">
        <FaStar />
        <FaStarHalf />
      </div>
    );
  };

  const TwoStars = () => {
    return (
      <div className="flex text-yellow-400">
        <FaStar />
        <FaStar />
      </div>
    );
  };

  const TwoAndHalfStars = () => {
    return (
      <div className="flex text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStarHalf />
      </div>
    );
  };

  const ThreeStars = () => {
    return (
      <div className="flex text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    );
  };

  const ThreeAndHalfStars = () => {
    return (
      <div className="flex text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf />
      </div>
    );
  };

 export  const FourStars = () => {
    return (
      <div className="flex text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    );
  };

  const FiveStars = () => {
    return (
      <div className="flex text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    );
  };

  const FourAndHalfStars = () => {
    return (
      <div className="flex text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf />
      </div>
    );
  };

  function renderStars(rating) {
    if (rating >= 4.7) {
      return <FiveStars />;
    } else if (rating >= 4.3) {
      return <FourAndHalfStars />;
    } else if (rating >= 3.7) {
      return <FourStars />;
    } else if (rating >= 3.3) {
      return <ThreeAndHalfStars />;
    } else if (rating >= 2.8) {
      return <ThreeStars />;
    } else if (rating >= 2.2) {
      return <TwoAndHalfStars />;
    } else if (rating >= 1.7) {
      return <TwoStars />;
    } else if (rating >= 1.2) {
      return <OneAndHalfStars />;
    } else {
      return <OneStar />;
    }
  }

  

  export default renderStars