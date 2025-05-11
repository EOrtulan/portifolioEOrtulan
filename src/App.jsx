import BarraNavega from "./Components/barraNavega"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./Pages/home"
import Sobre from "./Pages/sobre"
import Projetos from "./Pages/projetos"

function App() {
  

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/sobre" element={< Sobre />} />
        <Route path="/projetos" element={< Projetos />} />
      </Routes>
      </BrowserRouter>

  )
}

export default App
