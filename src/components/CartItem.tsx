import React, { useEffect } from 'react'
import { Cart } from '../models/cart'
import { Item } from '../models/item'
import { materialDisplayName } from '../utils/utilityFunctions';

interface ICartItemProps {
    item: Item,
    cart: Cart,
    count: number
    setCart: (nextCart: Cart) => void
}

export default function CartItem(props: ICartItemProps) {
    const { item, cart, count, setCart } = props;

    useEffect(() => {},[cart]);

    function removeItemFromCart(){
        setCart(cart.removeEntry({item: item, count: count}));
        //console.log(cart);
    }

    return (
        <div key={item.item_id} className="flex items-center justify-between">
            <span>{`${materialDisplayName(item.material)} ${item.name}`} </span>
            <div className='flex gap-x-2'>
                <span className="badge badge-sm">{count}</span>
                <span onClick={removeItemFromCart} className="badge badge-sm bg-secondary-focus">x</span>
            </div>
        </div>
    )
}
