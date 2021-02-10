import React from "react";
import { useParams } from "react-router-dom";
const HeroInformation = (props) => {
  let { id } = useParams();
  let heroes = props.AllHeroes;
  //   console.log(props.AllHeroes);
  console.log(id);

  //   const id = props.match.params;
  //   console.log(props.match.id);
  return (
    <div>
      {heroes
        .filter((hero) => +hero.id === +id)
        .map((hero, id) => (
          <div key={id}>
            Name: {hero.name} <br /> Level:{hero.level}
            <br /> Description:{hero.description}
          </div>
        ))}
    </div>
  );
};

export default HeroInformation;
