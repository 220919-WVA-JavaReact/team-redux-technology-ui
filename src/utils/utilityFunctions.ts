import { Item, Material } from "../models/item";

export function materialDisplayName(material: Material) {
    let name = '';
    switch (material) {
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

export function getItemImg(item: Item) {
    return 'img/' + item.material + item.name.toLowerCase() + '.png';
}

export async function useAPI(route: string, method: string, headers?: HeadersInit, body?: any) {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}${route}`, {
            method: method,
            headers: headers ? headers : {'Content-Type': 'application/json'},
            body: body ? JSON.stringify(body) : undefined
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

export const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});