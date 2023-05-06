import React from "react";

const Favorites = ({ fav }) => {
  return (
    <div>
      {fav.map((f) => {
        return <img src={f.img} alt="" />;
      })}
    </div>
  );
};

export default Favorites;
