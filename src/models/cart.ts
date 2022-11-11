import { Item } from "./item";

export interface CartEntry {
    item: Item
    count: number;
}

export class Cart {
    items: CartEntry[];
    total: number;
    count: number;
    addEntry: (entry: CartEntry) => Cart;
    adjustItemCount: (entry: CartEntry) => Cart;
    recountTotals: () => void;
    
    constructor(){
        this.items = [];
        this.total = 0.00;
        this.count = 0;

        this.addEntry = function(entryToAdd: CartEntry){
            // method for adding new entries into our cart

            let increasedCount = false;
            for (const entry of this.items){
                // checking if the same item_id exists in the cart 
                if (entry.item.item_id == entryToAdd.item.item_id){
                    // if so, we can up the quantity instead of appending a new item
                    entry.count += entryToAdd.count;
                    increasedCount = true;
                    break;
                }
            }
            
            // if we didn't find the same id, append a new entry
            if (!increasedCount) this.items.push(entryToAdd);

            // add price to total, and format it properly
            this.total += entryToAdd.item.price;
            this.total = parseFloat(this.total.toFixed(2));

            // increase count
            this.count += entryToAdd.count;
            
            // return a hard copy of the updated cart so react 
            // can actually render the update
            return {...this};
        }

        this.adjustItemCount = function(entryToAdjust: CartEntry) {
            
            //create a new list to hold the updated cart items
            const newItems: CartEntry[] = [];
            
            for (const entry of this.items){
                // checking if the item_id exists in the cart 
                if (entry.item.item_id === entryToAdjust.item.item_id){
                    // if so, adjust the count
                    entry.count += entryToAdjust.count;
                }
                // only if we have more than zero items, 
                // push this entry to the new array
                if (entry.count > 0) {
                    newItems.push(entry);
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