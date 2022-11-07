import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Item, Material } from "../../models/item";
import { useAPI } from "../../utils/utilityFunctions";
import { useParams } from 'react-router-dom';
import ItemCard from "../ItemCard";
import './SingleItem.css'




function SingleItem(){

    const [singleItems, setSingleItems] = useState<Item>()
    let [count, setCount] = useState(0);

    useEffect(() => {
        FetchItems();
    }, [])

    let { id } = useParams();

{/*item promise*/}
async function FetchItems(){
    const data = await useAPI(`/items/${id}`, 'GET');
    setSingleItems(data);
    console.log(data);
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
                    <li><a href="#item1" className="object-none object-left-bottom thumbimg" >
                    <img src={'../img/' + "GOLD" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 200, height: 100}}
                    className="w-full" />
                    </a></li>
                    
                    <li><a href="#item2" className="object-none object-left-bottom thumbimg">
                    <img src={'../img/' + "Diamond" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 200, height: 100}}
                    className="w-full" />
                    </a></li>
                    <li>

                    <a href="#item3" className="object-none object-left-bottom thumbimg">
                    <img src={'../img/' + "IRON" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 200, height: 100}}
                    className="w-full" />
                    </a></li>

                    <li><a href="#item4" className="object-none object-left-bottom thumbimg">
                    <img src={'../img/' + "NETHERITE" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 200, height: 100}}
                    className="w-full" />
                    </a></li>

                </ul>
            </div>

            <div className="col-span-1 carousel rounded-box ml-20">
                <div id="item1" className="carousel-item w-full">
                    <img src={'../img/' + "GOLD" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 300, height: 300}}
                    className="w-full" />
                </div> 

                <div id="item2" className="carousel-item w-full">
                    <img src={'../img/' + "DIAMOND" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 300, height: 300}}
                    className="w-full" />
                 </div> 

                <div id="item3" className="carousel-item w-full">
                    <img src={'../img/' + "IRON" + singleItems?.name.toLowerCase() + '.png'}
                    style={{width: 300, height: 300}}
                    className="w-full" />
                </div> 

                 <div id="item4" className="carousel-item w-full">
                    <img src={'../img/' + "NETHERITE" + singleItems?.name.toLowerCase() + '.png'}
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
                <a href="#item1" className="btn btn-primary m-5 pr-4 pl-4" style={{ fontWeight: 'bold' }}>Gold</a>
                <a href="#item2" className="btn btn-primary m-5 pr-4 pl-4" style={{ fontWeight: 'bold' }}>Diamond</a>
                <a href="#item3" className="btn btn-primary m-5 " style={{ fontWeight: 'bold' }}>Iron</a>
                <a href="#item4" className="btn btn-primary m-1" style={{ fontWeight: 'bold' }}>Netherite</a>
            </div> 

            <div className="btn-group m-1 mx-8 my-6">
                <input type="radio" name="options" data-title="-" onClick={decrementCount}  disabled={count <= 0 ? true : false} className="btn" />
                <input type="radio" name="options" data-title={count} style={{color: 'white' }} className="btn btn-disabled" />
                <input type="radio" name="options" data-title="+" onClick={incrementCount} className="btn" />
            </div>

            <button className="btn btn-primary my-4 btn-wide" style={{ fontWeight: 'bold' }} >Add to Cart</button>
        </div>
    </div>
</main>
)}

export default SingleItem;