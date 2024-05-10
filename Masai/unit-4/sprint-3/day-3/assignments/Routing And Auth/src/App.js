// import "./App.css";

// export default function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }


// App.js
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import { AuthContextProvider } from "./AuthContext";
import { AllRoutes, PrivateRoute } from "./Routes";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <AllRoutes path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/contact" component={Contact} />
          <PrivateRoute path="/products" component={Products} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
