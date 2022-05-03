import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home> </Home>
          </Route>

          <Route path="/users">
            <Home> </Home>
          </Route>

          <Route path="/">
            <Home> </Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
