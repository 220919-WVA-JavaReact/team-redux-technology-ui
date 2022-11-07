import React, { useEffect } from 'react'
import { Cart, CartEntry } from '../models/cart'
import { Item } from '../models/item'
import { materialDisplayName } from '../utils/utilityFunctions';

interface ICartItemProps {
    cart: Cart,
    entry: CartEntry,
    setCart: (nextCart: Cart) => void
}

export default function CartItem(props: ICartItemProps) {
    const { cart, entry, setCart } = props;

    useEffect(() => {},[cart]);

    function removeItemFromCart(){
        setCart(cart.removeEntry(entry));
    }

    return (
        <div key={entry.item.item_id} className="flex items-center justify-between">
            <span>{`${materialDisplayName(entry.item.material)} ${entry.item.name}`} </span>
            <div className='flex gap-x-2'>
                <span className="badge badge-sm">{entry.count}</span>
                <span 
                    onClick={removeItemFromCart} 
                    className="badge badge-sm bg-secondary-focus border-secondary-focus text-black hover:bg-secondary">
                    X
                </span>
            </div>
        </div>
    )
}
