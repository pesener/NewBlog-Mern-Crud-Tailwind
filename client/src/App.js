import React from "react";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import CreateScreen from "./screens/CreateScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="py-10">
        <div>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/signin" element={<SignIn />} />

            <Route path="/signup" element={<SignUp />} />
            <Route path="/create" element={<CreateScreen />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
