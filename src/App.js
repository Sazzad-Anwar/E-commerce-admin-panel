import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Loader from "./Components/Loader";
const Test = lazy(() => import("./Components/Test"));
const Login = lazy(() => import("./Screens/Login"));
const ResetLink = lazy(() => import("./Screens/ResetLink"));
const Dashboard = lazy(() => import('./Screens/Dashboard'));
const ProtectedRoute = lazy(() => import("./Components/ProtectedRoute"));
const ErrorPage = lazy(() => import("./Components/ErrorPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
          <Route path="/reset-link" component={ResetLink} />
          <Route path="/test" component={Test} />
          <Route path="/404">
            <ErrorPage status="404" title="404" subTitle="Page is not found" />
          </Route>
          <Route path="/" exact component={Login} />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </Router >
  );
}

export default App;
