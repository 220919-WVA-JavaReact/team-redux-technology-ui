import CheckoutItem from "../components/CheckoutItem";
import { Cart } from "../models/cart";
import { User } from "../models/user";
import { priceFormatter } from "../utils/utilityFunctions";

interface ICheckoutProps {
    user: User | undefined;
    cart: Cart;
    setCart: (nextCart: Cart) => void;
}

export default function Checkout(props: ICheckoutProps) {

    const { user, cart, setCart } = props;

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
                        <th><button className="btn btn-primary btn-block">Place Order</button></th>
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
