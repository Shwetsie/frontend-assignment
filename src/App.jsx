import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Problems from "./components/Problems";
import Home from "./components/Home";
import ResponsiveAppBar from "./components/AppBar";


function App() {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

  return (
    <Router>
      <div>
        <ResponsiveAppBar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/problems" Component={Problems} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
