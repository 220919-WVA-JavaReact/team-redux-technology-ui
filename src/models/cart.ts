import { Item } from "./item";

export interface CartEntry {
    item: Item;
    count: number;
}

export class Cart {
    items: CartEntry[];
    total: number;
    addEntry: (entry: CartEntry) => Cart;
    
    constructor(){
        this.items = [];
        this.total = 0;
        this.addEntry = function(entry: CartEntry){
            this.items.push(entry);
            this.total += entry.item.price;
            
            return {...this};
        }
    }
}