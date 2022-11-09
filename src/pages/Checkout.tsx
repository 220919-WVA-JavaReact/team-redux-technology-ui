import { Cart } from "../models/cart";
import { User } from "../models/user";
import { getItemImg } from "../utils/utilityFunctions"; 

interface ICheckoutProps {
    user: User | undefined;
    cart: Cart | undefined;
    setCart: (nextCart: Cart) => void;
}

export default function Checkout(props: ICheckoutProps) {

    const { user, cart, setCart } = props;

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.items.map(entry => (
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
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
                                    <span>{entry.count}</span>
                                </td>
                                <td>
                                    <span className="text-accent">${entry.item.price * entry.count}</span>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}
