import { useEffect, useState } from 'react'
import ItemCard from '../components/ItemCard';
import { Item } from '../models/item'
import { useAPI } from '../utils/utilityFunctions';

export default function StorePage() {

    const [items, setItems] = useState<Item[]>()

    useEffect(() => {
        getItems();
    }, [])

    async function getItems(){
        const data = await useAPI('/items', 'GET');
        setItems(data);
    }

    return (
        <div className='m-2 grid gap-4 lg:grid-cols-4 sm:grid-cols-2 justify-center'>
            {items?.map(item => <ItemCard item={item} />)}
        </div>
    )
}