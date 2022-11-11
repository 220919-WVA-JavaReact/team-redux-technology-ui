import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleItem from './components/SingleItem/SingleItem';
import LoginModal from './components/LoginModal';
import Navbar from './components/Navbar';
import RegisterModal from './components/RegisterModal';
import Home from './pages/Home';
import StorePage from './pages/StorePage';
import Checkout from './pages/Checkout';
import { Cart } from './models/cart';
import { User } from './models/user';
import Orders from './pages/Orders';

function App() {

    const [cart, setCart] = useState<Cart>(new Cart());
    const [loggedInUser, setLoggedInUser] = useState<User>();

    return (
        <div className="container mx-auto">
            <BrowserRouter>
                <Navbar user={loggedInUser} cart={cart} setCart={setCart} setUser={setLoggedInUser}/>
                <Routes>
                    <Route path="/" element={<Home user={loggedInUser} cart={cart} setCart={setCart}/>} />
                    <Route path="/shop" element={<StorePage cart={cart} setCart={setCart}/>} />
                    <Route path="/items/:name/:material" element={< SingleItem user={loggedInUser} cart={cart} setCart={setCart}/>} />
                    <Route path="/checkout" element={<Checkout user={loggedInUser} cart={cart} setCart={setCart} />} />
                    <Route path="/orders" element={<Orders user={loggedInUser}/>} />
                </Routes>
                <LoginModal currentUser={loggedInUser} setCurrentUser={setLoggedInUser}/>
                <RegisterModal />
            </BrowserRouter>
        </div>
    )
}

export default App
