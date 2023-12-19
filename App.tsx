/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './app/pages/home';
import {ProductHeader} from './app/pages/home/header';
import {AppCartProvider} from './app/providers/AppProvider/AppProvider';
import ViewCartItem from './app/pages/ViewCartItem';
import {ViewCartItems} from './app/pages/ViewCart';
import {ProceedToBilling} from './app/pages/Billing';

const StackNav = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AppCartProvider>
        <>
          <StackNav.Navigator initialRouteName="Home">
            <StackNav.Screen
              name="Home"
              component={Home}
              options={{
                headerTitle: () => <ProductHeader />,
              }}
            />
            <StackNav.Screen
              name="ViewCartItem"
              component={ViewCartItem}
              options={{
                headerTitle: 'Cart Items',
              }}
            />
            <StackNav.Screen
              name="CartItems"
              component={ViewCartItems}
              options={{
                headerTitle: 'Carts',
              }}
            />
            <StackNav.Screen
              name="BillingScreen"
              component={ProceedToBilling}
              options={{
                headerTitle: 'Billing',
              }}
            />
          </StackNav.Navigator>
        </>
      </AppCartProvider>
    </NavigationContainer>
  );
}

export default App;
