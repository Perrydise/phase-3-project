import Home from './Home';
import ForSale from './ForSale';
import Navbar from './NavBar';
import CarDisplay from './CarDisplay';
import { Routes, Route } from "react-router-dom"
import "../App.css"


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
