import React from "react";
import "./RandomColor.css";

const toRGB = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};

const RandomColor = () => {
  const [color, setColor] = React.useState("#000000");
  return (
    <div
      className="random-color-container"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
      }}
    >
      <button
        className="random-color-button"
        style={{ color: color }}
        onClick={() => {
          const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
          setColor(randomColor);
        }}
      >
        Random Color
      </button>
      <div className="random-color">{color.toUpperCase()}</div>
      <div className="random-color">{toRGB(color)}</div>
    </div>
  );
};

export default RandomColor;
