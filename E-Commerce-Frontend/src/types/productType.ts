export type TProduct = {
    id:number;
    title:string;
    price:string;
    description?:string;
    img:string;
    cat_prefix:string;
    img_group?: string[];
    matrial?:string;
    max?:number;
    categoryTitle?:string
}
