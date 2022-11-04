import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StorePage from './pages/StorePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<StorePage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
