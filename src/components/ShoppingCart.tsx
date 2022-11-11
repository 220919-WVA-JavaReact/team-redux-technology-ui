import React from 'react'
import { Link } from 'react-router-dom';
import { Cart } from '../models/cart'
import { priceFormatter } from '../utils/utilityFunctions'
import CartItem from './CartItem';

interface ICartProps {
    cart: Cart,
    setCart: (nextCart: Cart) => void
}

export default function ShoppingCart(props: ICartProps) {

    const { cart, setCart } = props;

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <div className="w-10">
                        {cart.count > 0 ? <img src="/img/site/cart_full.png" /> : <img src="/img/site/cart_empty.png" />}
                        {cart.count > 1 ? <span className="badge badge-sm indicator-item">{cart.count}</span> : ''}

                    </div>
                </div>
            </label>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    <span className="font-bold text-lg">{cart.count} Items</span>
                    
                    <div>
                        {cart.items.map(entry => (
                            <CartItem 
                                key={entry.item.item_id}
                                entry={entry}
                                cart={cart} 
                                setCart={setCart} 
                            />
                        ))}
                    </div>

                    <hr/>
                    <span className="text-info">Subtotal: {priceFormatter.format(cart.total)}</span>
                    <div className="card-actions">
                        <Link to="/checkout" className='w-full'>
                            <button className="btn btn-primary btn-block">Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
