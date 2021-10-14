import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Sreens/Login";
import ResetLink from "./Sreens/ResetLink";

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/reset-link" component={ResetLink} />
        <Route to="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
