import { Cart, CartEntry } from "../models/cart"
import { getItemImg, priceFormatter } from "../utils/utilityFunctions";


interface ICheckoutItemProps {
    entry: CartEntry;
    cart: Cart;
    setCart: (nextCart: Cart) => void;
}

export default function CheckoutItem(props: ICheckoutItemProps) {

    const { entry, cart, setCart } = props;

    function incrementCount() {
        setCart(cart.adjustItemCount({ item: entry.item, count: 1 }));
    }

    function decrementCount() {
        if (entry.count > 1) {
            setCart(cart.adjustItemCount({ item: entry.item, count: -1 }));
        }
    }

    function removeItem() {
        setCart(cart.adjustItemCount({ item: entry.item, count: -entry.count }));
    }

    return (
        <tr>
            <td>
                <div className="md:flex md:items-center md:space-x-3">
                    <div className="avatar">
                        <div className="mask w-12 h-12 ">
                            <img src={getItemImg(entry.item)} alt={entry.item.name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{entry.item.name}</div>
                        <div className="text-sm opacity-50">{entry.item.material}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="text-xl md:flex md:space-x-3 md:items-center text-center">
                    <kbd className="kbd hover:bg-base-100 transition" onClick={decrementCount}>-</kbd>
                    <div className="">{entry.count}</div>
                    <kbd className="kbd hover:bg-base-100 transition" onClick={incrementCount}>+</kbd>
                </div>
            </td>
            <td>
                <span className="text-accent">
                    {priceFormatter.format(entry.item.price * entry.count)}
                </span>
            </td>
            <td>
                <div className="badge badge-error gap-2 hover:badge-secondary" onClick={removeItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </td>
        </tr>
    )
}
