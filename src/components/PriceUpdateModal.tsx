import React, { useState, SyntheticEvent } from 'react';
import { Item, Material } from '../models/item';



interface IItemProps{
    item: Item | undefined
    setMaterial: (nextMaterial: Material | undefined) => void
}

export default function priceModal(props: IItemProps){

    const [price, setPrice] = useState('');



     const handleInputChange = (e: SyntheticEvent) => {
         setPrice((e.target as HTMLInputElement).value);
     }

    let updatePrice= async () => {
        let item = {
            item_id: props.item?.item_id,
            image: '',
            name: props.item?.name,
            price: parseFloat(price)|| props.item?.price,
            material: props.item?.material
        }
       
        let response = await fetch(`${import.meta.env.VITE_API_URL}/items/${props.item?.item_id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
            
        });  
        console.log('item: ', item)
        console.log('response: ', response)
        if(item){
        props.setMaterial(item.material)
        }
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
                        <input type="text" placeholder="0.00" value={price}  onChange={handleInputChange} className="input input-bordered" />
                        <span>USD</span>
                        </label>
                        <div className="modal-action">
                    <a href="#" className="btn"><button onClick={updatePrice}>Submit</button></a>
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