import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem";
import { Cart } from "../models/cart";
import { Order } from "../models/order";
import { User } from "../models/user";
import { priceFormatter, useAPI } from "../utils/utilityFunctions";

interface ICheckoutProps {
    user: User | undefined;
    cart: Cart;
    setCart: (nextCart: Cart) => void;
}

export default function Checkout(props: ICheckoutProps) {

    const { user, cart, setCart } = props;
    const [completed, setCompleted] = useState(false);

    async function postOrders() {

        const orders: Order[] = cart.items.map(entry => {
            return {
                item: entry.item,
                user: user,
                quantity: entry.count,
                purchase_date: undefined,
            }
        });

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orders)
            });

            if (res.status === 201) {
                console.log('successfully posted orders')
                setCart(new Cart());
                setCompleted(true);
            }
        } catch (err) {
            console.log('There was an error communicating with the API.');
        }

    }

    return (
        completed ?
            <>
                <div className="alert alert-success shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Your purchase has been confirmed!</span>
                    </div>
                </div>
                <Link to="/shop"><button className="btn btn-primary btn-center">Back to Store</button></Link>
            </>
            :
            <div className="overflow-x-auto w-full">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart?.items.map((entry, i) =>
                            <CheckoutItem key={i} entry={entry} cart={cart} setCart={setCart} />
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>
                                <button className="btn btn-primary btn-block" onClick={postOrders}>
                                    Place Order
                                </button>
                            </th>
                            <th></th>
                            <th className="">
                                <p>Subtotal:</p>
                                <p className="text-accent text-2xl">
                                    {priceFormatter.format(cart.total)}
                                </p>
                            </th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
    )
}
