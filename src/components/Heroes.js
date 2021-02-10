import React from "react";
import Hero from "./Hero";

import HeroInformation from "./HeroInformation";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Heroes(props) {
  // console.log(props.AllHeroes);

  return (
    <Router>
      <div>
        {props.AllHeroes.map((hero, index) => {
          return <Hero hero={hero} key={hero.id} index={index} />;
        })}
        {/* {Context.AllHeroes[1] } */}

        <Route path='/home/:id'>
          <HeroInformation AllHeroes={props.AllHeroes} />
        </Route>
      </div>
    </Router>
  );
}
Heroes.propTypes = {
  // AllHeroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  // onToggle: PropTypes.func.isRequired,
};
export default Heroes;
