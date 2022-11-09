import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Cart } from '../models/cart'
import { User } from '../models/user'
import ShoppingCart from './ShoppingCart';

interface INavbarProps {
    user: User | undefined;
    setUser: (nextUser: User | undefined) => void;
    cart: Cart;
    setCart: (nextCart: Cart) => void;
}

export default function Navbar(props: INavbarProps) {
    const {user, setUser, cart, setCart} = props;

    useEffect(() => {},[cart]);
    
    return (
        <div className="navbar bg-base-100 gap-x-2">
            {/* navbar title */}
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Minecraft Shop</Link>
            </div>

            {/* navbar links */}
            <div className="navbar-center">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </div>

            <div className="flex-none gap-x-2">

                {/*shopping cart*/}
                <ShoppingCart cart={cart} setCart={setCart} />

                {/*user tab*/}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user? <img src="/img/site/loggedbuyer.webp" /> : <img src="/img/site/user_unregistered.webp" />}
                            
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><p className='font-bold'>Welcome, {user? user.username : 'Guest'}!</p></li>
                        {user? 
                        <>
                            <li><a onClick={() => setUser(undefined)}>Log Out</a></li>
                            <li><a>Orders</a></li>
                        </>
                        : <>
                            <li><a href="#login-modal">Log In</a></li>
                            <li><a href="#register-modal">Register</a></li>
                        </>}
                        
                    </ul>
                </div>
            </div>
        
        </div>
        
    )
}
