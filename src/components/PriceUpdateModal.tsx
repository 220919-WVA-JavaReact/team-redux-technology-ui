import React, { useState, SyntheticEvent } from "react";
import { Item, Material } from "../models/item";

interface IItemProps {
  item: Item | undefined;
  updateCounter: number;
  setUpdateCounter: (nextCount: number) => void;
}

export default function priceModal(props: IItemProps) {
  const {updateCounter, setUpdateCounter} = props;
  
  const [price, setPrice] = useState("");

  const handleInputChange = (e: SyntheticEvent) => {
    setPrice((e.target as HTMLInputElement).value);
  };

  const handleClick = () => {
    // clear input value
    setPrice('');
  }

  let updatePrice = async () => {
    let item = {
      item_id: props.item?.item_id,
      image: "",
      name: props.item?.name,
      price: parseFloat(price) || props.item?.price,
      material: props.item?.material,
    };

    let response = await fetch(
      `${import.meta.env.VITE_API_URL}/items/${props.item?.item_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    if (item) {
      setUpdateCounter(updateCounter + 1);
    }
    handleClick();
  };

  return (
    <div className="modal" id="price-modal">
      <div
        className="modal-box"
        style={{ backgroundImage: `url("/img/site/the_golden_one.png")` }}>
        <a href="#" className="btn btn-sm btn-circle absolute right-2 top-2">
          ✕
        </a>
        <div className="form-control">
          <label className="label">
            <span style={{ color: "black", fontWeight: "bold" }} className=" title label-text">
              Enter new amount:{" "}
            </span>
          </label>
          <label className="input-group">
            <span>Price</span>
            <input
              type="text"
              placeholder="0.00"
              value={price}
              onChange={handleInputChange}
              className="input input-bordered"
            />
            <span>USD</span>
          </label>
          <div className="modal-action">
            <a href="#" className="btn">
              <button onClick={updatePrice}>Submit</button>
            </a>
          </div>
        </div>
        <div className="modal-action"></div>
      </div>
    </div>
  );
}
