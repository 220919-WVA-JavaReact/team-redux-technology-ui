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
    <div className="flex flex-col">

      {/* hero section */}
      <div className="hero min-h-screen" style={{ backgroundImage: `url("img/site/herobg1.png")` }}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-accent-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* featured items section */}
      <p className='text-center font-bold'>Featured items:</p>
      <div className='flex justify-between align-center'>
        {featuredItems?.map(item => <ItemMiniBlock item={item} />)}
      </div>
    </div>
  )
}
