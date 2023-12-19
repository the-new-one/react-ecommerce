import { useEffect, useState } from "react";
import { Button, FlatList, Image, ListRenderItem, ListRenderItemInfo, RefreshControl, StyleSheet, Text, View } from "react-native"
import { HomeService } from "./service/homeService";
import { Product } from "../../models/products/product.dto";
import * as ConS from '../../components/Container/style';
import * as DivCon from '../../components/Divider/style';

import { CardProductComponent } from "../../components/Card";
import { useAppCartContext } from "../../providers/AppProvider/AppProvider";

type HomeProps = {
    navigation: any;
}

const Home = ({navigation}: HomeProps) => {
    const [refresh, setOnRefresh] = useState<boolean>(false);

    const homeService = new HomeService();
    const [products, setProducts] = useState<Product[]>([]);
    const useCartContext = useAppCartContext();

    useEffect(() => {
        homeService.getAllProducts()
            .then((response: any) => {
                const {data} = response;
                setProducts(data);
            })
            .catch((err: any) => {
                console.log(err);
            })
    }, [refresh]);

    const onViewCart = (item: Product) => {
        navigation.navigate('ViewCartItem', {
            ...item
        })
    }
    
    const onAddToCart = (item: Product) => {
        const itemAlreadyExist = useCartContext.cartItem.filter((cart: Product) => cart.id === item.id);
        if (itemAlreadyExist.length === 0) {
            const prevItem = useCartContext.cartItemCount + 1;
            item.baseQuantity = 1;
            
            useCartContext.setCartItemCount(prevItem);
            useCartContext.setCartItem((prev: Product) => [...prev, item]);
        }
    }

    function renderProductCard({item}: ListRenderItemInfo<Product>) {
        return <CardProductComponent>
                <Image
                    source={require('../../public/box.png')}
                    style={{width: 100, height: 100, alignSelf: 'center'}}
                />
                <Text style={style.textColor}>Name: { item.name }</Text>
                <Text style={style.textColor}>Price: { item.price }</Text>
                <Text style={style.textColor}>Quantity: { item.quantity }</Text>
                <DivCon.DividerContainer margin="3px" />
                <Button title="add to cart" onPress={() => onAddToCart(item)} />
                <DivCon.DividerContainer margin="3px" />
                <Button title="view" onPress={() => onViewCart(item)} />
            </CardProductComponent>
    }

    const onToggleRefresh = () => {
        setOnRefresh(true);
        setTimeout(() => {
            setOnRefresh(false);
        }, 1000);
    }
    return <View>
        <ConS.ContainerStyle>
            <RefreshControl refreshing={refresh} onRefresh={onToggleRefresh}>
                <FlatList
                    data={products}
                    renderItem={renderProductCard}
                />
            </RefreshControl>
        </ConS.ContainerStyle>
    </View>
}

export default Home;

const style = StyleSheet.create({
    textColor: {
        color: '#000',
        textTransform: 'capitalize',
    }
});