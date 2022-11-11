import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ItemMiniBlock from '../components/ItemMiniBlock';
import { Cart } from '../models/cart';
import { Item } from '../models/item';
import { Order } from '../models/order';
import { User } from '../models/user';
import { useAPI } from '../utils/utilityFunctions';

interface IHomeProps {
    user: User | undefined;
    cart: Cart | undefined;
    setCart: (nextCart: Cart) => void
}

export default function Home(props: IHomeProps) {
  const [featuredItems, setFeaturedItems] = useState<Item[]>();
  const [buyAgainItems, setBuyAgainItems] = useState<Order[]>();
  const {user, cart, setCart} = props;

  useEffect(() => {
    getRandomItems();
    if (user) getPastOrders();
    
  }, [user]) 

  async function getRandomItems() {
    const data = await useAPI('/items/random/6', 'GET');
    setFeaturedItems(data);
  }

  async function getPastOrders(){
    let data = await useAPI(`/orders/${user?.user_id}`, 'GET');
    console.log(data)
    if (data?.length > 6) data.slice(0,5) 
    setBuyAgainItems(data);
  }

  return (
    <div className="flex flex-col">
      <div>
        {/* buy again */}
        {user?
          <div className="bg-neutral-focus p-2">
            <p className='text-center font-bold'>Buy again:</p>
            <div className='flex flex-wrap justify-between align-center'>
              {buyAgainItems?.map((order,i) => <ItemMiniBlock key={i} cart={cart} setCart={setCart} item={order.item} />)}
            </div>
          </div>
        : ''}
        
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
      </div>

      {/* featured items section */}
      <div className="bg-neutral-focus p-2">
        <p className='text-center font-bold'>Featured products:</p>
        <div className='flex flex-wrap justify-between align-center'>
          {featuredItems?.map((item, i) => <ItemMiniBlock key={i} cart={cart} setCart={setCart} item={item} />)}
        </div>
      </div>
    </div>
  )
}
