import { Material } from "../models/item";

export function materialDisplayName(material: Material){
    let name = '';
    switch(material){
        case Material.DIAMOND:
            name = 'Diamond';
            break;
        case Material.GOLD:
            name = 'Golden';    
            break;
        case Material.IRON:
            name = 'Iron';    
            break;
        case Material.NETHERITE:
            name = 'Netherite';    
            break;
    }
    return name;
}