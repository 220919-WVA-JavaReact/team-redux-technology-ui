import { castArray } from "lodash";
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

    async function postOrders() {
        
        const orders: Order[] = cart.items.map(entry => {
            return {
                item: entry.item,
                user: user,
                quantity: cart.count,
                purchase_date: null,
            }
        });

        const sucessfulOrders = await useAPI('/orders', 'POST', undefined, orders);
        console.log(sucessfulOrders);
    }

    return (
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
                    {cart?.items.map(entry =>
                        <CheckoutItem entry={entry} cart={cart} setCart={setCart} />
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
