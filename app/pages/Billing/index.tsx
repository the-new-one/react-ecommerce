import React from 'react';
import {StyleSheet, Text} from 'react-native';
import * as CS from '../../components/Container/style';
import * as C from '../../components/Card';
import * as TIS from '../../components/TextInput/style';

export const ProceedToBilling = () => {
  return (
    <>
      <CS.ContainerStyle>
        <C.CardProductComponent>
          <CS.ContainerStyle>
            <Text style={style.textColor}>Firstname</Text>
            <TIS.TextInputStyle textInputType="css - 1 && cart-input" />
            <Text style={style.textColor}>Middlename</Text>
            <TIS.TextInputStyle />

            <Text style={style.textColor}>Lastname</Text>
            <TIS.TextInputStyle />

            <Text style={style.textColor}>Firstname</Text>
            <TIS.TextInputStyle />
          </CS.ContainerStyle>
        </C.CardProductComponent>
      </CS.ContainerStyle>
    </>
  );
};

const style = StyleSheet.create({
  textColor: {
    color: '#000',
  },
});
