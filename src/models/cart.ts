import { Item } from "./item";

export interface CartEntry {
    item: Item;
    count: number;
}

export class Cart {
    items: CartEntry[];
    total: number;
    count: number;
    addEntry: (entry: CartEntry) => Cart;
    
    constructor(){
        this.items = [];
        this.total = 0.00;
        this.count = 0;
        this.addEntry = function(entry: CartEntry){
            // method for adding new entries into our cart

            let increasedCount = false;
            for (let i = 0; i < this.items.length; i++){
                // checking if the same item_id exists in the cart 
                if (this.items[i].item.item_id == entry.item.item_id){
                    // if so, we can up the quantity instead of appending a new item
                    this.items[i].count++;
                    increasedCount = true;
                    break;
                }
            }
            
            // if we didn't find the same id, append a new entry
            if (!increasedCount) this.items.push(entry);

            // add price to total, and format it properly
            this.total += entry.item.price;
            this.total = parseFloat(this.total.toPrecision(3));

            // increase count
            this.count++;
            
            // return a hard copy of the updated cart so react 
            // can actually render the update
            return {...this};
        }
    }
}