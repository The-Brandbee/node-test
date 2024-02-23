import { useState } from "react";
import Play from "../img/play-icon.png";
import Image from "next/image";

const YourComponent = () => {
  const [isClassAdded, setClassAdded] = useState(false);

  const handleToggleClass = () => {
    setClassAdded(!isClassAdded);
  };

  return (
    <>
      <button onClick={handleToggleClass}>{isClassAdded ? "" : ""}</button>

      <div
        id="about-video-frame"
        className={isClassAdded ? "your-added-class" : ""}
      >
        <iframe
          src="https://www.youtube.com/embed/7gu3NFhdkYk?autoplay=1&mute=1"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <button onClick={handleToggleClass}>
        {isClassAdded ? "" : ""}
        <div className="Watch-Our-Video">
          <div className="Watch-Our-Video-left">
            <Image src={Play} alt="" />
          </div>
          <div>Watch Our Video</div>
        </div>
      </button>
    </>
  );
};

export default YourComponent;
