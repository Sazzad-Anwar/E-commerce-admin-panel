import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Sreens/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
