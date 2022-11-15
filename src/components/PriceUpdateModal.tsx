import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item } from '../models/item';
import { useAPI } from '../utils/utilityFunctions';
import ItemCard from './ItemCard';
import SingleItem from './SingleItem/SingleItem';

export default function priceModal(){

    const [price, setPrice] = useState<Item>();
    let { id } = useParams();


    // handleChange(){
        
    // }

    useEffect(() => {
        updatePrice();
    }, [])

    let updatePrice= async () => {
       
        let response = await fetch(`${import.meta.env.VITE_API_URL}/items/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(price)
            
        });  
        console.log('price: ', price)
        console.log('response: ', response)

    }

    return(
        <div className="modal" id="price-modal">
            <div className="modal-box">
            <div className="form-control">
                    <label className="label">
                        <span className="title label-text">Enter new amount: </span>
                    </label>
                    <label className="input-group">
                        <span>Price</span>
                        <input type="text" placeholder="0.00" className="input input-bordered" />
                        <span>USD</span>
                        </label>
                        <div className="modal-action">
                    <a href="#" className="btn">Submit</a>
                    <br/>
                    <a href="#" className="btn">Close</a>
                     </div>
                    
                    </div>
                <div className="modal-action">
            </div>
            </div>
        </div>
    )
}