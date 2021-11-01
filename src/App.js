import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Components/Main";
import { CoffeeContextProvider } from "./Hooks/CoffeeContext";

const App = () => {
  return (
    <CoffeeContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </CoffeeContextProvider>
  );
};

export default App;
