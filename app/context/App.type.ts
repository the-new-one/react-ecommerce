import { Product } from "../models/products/product.dto";

export type AppContextCartModel = {
    cartItemCount: number;
    setCartItemCount: (param: number) => void;
    cartItem: Product[];
    setCartItem: (product: Product[]) => void;
};
