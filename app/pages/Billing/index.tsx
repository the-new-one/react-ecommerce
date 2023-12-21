import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import * as CS from '../../components/Container/style';
import * as C from '../../components/Card';
import * as TIS from '../../components/TextInput/style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CONSTANT_COLORS} from '../../constants/color';

export const ProceedToBilling = () => {
  const [firstname, setFirstname] = useState<string>('');
  const [middlename, setMiddlename] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [contactno, setContactno] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  return (
    <>
      <CS.ContainerStyle>
        <C.CardProductComponent>
          <CS.ContainerStyle>
            <Text style={style.textColor}>Firstname</Text>
            <TIS.TextInputStyle
              textInputType="billing-input"
              value={firstname}
              onChangeText={setFirstname}
            />
            <Text style={style.textColor}>Middlename</Text>
            <TIS.TextInputStyle
              textInputType="billing-input"
              value={middlename}
              onChangeText={setMiddlename}
            />

            <Text style={style.textColor}>Lastname</Text>
            <TIS.TextInputStyle
              textInputType="billing-input"
              value={lastname}
              onChangeText={setLastname}
            />

            <Text style={style.textColor}>Contactno</Text>
            <TIS.TextInputStyle
              textInputType="billing-input"
              keyboardType="phone-pad"
              maxLength={11}
              value={contactno}
              onChangeText={setContactno}
            />
            <Text style={style.textColor}>Address</Text>
            <TIS.TextInputStyle
              textInputType="billing-input"
              keyboardType="phone-pad"
              maxLength={11}
              value={address}
              onChangeText={setAddress}
            />
          </CS.ContainerStyle>
          <TouchableOpacity style={style.touchableStyle}>
            <Text style={style.touchableTextStyle}>Buy</Text>
          </TouchableOpacity>
        </C.CardProductComponent>
      </CS.ContainerStyle>
    </>
  );
};

const style = StyleSheet.create({
  textColor: {
    color: '#000',
  },
  touchableStyle: {
    backgroundColor: CONSTANT_COLORS[4].value,
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  touchableTextStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
});
