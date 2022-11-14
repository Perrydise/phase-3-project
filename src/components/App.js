import Home from './Home';
import ForSale from './ForSale';
import Navbar from './NavBar';
import CarDisplay from './carDisplay';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/forsale" element={<ForSale />} />
        <Route exact path="/showCars" element={<CarDisplay />} />
      </Routes>
      
    </div>
  );
}

export default App;
