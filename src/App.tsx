import React, { Component, Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import TodoPage from './pages/TodoPage';
// import { TodoPage } from "./pages";

const FormPage = React.lazy(() => import("./pages/FormPage"));

const LazyLoadingComponent = (Component: any) => {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={TodoPage} />
          <Route path="/form" component={LazyLoadingComponent(FormPage)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
