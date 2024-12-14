import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Notfound from "./components/pages/Notfound";
import Addusers from "./components/users/Addusers";
import Edituser from "./components/users/Edituser";
import View from "./components/users/View";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/add" element={<Addusers />} />
        <Route path="/user/edit/:id" element={<Edituser />} />
        <Route path="/user/:id" element={<View />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
