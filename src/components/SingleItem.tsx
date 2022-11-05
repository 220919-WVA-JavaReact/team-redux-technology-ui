import React, { useEffect, useState } from "react";
import { Item, Material } from "../models/item";
import { useAPI } from "../utils/utilityFunctions";
import { useParams } from 'react-router-dom';
import ItemCard from "./ItemCard";



function SingleItem(){

    const [singleItems, setSingleItems] = useState<Item>()
    let [count, setCount] = useState(0);

    useEffect(() => {
        FetchItems();
    }, [])

    let { id } = useParams();

async function FetchItems(){
    const data = await useAPI(`/items/${id}`, 'GET');
    setSingleItems(data);
    console.log(data);
}

  
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

    <div className="col-span-2">
        <img 
        src={'../img/' + singleItems?.material + singleItems?.name.toLowerCase() + '.png'}
        alt={singleItems?.name}
        style={{width: 300, height: 300}}
        className="ml-40 "
        />
    </div>

    <div>
        <h1 className="text-5xl" style={{ color: '#4dffc3' }}>{"Minecraft: " + " "  + singleItems?.name}</h1>
        <h3 className="my-2 text-2xl">{"Price: " + "$" + singleItems?.price}</h3>
        <label className="text-2xl">Material: </label>
        
        <div className="flex-row-reverse space-x-4 space-x-reverse ">
        <span className="selection"></span>
        <button className="btn btn-primary m-5 pr-4 pl-4" style={{ fontWeight: 'bold' }}>Gold</button>
        <button className="btn btn-primary m-5 pr-4 pl-4" style={{ fontWeight: 'bold' }}>Diamond</button>
        <button className="btn btn-primary m-5 " style={{ fontWeight: 'bold' }}>Iron</button>
        <button className="btn btn-primary m-1" style={{ fontWeight: 'bold' }}>Netherite</button>
        </div> 

    {/* <div className="btn-group">
        <input type="radio" name="options" data-title="Gold" className="btn" />
        <input type="radio" name="options" data-title="Diamond" className="btn" checked />
        <input type="radio" name="options" data-title="Iron" className="btn" />
        <input type="radio" name="options" data-title="Netherite" className="btn" />
    </div> */}

        <div className="btn-group m-1 mx-8 my-6">
        <input type="radio" name="options" data-title="-" onClick={decrementCount} className="btn" />
        <input type="radio" name="options" data-title={count} style={{color: 'white' }} className="btn btn-disabled" />
        <input type="radio" name="options" data-title="+" onClick={incrementCount} className="btn" />
         {/* <button className="rounded-full border-2 border-indigo-600 pr-4 pl-4" onClick={decrementCount}>-</button>
            <button>Qty: {count}</button>
            <button className="rounded-full border-2 border-indigo-600 pr-4 pl-4" onClick={incrementCount}>+</button> */}
         </div>

        <button className="btn btn-primary my-4 btn-wide" style={{ fontWeight: 'bold' }}>Add to Cart</button>
    </div>
 </div>
</main>
)}

export default SingleItem;