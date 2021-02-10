import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Context from "./context";
import "./App.css";
import Heroes from "./components/Heroes";
import AddHero from "./components/AddHero";

function App() {
  const [AllHeroes, setAllHeroes] = React.useState([
    {
      id: 1,
      name: "First",
      level: 25,
      description: "hi i am first hero",
    },
    {
      id: 2,
      name: "Second",
      level: 25,
      description: "hi i am second hero",
    },
    {
      id: 3,
      name: "Third",
      level: 25,
      description: "hi i am third hero",
    },
    {
      id: 4,
      name: "Fourth",
      level: 25,
      description: "hi i am fourth hero",
    },
    {
      id: 5,
      name: "Fifth",
      level: 25,
      description: "hi i am fifth hero",
    },
  ]);
  function addHero(hero) {
    // console.log(name);
    let newHero = {
      id: AllHeroes[AllHeroes.length - 1].id + 1,
      name: hero.name,
      level: hero.level,
      description: hero.description,
    };
    setAllHeroes([...AllHeroes, newHero]);
  }
  function deleteHero(id) {
    setAllHeroes(AllHeroes.filter((hero) => hero.id !== id));
  }
  return (
    <Context.Provider value={{ addHero, deleteHero }}>
      <Router>
        <div>
          <div>
            <Link to='/addHero'>addHero</Link>
            <br />
            <Link to='/home'>allheroes</Link>
          </div>
          <Switch>
            <Route
              path='/addHero'
              render={(props) => (
                <AddHero AllHeroes={AllHeroes} onSubmit={addHero} {...props} />
              )}
            />
            <Route
              path='/home/:id?'
              render={(props) => <Heroes AllHeroes={AllHeroes} {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
