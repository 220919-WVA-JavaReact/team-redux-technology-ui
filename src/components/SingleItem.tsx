import React, { useEffect, useState } from "react";
import { Item, Material } from "../models/item";
import { useAPI } from "../utils/utilityFunctions";
import { useParams } from 'react-router-dom';
import ItemCard from "./ItemCard";

// interface IPropsItem{
//     id: string;
//     name: string;
//     price: number;
//     material: Material;
// }

function SingleItem(){

    const [singleItems, setSingleItems] = useState<Item>()

    useEffect(() => {
        FetchItems();
    }, [])

    let { id } = useParams();

async function FetchItems(){
    const data = await useAPI(`/items/${id}`, 'GET');
    setSingleItems(data);
    console.log(data);
}


    return(
<main>
<div className="grid grid-cols-3 gap-4">

    <div className="col-span-2">
        <h1>{"Minecraft: " + " "  + singleItems?.name}</h1>
        <img src={'../img/' + singleItems?.material + singleItems?.name.toLowerCase() + '.png'}/>
    </div>

    <div>
        <h3>{"Price: " + singleItems?.price}</h3>
        <label>Material: </label>
        <span className="selection"></span>
        
        <button style={{ fontWeight: 'bold' }}>Gold</button>
        <button style={{ fontWeight: 'bold' }}>Diamond</button>
        <button style={{ fontWeight: 'bold' }}>Iron</button>
        <button style={{ fontWeight: 'bold' }}>Netherite</button>
        <button className="btn btn-primary" style={{ fontWeight: 'bold' }}>Add to Cart</button>
    </div>
 </div>
</main>
)}

export default SingleItem;