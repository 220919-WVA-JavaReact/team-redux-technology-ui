import { Link } from "react-router-dom";
import { Item } from "../models/item";
import { materialDisplayName } from "../utils/utilityFunctions";

export interface ICardProps {
    item: Item
}

export default function ItemCard(props: ICardProps) {
    
    const { item } = props;

    return (
        <div className='card bg-neutral-focus p-4 justify-between max-w-sm'>
            <h2 className='card-title'>{`${materialDisplayName(item.material)} ${item.name}`}</h2>

            <div className="card-body">
                <figure className='p-2 bg-neutral rounded-lg'>
                    <img src={'img/' + item.material + item.name.toLowerCase() + '.png'} />
                </figure>
                <p className='text-accent text-lg text-center'>{'$' + item.price}</p>
            </div>
            <div className='flex justify-center'>
                <Link to={`/items/${item.item_id}`}><button className='btn btn-primary mr-1'>item page</button></Link>
                
                <button className='btn btn-primary ml-1'>add to cart</button>
            </div>
        </div>
    )
}
