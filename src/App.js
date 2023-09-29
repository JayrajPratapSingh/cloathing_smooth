
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/Shop/ShopPage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SignUp from './Pages/SignUp/SignUp';
import LogIn from './Pages/LogIn/LogIn';
import ContactUs from './Pages/ContactUs/ContactUs';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element = {<LogIn />}  />
        <Route path="/contactus" element = {<ContactUs />} />
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
