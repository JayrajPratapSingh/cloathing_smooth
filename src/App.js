
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/Shop/ShopPage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
