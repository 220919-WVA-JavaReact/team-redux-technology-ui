import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginModal from './components/LoginModal';
import Navbar from './components/Navbar';
import RegisterModal from './components/RegisterModal';
import Home from './pages/Home';
import StorePage from './pages/StorePage';


function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<StorePage />} />
      </Routes>
      <LoginModal />
      <RegisterModal />
      </BrowserRouter>
    </div>
  )
}

export default App
