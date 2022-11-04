import { useEffect, useState } from 'react'
import ItemMiniBlock from '../components/ItemMiniBlock';
import { Item } from '../models/item';
import { useAPI } from '../utils/utilityFunctions';

export default function Home() {
    const [featuredItems, setFeaturedItems] = useState<Item[]>()

    useEffect(() => {
        getRandomItems();
    }, [])

    async function getRandomItems() {
        const data = await useAPI('/items/random/5', 'GET');
        setFeaturedItems(data);
    }

    return (
        <div>
            {featuredItems?.map( item => <ItemMiniBlock item={item} /> )}
        </div>
    )
}
