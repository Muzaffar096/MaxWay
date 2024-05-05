import React from "react";
import "./maps.css"

const MapsCard = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "maps active" : "maps"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "maps__content active" : "maps__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MapsCard;
