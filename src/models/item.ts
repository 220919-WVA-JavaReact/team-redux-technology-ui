export enum Material {
    IRON,
    GOLD,
    DIAMOND,
    NETHERITE
}

export interface Item {
    item_id: string,
    name: string,
    image: string,
    price: number
    material: Material
}