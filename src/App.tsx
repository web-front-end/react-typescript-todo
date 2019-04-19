import React, { Component, Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const FormPage = React.lazy(() => import("./pages/FormPage"));
const TodoPage = React.lazy(() => import("./pages/TodoPage"));


class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/"
              component={TodoPage}
            />
            <Route path="/form" component={FormPage} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
