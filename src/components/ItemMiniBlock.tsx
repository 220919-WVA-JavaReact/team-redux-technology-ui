import React from 'react'
import { Link } from 'react-router-dom';
import { getItemImg } from '../utils/utilityFunctions';
import { ICardProps } from './ItemCard'

export default function ItemMiniBlock(props: ICardProps) {
    
    const {item} = props;

    return (
        <Link to={`/items/${item.name.toLowerCase()}/${item.material.toLowerCase()}`}>
            <div className="avatar flex-col items-center">
                <div className="w-24 rounded bg-neutral m-2 p-2">
                    <img src={getItemImg(item)} />
                </div>
                <p className='text-center text-accent'>{'$'+item.price}</p>
            </div>
        </Link>
    )
}
