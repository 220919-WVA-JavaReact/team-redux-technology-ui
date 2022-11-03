import { Item } from "../models/item";
import { materialDisplayName } from "../utils/utilityFunctions";

interface ICardProps {
    item: Item
}

export default function ItemCard(props: ICardProps) {
    
    const { item } = props;

    return (
        <div className='card bg-neutral p-2 justify-between'>
            <h2 className='card-title'>{`${materialDisplayName(item.material)} ${item.name}`}</h2>

            <div className="card-body">
                <figure className='p-2 border border-accent rounded'>
                    <img src={'img/' + item.material + item.name.toLowerCase() + '.png'} />
                    <p className='text-accent text-center text-lg'>{'$' + item.price}</p>
                </figure>

            </div>
            <div className='flex justify-center'>
                <button className='btn btn-primary mr-1'>item page</button>
                <button className='btn btn-primary ml-1'>buy now</button>
            </div>
        </div>
    )
}
