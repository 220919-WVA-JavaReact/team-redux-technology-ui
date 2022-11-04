import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleItem from './components/SingleItem';
import Home from './pages/Home';
import StorePage from './pages/StorePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<StorePage />}/>
        <Route path="/items/:id" element={< SingleItem />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
