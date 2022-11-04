import { useEffect, useState } from 'react'
import { Item } from '../models/item'
import ItemCard from '../components/ItemCard'

export default function StorePage() {

    const [items, setItems] = useState<Item[]>()

    useEffect(() => {
        fetchItems();
    }, [])

    async function fetchItems() {
        try {
            let res = await fetch('http://localhost:8080/items', {
                method: 'GET',
                // credentials: 'include'
            }); // returns a promise of the response, await lets the promise resolve before we try to use it

            if (res.status != 200) {
                console.log('could not connect')
            } else {
                setItems(await res.json());
            }
        } catch (err) {
            console.log('There was an error communicating with the API.');
        }

    }

    return (
        <div className='m-2 grid gap-4 lg:grid-cols-4 sm:grid-cols-2 justify-center'>
            {items?.map(item => <ItemCard item={item} />)}
        </div>
    )
}
