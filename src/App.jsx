
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./componets bar/navbar"
import Cards from"./cards"
import Head from "./head"
import Footer from "./footer"
import Filtul from "./fittul"
import Cardnetx from "./cardnetx"

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-600">
        {/* Навигация */}
        <Navbar />

        {/* Hero секция (голова) */}
        <Head />

  <Filtul/>
        {/* Карточки */}
        <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/petition/:id" element={<Cardnetx/>} />
      </Routes>

        <Footer/>
      </div>
    </Router>
   
  );
}

export default App;

