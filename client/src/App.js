import React from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="py-3">
        <div>
          <Routes>
            <Route path="/" element={<Cards />} exact />
            <Route path="/signin" element={<SignIn />} />

            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
