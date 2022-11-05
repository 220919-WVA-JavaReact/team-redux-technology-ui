import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ItemMiniBlock from '../components/ItemMiniBlock';
import { Cart } from '../models/cart';
import { Item } from '../models/item';
import { useAPI } from '../utils/utilityFunctions';

interface IHomeProps {
    cart: Cart | undefined;
    setCart: (nextCart: Cart) => void
}

export default function Home(props: IHomeProps) {
  const [featuredItems, setFeaturedItems] = useState<Item[]>()
  const {cart, setCart} = props;

  useEffect(() => {
    getRandomItems();
  }, []) 

  async function getRandomItems() {
    const data = await useAPI('/items/random/6', 'GET');
    setFeaturedItems(data);
  }

  return (
    <div className="flex flex-col">

      {/* hero section */}
      <div className="hero min-h-screen" style={{ backgroundImage: `url("img/site/herobg1.png")` }}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-accent-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Your one stop shop.</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to="/shop">
              <button className="btn btn-primary">browse items</button>
            </Link>
          </div>
        </div>
      </div>

      {/* featured items section */}
      <div className="bg-neutral-focus p-2">
        <p className='text-center font-bold'>Featured products:</p>
        <div className='flex flex-wrap justify-between align-center'>
          {featuredItems?.map(item => <ItemMiniBlock cart={cart} setCart={setCart} item={item} />)}
        </div>
      </div>
    </div>
  )
}
