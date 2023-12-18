import { Image, StyleSheet, Text } from 'react-native';
import * as S from '../../components/Container/style';
import * as CS from '../../components/Container/style';

import { CONSTANT_COLORS } from '../../constants/color';
import { CardProductComponent } from '../../components/Card';
import { ViewContainerComponent } from '../../components/View';

export const ViewCartItem = (props: any) => {
    const {params} = props.route;
    const {id, name, price, quantity} = params;

    return <S.ContainerStyle key={id}>
       <CardProductComponent>
        <Image
            source={require('../../public/box.png')}
            style={style.cardIMG}
        />
        <ViewContainerComponent backgroundColor={CONSTANT_COLORS[4].value}>
            <CS.ContainerStyle>
                <Text style={style.textContainer}>Name: {name}</Text>
                <Text style={style.textContainer}>Price: {price}</Text>
                <Text style={style.textContainer}>Quantity: {quantity}</Text>
            </CS.ContainerStyle>
        </ViewContainerComponent>
       </CardProductComponent>
    </S.ContainerStyle>
}

export default ViewCartItem;

const style = StyleSheet.create({
    textContainer: {
        color: CONSTANT_COLORS[1].value,
        textTransform: 'capitalize',
    },
    cardIMG: {
        alignSelf: 'center',
        width: 100,
        height: 100,
    }
})