import { useEffect, useState } from "react";
import "../styles/Slideshow.css";
import ProfileImages from "../api/ProfileImagesApi";

const images = [
  "https://portfolio-web-backend-cl1f.onrender.com/media/profilepic/Screenshot_2026-10-09_125806.png",
  "https://portfolio-web-backend-cl1f.onrender.com/media/profilepic/WIN_20260523_13_08_02_Pro.jpg",
  "https://portfolio-web-backend-cl1f.onrender.com/media/profilepic/WIN_20260508_11_24_44_Pro_NStZiav.jpg",
];

function Slideshow() {
  const [current, setCurrent] = useState(0);

  /*useEffect(() => {
    fetch("http://localhost:8000/api/profileimages/")
      .then((res) => res.json())
      .then((data) => setImages(data))
  }, []);
*/
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  /* const mages = [
    images.map((image) => {
      <img src={image.first}/>
    })
  ]*/
  return (
    <>
      <div className="profile-images-container">
        <img src={images[current]} alt="profile" />
      </div>
     
    </>
  );
}

export default Slideshow;
