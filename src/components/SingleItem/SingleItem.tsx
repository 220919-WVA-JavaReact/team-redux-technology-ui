import  { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Item, Material } from "../../models/item";
import { useAPI } from "../../utils/utilityFunctions";
import { useParams } from 'react-router-dom';
import './SingleItem.css'


function SingleItem(){

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
    

    return(
<main>
    
    <div className="bg-neutral-focus grid grid-cols-3 gap-4" style={{padding: '150px'}}>

        {/*left side- image carousel*/}
        <div className="col-span-2 box">

            <div className="col-span-1">
                <ul>
                    <li><Link 
                    to={`/items/${singleItems?.name.toLowerCase()}/gold`} 
                    onClick={() => setLocalMaterial(Material.GOLD)} className="object-none object-left-bottom thumbimg" >
                    <img src={'/public/img/' + "GOLD" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 200, height: 100}}
                    className="w-full" />
                    </Link></li>

                    <li><Link 
                    to={`/items/${singleItems?.name.toLowerCase()}/diamond`} 
                    onClick={() => setLocalMaterial(Material.DIAMOND)} className="object-none object-left-bottom thumbimg" >
                    <img src={'/public/img/' + "Diamond" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 200, height: 100}}
                    className="w-full" />
                    </Link></li>
                    <li>

                    <Link 
                    to={`/items/${singleItems?.name.toLowerCase()}/iron`} 
                    onClick={() => setLocalMaterial(Material.IRON)} className="object-none object-left-bottom thumbimg" >
                    <img src={'/public/img/' + "IRON" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 200, height: 100}}
                    className="w-full" />
                    </Link></li>

                    <li><Link 
                    to={`/items/${singleItems?.name.toLowerCase()}/netherite`} 
                    onClick={() => setLocalMaterial(Material.NETHERITE)} className="object-none object-left-bottom thumbimg" >
                    <img src={'/public/img/' + "NETHERITE" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 200, height: 100}}
                    className="w-full" />
                    </Link></li>

                </ul>
            </div>

            <div className="col-span-1 carousel rounded-box ml-20">
                <div id="gold" className="carousel-item w-full">
                    <img src={'/public/img/' + "GOLD" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 300, height: 300}}
                    className="w-full" />
                </div> 

                <div id="diamond" className="carousel-item w-full">
                    <img src={'/public/img/' + "DIAMOND" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 300, height: 300}}
                    className="w-full" />
                 </div> 

                <div id="iron" className="carousel-item w-full">
                    <img src={'/public/img/' + "IRON" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 300, height: 300}}
                    className="w-full" />
                </div> 

                 <div id="netherite" className="carousel-item w-full">
                    <img src={'/public/img/' + "NETHERITE" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 300, height: 300}}
                    className="w-full" />
                </div>
                
            </div> 
         </div>


                 {/*right side- item info*/}
         <div>
            <h1 className="text-5xl" style={{ color: '#4dffc3' }}>{"Minecraft: " + " "  + singleItems?.name}</h1>
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
                <input type="radio" name="options" data-title="-" onClick={decrementCount} className="btn" />
                <input type="radio" name="options" data-title={count} style={{color: 'white' }} className="btn btn-disabled" />
                <input type="radio" name="options" data-title="+" onClick={incrementCount} className="btn" />
            </div>

            <button className="btn btn-primary my-4 btn-wide" style={{ fontWeight: 'bold' }}>Add to Cart</button>
        </div>
    </div>
</main>
)}

export default SingleItem;