import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Loader from "./Components/Loader";
const Test = lazy(() => import("./Components/Test"));
const Login = lazy(() => import("./Screens/Login"));
const ResetLink = lazy(() => import("./Screens/ResetLink"));
const Dashboard = lazy(() => import('./Screens/Dashboard'));
const ProtectedRoute = lazy(() => import("./Components/ProtectedRoute"));
const ErrorPage = lazy(() => import("./Components/ErrorPage"));
const Category = lazy(() => import('./Screens/Category'));
const Products = lazy(() => import('./Screens/Products'));
const Product = lazy(() => import('./Screens/Product'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/404">
            <ErrorPage status="404" title="404" subTitle="Page is not found" />
          </Route>
          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
          <ProtectedRoute path="/category">
            <Category />
          </ProtectedRoute>
          <ProtectedRoute path="/products/:id">
            <Product />
          </ProtectedRoute>
          <ProtectedRoute path="/products">
            <Products />
          </ProtectedRoute>
          <Route path="/reset-link" component={ResetLink} />
          <Route path="/test" component={Test} />
          <Route path="/" exact component={Login} />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </Router >
  );
}

export default App;
