import React from 'react'
import { Link } from 'react-router-dom';
import { ICardProps } from './ItemCard'

export default function ItemMiniBlock(props: ICardProps) {
    
    const {item} = props;

    return (
        <Link to={`/items/${item.item_id}`}>
            <div className="avatar flex-col items-center">
                <div className="w-24 rounded bg-neutral m-2 p-2">
                    <img src={'img/' + item.material + item.name.toLowerCase() + '.png'} />
                </div>
                <p className='text-center text-accent'>{'$'+item.price}</p>
            </div>
        </Link>
    )
}
