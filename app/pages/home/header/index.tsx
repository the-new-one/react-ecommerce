import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';;
import {CONSTANT_COLORS} from '../../../constants/color';;
import {TouchableOpacity} from 'react-native-gesture-handler';;
import {useAppCartContext} from '../../../providers/AppProvider/AppProvider';;
import {useNavigation} from '@react-navigation/native';;

export const ProductHeader = (props: any) => {
  const useCartContext = useAppCartContext();
  const navigation = useNavigation();

  const onOpenCartItem = () => {
    navigation.navigate('CartItems');;
  };;

  return (
    <View style={style.productHeader}>
      <Text style={style.productText}>Product</Text>
      <TouchableOpacity onPress={onOpenCartItem}>
        <View style={style.productCartView}>
          <Text style={style.productTextCartCounter}>
            {useCartContext.cartItemCount}
          </Text>
          <Image
            source={require('../../../public/shopping-cart.png')}
            style={style.productCartIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  productHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 20,
    justifyContent: 'space-between',
  },
  productText: {
    fontSize: 22,
    color: CONSTANT_COLORS[1].value,
    fontWeight: 'bold',
  },
  productCartView: {
    position: 'relative',
  },
  productTextCartCounter: {
    color: CONSTANT_COLORS[3].value,
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    right: 0,
    top: 0,
    marginTop: -6,
    marginRight: 5,
    zIndex: 100,
  },
  productCartIcon: {
    height: 30,
    width: 30,
  },
})
