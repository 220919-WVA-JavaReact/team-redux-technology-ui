import  { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Item, Material } from "../../models/item";
import { useAPI } from "../../utils/utilityFunctions";
import { useParams } from 'react-router-dom';
import './SingleItem.css'
import { User } from "../../models/user";
import { Cart } from "../../models/cart";
import PriceModal from '../PriceUpdateModal';
import ItemCard from "../ItemCard";

interface ISingleItemProps {
    user: User | undefined,
    cart: Cart,
    setCart: (nextCart: Cart) => void
}

function SingleItem(props: ISingleItemProps){

    const {user, cart, setCart} = props;

    const [singleItems, setSingleItems] = useState<Item>()
    const [localMaterial, setLocalMaterial] = useState<Material>()
    let [count, setCount] = useState(0);

    useEffect(() => {
        FetchItems();
    }, [localMaterial])

    let { name, material } = useParams();

    {/*item promise*/}
    async function FetchItems(){
        const data = await useAPI(`/items/single/${name}?material=${material?.toUpperCase()}`, 'GET');
        setSingleItems(data);
        console.log(data);

        window.location.href = '#' + data?.material.toLowerCase();
    }

    {/*button qty functionalities*/}
    function incrementCount() {
      count = count + 1;
      setCount(count);
    }
    function decrementCount() {
      count = count - 1;
      setCount(count);
    }

    function addToCart(){
        if (singleItems && count > 0) {
            setCart(cart?.addEntry({item: singleItems, count: count}));
        }
    }
    

    return( 
        singleItems?
        <main className="bg-neutral-focus">
            
            <div className="main-con grid lg:grid-cols-3 sm:grid-cols-1 gap-4 max-w-5xl m-auto" >

                {/*left side- image carousel*/}
                <div className="img-con lg:col-span-2 box">

                    <div className="lg:col-span-1">
                        <ul className="line">
                            <li className="block"><Link 
                            to={`/items/${singleItems?.name.toLowerCase()}/gold`} 
                            onClick={() => setLocalMaterial(Material.GOLD)} className="object-none object-left-bottom thumbimg " >
                            <img src={'/img/' + "GOLD" + singleItems?.name.toLowerCase() + '.png'}
                            style={{width: 200, height: 100}}
                            className="pb " />
                            </Link></li>

                            <li><Link 
                            to={`/items/${singleItems?.name.toLowerCase()}/diamond`} 
                            onClick={() => setLocalMaterial(Material.DIAMOND)} className="object-none object-left-bottom thumbimg" >
                            <img src={'/img/' + "Diamond" + singleItems?.name.toLowerCase() + '.png'}
                            style={{width: 200, height: 100}}
                            className="pb" />
                            </Link></li>
                            <li>

                            <Link 
                            to={`/items/${singleItems?.name.toLowerCase()}/iron`} 
                            onClick={() => setLocalMaterial(Material.IRON)} className="object-none object-left-bottom thumbimg" >
                            <img src={'/img/' + "IRON" + singleItems?.name.toLowerCase() + '.png'}
                            style={{width: 200, height: 100}}
                            className="pb" />
                            </Link></li>

                            <li><Link 
                            to={`/items/${singleItems?.name.toLowerCase()}/netherite`} 
                            onClick={() => setLocalMaterial(Material.NETHERITE)} className="object-none object-left-bottom thumbimg" >
                            <img src={'/img/' + "NETHERITE" + singleItems?.name.toLowerCase() + '.png'}
                            style={{width: 200, height: 100}}
                            className="pb " />
                            </Link></li>

                        </ul>
                    </div>

                    <div className="lg:col-span-1 carousel rounded-box ml-20">
                        <div id="gold" className="carousel-item w-full">
                            <img src={'/img/' + "GOLD" + singleItems?.name.toLowerCase() + '.png'}
                            style={{width: 300, height: 300}}
                            className="" />
                        </div> 

                        <div id="diamond" className="carousel-item w-full">
                            <img src={'/img/' + "DIAMOND" + singleItems?.name.toLowerCase() + '.png'}
                            style={{width: 300, height: 300}}
                            className="" />
                        </div> 

                        <div id="iron" className="carousel-item w-full">
                            <img src={'/img/' + "IRON" + singleItems?.name.toLowerCase() + '.png'}
                            style={{width: 300, height: 300}}
                            className="" />
                        </div> 

                        <div id="netherite" className="carousel-item w-full">
                            <img src={'/img/' + "NETHERITE" + singleItems?.name.toLowerCase() + '.png'}
                            style={{width: 300, height: 300}}
                            className="" />
                        </div>

                    </div> 
                </div>


                        {/*right side- item info*/}
                <div className="info">
                    <h1 className="text-5xl" style={{ color: '#4dffc3' }}>{"Minecraft: " + " " + singleItems?.name}</h1>
                    <h3 className="my-2 text-2xl">{"Price: " + "$" + singleItems?.price}</h3>
                    <label className="text-2xl">Material: </label>
                    
                    <div className="flex-row-reverse space-x-4 space-x-reverse ">
                        <span className="selection"></span>
                        <Link 
                        to={`/items/${singleItems?.name.toLowerCase()}/gold`} 
                        onClick={() => setLocalMaterial(Material.GOLD)}
                        className="btn btn-primary m-5 pr-4 pl-4" 
                        style={{ fontWeight: 'bold' }}>Gold</Link>
                        <Link 
                        to={`/items/${singleItems?.name.toLowerCase()}/diamond`} 
                        onClick={() => setLocalMaterial(Material.DIAMOND)}
                        className="btn btn-primary m-5 pr-4 pl-4" 
                        style={{ fontWeight: 'bold' }}>Diamond</Link>
                        <Link 
                        to={`/items/${singleItems?.name.toLowerCase()}/iron`} 
                        onClick={() => setLocalMaterial(Material.IRON)}
                        className="btn btn-primary m-5 " 
                        style={{ fontWeight: 'bold' }}>Iron</Link>
                        <Link 
                        to={`/items/${singleItems?.name.toLowerCase()}/netherite`} 
                        onClick={() => setLocalMaterial(Material.NETHERITE)}
                        className="btn btn-primary m-1" 
                        style={{ fontWeight: 'bold' }}>Netherite</Link>
                    </div> 

                    <div className="btn-group m-1 mx-8 my-6">
                        <input type="radio" name="options" data-title="-" onClick={decrementCount}  disabled={count <= 0 ? true : false} className="btn" />
                        <input type="radio" name="options" data-title={count} style={{color: 'white' }} className="btn btn-disabled" />
                        <input type="radio" name="options" data-title="+" onClick={incrementCount} className="btn" />
                    </div>
                    <br/>
                    <button 
                        onClick={addToCart}
                        className="btn btn-primary my-4 btn-wide" 
                        style={{ fontWeight: 'bold' }}>Add to Cart
                    </button>
                    <br/>
                    {
                        props.user?.role == "ADMIN" ?

                        <>
                            <a href="#price-modal" className="btn btn-primary my-4 btn-wide" >Update Price</a>
                        </>
                        : ""
                    }
                </div>
            </div>
            <PriceModal setMaterial={setLocalMaterial} item ={singleItems} />
        </main>
        :""
)}

export default SingleItem;