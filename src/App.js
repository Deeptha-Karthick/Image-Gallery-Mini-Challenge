import "./styles.css";
import Unsplash1 from "../src/images/unsplash1.png";
import Unsplash2 from "../src/images/unsplash2.png";
import Unsplash3 from "../src/images/unsplash3.png";
import Unsplash4 from "../src/images/unsplash4.png";
import { useState } from "react";

export default function App() {
  const [chosenImage, setChosenImage] = useState(null);

  const imagesArr = [Unsplash1, Unsplash2, Unsplash3, Unsplash4];
  return (
    <div className="App">
      <h1>Gallery Mini Project</h1>
      <a href="">Click on any image!</a>
      <div className="imagesList">
        {imagesArr.map((el) => {
          return (
            <img
              src={el}
              key={el}
              className="imageProp"
              onClick={() => setChosenImage(el)}
            />
          );
        })}
      </div>
      {chosenImage && (
        <div>
          <img src={chosenImage} className="chosenImage" />
        </div>
      )}
    </div>
  );
}
