import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Confirmation from "./Confirmation";
import ErrorBoundary from "./ErrorBoundary";
import Eventlist from "./Eventlist";
import Header from "./Header";
import Shoppingcart from "./Shoppingcart";

function App() {
  return (
    <Router>
      <Header />
      <ErrorBoundary fallback={<div className="mt-5 ms-5">Error!</div>}>
        <Suspense fallback={<div className="mt-5 ms-5">Loading!</div>}>
          <Route exact path="/" component={Eventlist} />
        </Suspense>
        <Route exact path="/cart" component={Shoppingcart} />
        <Route exact path="/confirm" component={Confirmation} />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
