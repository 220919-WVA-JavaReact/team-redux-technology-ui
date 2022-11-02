import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StorePage from './pages/StorePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shop" element={<StorePage />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
