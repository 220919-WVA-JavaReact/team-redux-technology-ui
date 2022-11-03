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

export async function useAPI(route: string, method: string) {
    try {
        const res = await fetch(`http://localhost:8080${route}`, {
            method: method,
        }); 

        if (res.status != 200) {
            console.log('could not connect');
        } else {
            const result = await res.json();
            return result;
        }

    } catch (err) {
        console.log('There was an error communicating with the API.');
    }
}