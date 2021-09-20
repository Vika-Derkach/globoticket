import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Confirmation from "./Confirmation";
import Eventlist from "./Eventlist";
import Header from "./Header";
import Shoppingcart from "./Shoppingcart";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Route exact path="/" component={Eventlist} />
        <Route exact path="/cart" component={Shoppingcart} />
        <Route exact path="/confirm" component={Confirmation} />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
