import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, ToastAndroid} from 'react-native';
import * as CS from '../../components/Container/style';
import * as C from '../../components/Card';
import * as TIS from '../../components/TextInput/style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { SignupService } from '../signup/service/service';
import { COLORS } from '../../constants/color';

export const ProceedToBilling = () => {
  const signUp = new SignupService();

  const [firstname, setFirstname] = useState<string>('');
  const [middlename, setMiddlename] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [contactno, setContactno] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function onBuyItem() {
    try{
      const payLoads = {
        firstname, middlename, lastname, contactno, address, email, password
      }
  
      signUp.signUp(payLoads)
        .then((response) => {
          const {data} = response;
          console.log(data);
        })
        .catch((err) => {
          ToastAndroid.show('err', ToastAndroid.LONG);
        });
    }
    catch(error) {
      console.log(error)
    }
  }
  return (
    <>
      <ScrollView>
        <CS.ContainerStyle>
          <C.CardProductComponent>
            <CS.ContainerStyle>
              <Text style={[style.textColor, {margin: 5}]}>Firstname</Text>
              <TIS.TextInputStyle
                textInputType="billing-input"
                value={firstname}
                onChangeText={setFirstname}
              />
              <Text style={[style.textColor, {margin: 5}]}>Middlename</Text>
              <TIS.TextInputStyle
                textInputType="billing-input"
                value={middlename}
                onChangeText={setMiddlename}
              />

              <Text style={[style.textColor, {margin: 5}]}>Lastname</Text>
              <TIS.TextInputStyle
                textInputType="billing-input"
                value={lastname}
                onChangeText={setLastname}
              />

              <Text style={[style.textColor, {margin: 5}]}>Contactno</Text>
              <TIS.TextInputStyle
                textInputType="billing-input"
                keyboardType="phone-pad"
                maxLength={11}
                value={contactno}
                onChangeText={setContactno}
              />
              <Text style={[style.textColor, {margin: 5}]}>Address</Text>
              <TIS.TextInputStyle
                textInputType="billing-input"
                value={address}
                onChangeText={setAddress}
              />
              <Text style={[style.textColor, {margin: 5}]}>Email</Text>
              <TIS.TextInputStyle
                keyboardType="email-address"
                textInputType="billing-input"
                value={email}
                onChangeText={setEmail}
              />
              <Text style={[style.textColor, {margin: 5}]}>Password</Text>
              <TIS.TextInputStyle
                textInputType="billing-input"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </CS.ContainerStyle>
            <TouchableOpacity style={style.touchableStyle} onPress={onBuyItem}>
              <Text style={style.touchableTextStyle}>Buy</Text>
            </TouchableOpacity>
          </C.CardProductComponent>
      </CS.ContainerStyle>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  textColor: {
    color: '#000',
  },
  touchableStyle: {
    backgroundColor: COLORS.GREEN_1,
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  touchableTextStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
});
