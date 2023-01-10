import React from "react";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import HomeScreen from "./screens/HomeScreen";
import CreateScreen from "./screens/CreateScreen";
import UpdateScreen from "./screens/UpdateScreen";

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
            <Route path="/update/:id" element={<UpdateScreen />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2500,
        }}
      />
    </Router>
  );
}

export default App;
