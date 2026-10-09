import { useState, useEffect } from "react";

function ProfileImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/profileimages/")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <>
      {images.map((image) => (
        <li key={image.id}>
          <img src={image.first} />
          <img src={image.second} />
          <img src={image.third} />
        </li>
      ))}
    </>
  );
}

export default ProfileImages;
