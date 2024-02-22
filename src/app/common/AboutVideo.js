import { useState } from "react";

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
        <div>Watch Our Video</div>
      </button>
    </>
  );
};

export default YourComponent;
