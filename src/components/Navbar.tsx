import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Cart } from '../models/cart'
import { User } from '../models/user'

interface INavbarProps {
    user: User | undefined,
    cart: Cart,
    setCart: (nextCart: Cart) => void
}

export default function Navbar(props: INavbarProps) {
    const {user, cart, setCart} = props;

    useEffect(() => {},[cart]);
    
    return (
        <div className="navbar bg-base-100">
            {/* navbar title */}
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Minecraft Shop</Link>
            </div>

            {/* navbar links */}
            <div className="navbar-center">
                <ul className="menu menu-horizontal p-0 gap-x-2">
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </div>

            <div className="flex-none gap-x-2">

                {/*shopping cart*/}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <div className="w-10">
                                {cart.items.length > 0 ? <img src="/img/site/cart_full.png" /> : <img src="/img/site/cart_empty.png" />}
                            </div>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">{cart.items.length} Items</span>
                            <span className="text-info">Subtotal: ${cart.total}</span>
                            {cart.items.map(entry => (
                                <>
                                    <p>{entry.item.name}</p>
                                </>
                            ))}
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*user tab*/}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/img/site/user_unregistered.webp" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><p className='font-bold'>Welcome, Guest!</p></li>
                        <li><a href="#login-modal">Log In</a></li>
                        <li><a href="#register-modal">Register</a></li>
                    </ul>
                </div>
            </div>
        
        
        
        </div>

        
    )
}
