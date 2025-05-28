import { Route, Routes, BrowserRouter } from "react-router-dom";
import BarraNavega from "./Components/barraNavega";
import Rain from "./Components/Rain";
import Home from "./Pages/home";
import Sobre from "./Pages/sobre";
import Projetos from "./Pages/projetos";

function App() {
  return (
    <BrowserRouter>
      <Rain />
      <BarraNavega />
      <div className="relative z-10 text-white min-h-screen px-4 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
