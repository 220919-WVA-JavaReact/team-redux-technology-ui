import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleItem from './components/SingleItem/SingleItem';
import LoginModal from './components/LoginModal';
import Navbar from './components/Navbar';
import RegisterModal from './components/RegisterModal';
import Home from './pages/Home';
import StorePage from './pages/StorePage';
import { Cart } from './models/cart';
import { useState } from 'react';
import { User } from './models/user';

function App() {

    const [cart, setCart] = useState<Cart>(new Cart());
    const [loggedInUser, setLoggedInUser] = useState<User>();

    return (
        <div className="container mx-auto">
            <BrowserRouter>
                <Navbar user={loggedInUser} cart={cart} setCart={setCart}/>
                <Routes>
                    <Route path="/" element={<Home cart={cart} setCart={setCart}/>} />
                    <Route path="/shop" element={<StorePage cart={cart} setCart={setCart}/>} />
                    <Route path="/items/:id" element={< SingleItem />} />
                </Routes>
                <LoginModal />
                <RegisterModal />
            </BrowserRouter>
        </div>
    )
}

export default App
