import { Image, StyleSheet, Text } from 'react-native';
import * as S from '../../components/Container/style';
import * as CS from '../../components/Container/style';

import { CardProductComponent } from '../../components/Card';
import { ViewContainerComponent } from '../../components/View';
import { COLORS } from '../../constants/color';

export const ViewCartItem = (props: any) => {
    const {params} = props.route;
    const {id, name, price, quantity} = params;
    return <>
        {
            id ?
            <S.ContainerStyle key={id}>
                <CardProductComponent>
                    <Image
                        source={require('../../public/box.png')}
                        style={style.cardIMG}
                    />
                    <ViewContainerComponent backgroundColor={COLORS.GREEN_1}>
                        <CS.ContainerStyle>
                            <Text style={style.textContainer}>Name: {name}</Text>
                            <Text style={style.textContainer}>Price: {price}</Text>
                            <Text style={style.textContainer}>Quantity: {quantity}</Text>
                        </CS.ContainerStyle>
                    </ViewContainerComponent>
                </CardProductComponent>
            </S.ContainerStyle>:
        <Text>Empty Cart.</Text>
        }
    </>
}

export default ViewCartItem;

const style = StyleSheet.create({
    textContainer: {
        color: COLORS.BLACK,
        textTransform: 'capitalize',
    },
    cardIMG: {
        alignSelf: 'center',
        width: 100,
        height: 100,
    }
})