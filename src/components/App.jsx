import React from "react";
import Slider from "./Slider.jsx";
import Img1 from "../img/fond.jpg";
import Img2 from "../img/fond2.jpg";
import SlideItem from "./SlideItem.jsx";
import {useNavigate} from "react-router-dom";
import BottomInfo from "./BottomInfo.jsx";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <Slider
          onClick={() => {
            navigate("/service");
          }}>
          <SlideItem>
            <img src={Img1} alt='' />
          </SlideItem>
          <SlideItem>
            <img src={Img2} alt='' />
          </SlideItem>
        </Slider>
        <BottomInfo></BottomInfo>
      </main>
    </>
  );
}

export default App;
