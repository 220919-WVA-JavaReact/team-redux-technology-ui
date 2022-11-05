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
    removeEntry: (entry: CartEntry) => Cart;
    recountTotals: () => void;
    
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
                    this.items[i].count += entry.count;
                    increasedCount = true;
                    break;
                }
            }
            
            // if we didn't find the same id, append a new entry
            if (!increasedCount) this.items.push(entry);

            // add price to total, and format it properly
            this.total += entry.item.price;
            this.total = parseFloat(this.total.toFixed(2));

            // increase count
            this.count += entry.count;
            
            // return a hard copy of the updated cart so react 
            // can actually render the update
            return {...this};
        }

        this.removeEntry = function(entry: CartEntry) {
            
            //create a new list to hold the updated cart items
            const newItems: CartEntry[] = [];
            
            for (let i = 0; i < this.items.length; i++){
                // checking if the item_id exists in the cart 
                if (this.items[i].item.item_id == entry.item.item_id){
                    // if so, reduce the count
                    this.items[i].count -= entry.count;
                    
                    // only if we have more than zero items, 
                    // push this entry to the new array
                    if (this.items[i].count > 0) {
                        newItems.push(this.items[i]);
                    } 
                }
            }

            // set items to the new array
            this.items = newItems;
            this.recountTotals();
            
            return {...this};
        }

        this.recountTotals = function(){
            let newTotal = 0;
            let newCount = 0;
            
            for (const entry of this.items) {
                newCount += entry.count;
                newTotal += entry.item.price * entry.count;
            }

            this.count = newCount;
            this.total = parseFloat(newTotal.toFixed(2));
        }
    }
}