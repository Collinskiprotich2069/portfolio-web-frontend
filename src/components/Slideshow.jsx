import { useEffect, useState } from "react";
import '../styles/Slideshow.css';

const images = [
   "src/assets/profilepic/prof1.jpg",
   "src/assets/profilepic/prof2.jpg",
   "src/assets/profilepic/prof3.jpg",
];
 
function Slideshow() {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="profile-images-container">
        <img src={images[current]} alt="profile" />
      </div>
    </>
  );
}


export default Slideshow;