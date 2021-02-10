import React, { useContext } from "react";
import Context from "../context";
import { Link } from "react-router-dom";
import "../App.css";
function Hero({ hero, index, onToggle }) {
  const { deleteHero } = useContext(Context);

  function deleteHandler(id) {
    deleteHero.bind(null, id)();
  }
  return (
    <div className='heross'>
      <Link to={`/home/${hero.id}`}>
        Name: {hero.name}, Level: {hero.level}
      </Link>
      <button
        onClick={() => {
          deleteHandler(hero.id);
        }}
      >
        &#10006;
      </button>
    </div>
  );
}

export default Hero;
//{`/home/${hero.level}`}
