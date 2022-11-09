import { Item } from "./item";
import { User } from "./user";

export interface Order {
    item: Item,
    user: User | undefined,
    quantity: number
    purchase_date?: string
}