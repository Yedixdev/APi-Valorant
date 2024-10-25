import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPages from "./pages/ErrorPages";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Agents from "./pages/Agents";
import Maps from "./pages/Maps";
import Arms from "./pages/Arms"
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/Arms" element={<Arms />} />
        <Route path="*" element={<ErrorPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
