import React, { useState } from "react";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import PrivateRoutes from "./utils/PrivateRoutes";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import HomeScreen from "./screens/HomeScreen";
import CreateScreen from "./screens/CreateScreen";
import UpdateScreen from "./screens/UpdateScreen";
import ReadMoreScreen from "./screens/ReadMoreScreen";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <main className="py-10">
        <div>
          <Routes>
            <Route path="/" element={<HomeScreen user={user} />} exact />
            <Route path="/admin" element={<SignIn />} />
            <Route path="/newNote/:id" element={<ReadMoreScreen />} />

            <Route element={<PrivateRoutes user={user} />}>
              <Route path="/create" element={<CreateScreen />} />
              <Route path="/update/:id" element={<UpdateScreen />} />
            </Route>
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
