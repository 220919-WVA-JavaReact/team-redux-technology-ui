import { Link } from "react-router-dom";
import { Cart, CartEntry } from "../models/cart";
import { Item } from "../models/item";
import { getItemImg, materialDisplayName } from "../utils/utilityFunctions";

export interface ICardProps {
    item: Item
    cart: Cart | undefined;
    setCart: (nextCart: Cart) => void;
}

export default function ItemCard(props: ICardProps) {
    
    const { item, cart, setCart } = props;

    function addToCart(){
        if (cart) {
            setCart(cart.addEntry({item: item, count: 1}));
            console.log(cart);
        }
    }

    return (
        <div className='card bg-neutral-focus p-4 justify-between'>
            <h2 className='card-title'>{`${materialDisplayName(item.material)} ${item.name}`}</h2>

            <div className="card-body">
                <figure className='p-2 bg-neutral rounded-lg'>
                    <img src={getItemImg(item)} />
                </figure>
                <p className='text-accent text-lg text-center'>{'$' + item.price}</p>
            </div>
            <div className='flex justify-center'>
                <Link to={`/items/${item.item_id}`}><button className='btn btn-primary mr-1'>item page</button></Link>
                
                <button onClick={addToCart} className='btn btn-primary ml-1'>add to cart</button>
            </div>
        </div>
    )
}
