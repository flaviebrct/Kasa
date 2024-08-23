import Homepage from "./pages/Homepage";
import Logement from "./pages/Logement";
import Error from "./pages/404";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="/APropos" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
