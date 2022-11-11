import { useEffect, useState } from 'react'
import { Item } from '../models/item'
import ItemCard from '../components/ItemCard'
import { useAPI } from '../utils/utilityFunctions'
import { Cart } from '../models/cart'

interface IStorePageProps {
    cart: Cart | undefined;
    setCart: (nextCart: Cart) => void
}

export default function StorePage(props: IStorePageProps) {

    const [items, setItems] = useState<Item[]>();
    const {cart, setCart} = props;

    useEffect(() => {
        fetchItems();
    }, [])

    async function fetchItems() {
        const data = await useAPI('/items', 'GET');
        setItems(data);
    }

    return (
        <div className='m-2 grid gap-4 lg:grid-cols-4 sm:grid-cols-2 justify-center'>
            {items?.map(item => <ItemCard key={item.item_id} item={item} cart={cart} setCart={setCart}/>)}
        </div>
    )
}
