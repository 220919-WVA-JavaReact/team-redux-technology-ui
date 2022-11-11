export enum Material {
    IRON = 'IRON',
    GOLD = 'GOLD',
    DIAMOND = 'DIAMOND',
    NETHERITE = 'NETHERITE'
}

export interface Item {
    map(arg0: (item: any) => void): unknown
    item_id: string,
    name: string,
    image: string,
    price: number
    material: Material
}