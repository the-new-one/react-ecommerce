import { ReactNode, createContext, useContext, useState } from "react";
import { AppContextCartModel } from "../../context/App.type";
import { Product } from "../../models/products/product.dto";

const AppContext = createContext<AppContextCartModel | undefined>(undefined);

type AppCartProviderProps = {
    children: ReactNode;
}

export const AppCartProvider = (props: AppCartProviderProps) => {
    const [cartItemCount, setCartItemCount] = useState<number>(0);
    const [cartItem, setCartItem] = useState<Product[]>([]);
    
    function getAppContextValue(): AppContextCartModel {
        return {
            cartItemCount,
            setCartItemCount,
            cartItem,
            setCartItem,
        }
    }

    return <AppContext.Provider value={getAppContextValue()}>
        {props.children}
    </AppContext.Provider>
}

export const useAppCartContext = () => {
    const isContextExists = useContext(AppContext);

    if (!isContextExists) {
        throw new Error('useAppContext is not defined')
    }

    return isContextExists;
}