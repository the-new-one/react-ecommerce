import { Button, Dimensions, FlatList, Image, ListRenderItemInfo, Pressable, StyleSheet, Text, TextInput, ToastAndroid, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { CardProductComponent } from '../../components/Card';
import * as CS from '../../components/Container/style';
import { Product } from '../../models/products/product.dto';
import { useAppCartContext } from '../../providers/AppProvider/AppProvider';
import { CONSTANT_COLORS } from '../../constants/color';
import { BASE_URI } from '../../../utils/axiosConfig';
import { DividerContainer } from '../../components/Divider/style';
import * as DV from '../../components/Divider/style';
import * as FS from '../../components/FlexRow/style';
import * as FC from '../../components/FlexCol/style';
import * as IS from '../../components/TextInput/style';
import { useEffect, useMemo, useState } from 'react';
import Modal from "react-native-modal";

export const ViewCartItems = () => {
    const userCartContext = useAppCartContext();
    const [togglePurchaseModal, setTogglePurchaseModal] = useState<boolean>(false);
    let purchasedTotal: number = 0.00;

    const [actions, setActions] = useState<{key: string, id: number, value: number} | undefined>(undefined);

    useMemo(() => {}, [actions]);

    const onAddQuantity = (item: Product) => {
        item.baseQuantity += 1;
        setActions({
            key: 'add-quantity',
            id: item.id,
            value: item.baseQuantity
        })

        if (item.baseQuantity > item.quantity) {
            item.baseQuantity -= 1;
            ToastAndroid.show('Quantity exceed its limit.', ToastAndroid.LONG);
        }
    }

    const onSubtractQuantity = (item: Product) => {
        item.baseQuantity -= 1;
        setActions({
            key: 'subtract-quantity',
            id: item.id,
            value: item.baseQuantity
        })
        if (item.baseQuantity < 0) {
            item.baseQuantity = 1;
        }
    }
    
    const onDroppedItem = (item: Product) => {
        setActions({
            key: 'dropped-item',
            id: item.id,
            value: item.baseQuantity,
        });
        const newCartItem = userCartContext.cartItem.filter((cart: Product) => cart.id !== item.id);
        userCartContext.setCartItem(newCartItem);
        userCartContext.setCartItemCount(newCartItem.length);
    }

    function onRenderCartItems({item}: ListRenderItemInfo<Product>) {
        return <>
            <CardProductComponent key={item.id}>
                <FS.FlexRowStyle>
                    <FC.FlexColStyle>
                        {item.image?.length ?
                            <Image source={{
                                uri: BASE_URI
                            }}
                                style={{ width: 100, height: 100 }} />
                            :
                            <Image
                                source={require('../../public/box.png')}
                                style={{ width: 100, height: 100, alignSelf: 'center' }} />
                        }
                        <Text style={style.cartText}>name: {item.name}</Text>
                        <Text style={style.cartText}>price: $ {item.price}</Text>
                        <FS.FlexRowStyle>
                            <CS.ContainerStyle backgroundColor="teal" hasBackground={true} width="110px">
                                <Text style={style.cartText}>quantity: {item.quantity}</Text>
                            </CS.ContainerStyle>
                        </FS.FlexRowStyle>
                    </FC.FlexColStyle>
                    <FC.FlexColStyle>
                        <Text style={[style.cartText]}>Item Breakdown.</Text>
                        <Text style={[style.cartText, style.marginText]}>
                            Quantity: {item.baseQuantity}
                        </Text>
                        <Text style={[style.cartText, style.marginText]}>
                            Cost: {item.baseQuantity * parseFloat(item.price)}
                        </Text>
                        <DividerContainer margin="20px 0 0 0"/>
                        <FS.FlexRowStyle>
                            <TouchableOpacity onPress={() => onAddQuantity(item)}>
                                <CS.ContainerStyle backgroundColor="red" hasBackground={true} width="35px" height="35px">
                                    <Text style={style.textAddQuantity}>+</Text>
                                </CS.ContainerStyle>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onSubtractQuantity(item)}>
                                <CS.ContainerStyle backgroundColor="red" hasBackground={true} width="35px" height="35px">
                                    <Text style={style.textAddQuantity}>-</Text>
                                </CS.ContainerStyle>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onDroppedItem(item)}>
                                <CS.ContainerStyle backgroundColor="red" hasBackground={true} width="35px" height="35px">
                                    <Text style={style.textAddQuantity}>x</Text>
                                </CS.ContainerStyle>
                            </TouchableOpacity>
                        </FS.FlexRowStyle>
                    </FC.FlexColStyle>
                </FS.FlexRowStyle>
            </CardProductComponent><DV.DividerContainer margin="5px 0 0 0" />
        </>
    }
    
    const onPurchaseItem = () => {
        setTogglePurchaseModal(!togglePurchaseModal);
    }
    
    const onCloseModal = () => {
        setTogglePurchaseModal(false);
    }

    return <CS.ContainerStyle style={style.parentHeight}>  
        {
            userCartContext.cartItem.length ? 
            <>
                <FlatList 
                    data={userCartContext.cartItem}
                    renderItem={onRenderCartItems}
                />
                {
                    togglePurchaseModal ?
                    <Modal isVisible>
                        <CS.ContainerStyle>
                            <View style={style.viewModalContainer}>
                                <View>
                                    {
                                        userCartContext.cartItem.map((cart: Product) => {
                                            purchasedTotal += (cart.baseQuantity * parseFloat(cart.price));
                                            return <View key={cart.id}>
                                                <FS.FlexRowStyle>
                                                    <Text style={style.cartText}>{cart.name}</Text>
                                                    <Text style={style.cartText}>{cart.baseQuantity} x</Text>
                                                    <Text style={style.cartText}>@{cart.price}</Text>
                                                    <Text style={style.cartText}> = {cart.baseQuantity * parseFloat(cart.price)}</Text>
                                                </FS.FlexRowStyle>
                                                <View style={{borderBottomColor: 'red'}} />
                                            </View>
                                        })
                                    }
                                    <Text style={[style.cartText, style.purchaseTotalPayment]}>Total: $ { purchasedTotal }</Text>
                                </View>
                            <View style={style.buttonPurchaseActions}>
                                <TouchableOpacity onPress={onCloseModal} style={style.purchaseCloseModal}>
                                    <Text style={[style.cartText, style.cartTextCenter, style.cartTextWhite]}>close modal</Text>
                                </TouchableOpacity>
                                {/* <Button title="buy"/>
                                <Button title="close" onPress={onCloseModal} /> */}
                            </View>
                            </View>
                            
                        </CS.ContainerStyle>
                    </Modal>
                    :
                    <TouchableOpacity onPress={onPurchaseItem}>
                        <CS.ContainerStyle style={style.purchaseItemContainer}>
                            <Text style={[style.cartText, {color: '#FFF'}]}>
                                purchased item
                            </Text>
                        </CS.ContainerStyle>
                    </TouchableOpacity>
                }
            </>
            :
            <Text style={style.cartTextEmpty}>Your Cart is empty.</Text>
        }
    </CS.ContainerStyle>
}

const style = StyleSheet.create({
    parentHeight: {
        height: Dimensions.get('window').height-60
    },
    cartText: {
        color: CONSTANT_COLORS[1].value,
        textTransform: 'capitalize',
    },
    cartTextCenter: {
        textAlign: 'center',
    },
    cartTextWhite: {
        color: CONSTANT_COLORS[2].value,
    },
    cartTextEmpty: {
        color: CONSTANT_COLORS[1].value,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    textAddQuantity: {
        fontSize: 30,
        textAlign: "center",
        marginTop: -15
    },
    marginText: {
        marginTop: 5,
    },
    purchaseItemContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'red',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -10,
    },
    viewModalContainer: {
        backgroundColor: CONSTANT_COLORS[2].value,
        height: 300,
        padding: 10,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between'
    },
    purchaseCloseModal: {
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 100,
    },
    purchaseTotalPayment: {
        textAlign: 'right',
        marginRight: 20
    },
    buttonPurchaseActions: {
        display: 'flex',
    }
});