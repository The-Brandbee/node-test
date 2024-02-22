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
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7gu3NFhdkYk?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <button onClick={handleToggleClass}>
        {isClassAdded ? "" : ""}
        <div>
          Watch <span>video intro</span>
        </div>
      </button>
    </>
  );
};

export default YourComponent;
