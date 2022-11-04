import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
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
      </BrowserRouter>
    </div>
  )
}

export default App
