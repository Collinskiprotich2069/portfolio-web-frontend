import { useEffect, useState } from "react";
import '../styles/Slideshow.css';
/*
const images = [
   "src/assets/profilepic/prof1.jpg",
   "src/assets/profilepic/prof2.jpg",
   "src/assets/profilepic/prof3.jpg",
];
 */
function Slideshow() {
  const [images, setImages] = useState([]);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/api/profileimages/")
      .then((res) => res.json())
      .then((data) => setImages(data))
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const mages = [
    images.map((image) => {
      <img src={image.first}/>
    })
  ]
  return (
    <>
      <div className="profile-images-container">
        {images.map((image) => (
          <img  src={image.first} alt="profile" />
        ))}
      </div>
    </>
  );
}


export default Slideshow;