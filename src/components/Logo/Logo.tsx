import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles, stylesTitle, stylesLogo } from './LogoStyle';
import logo from '../../../assets/padlock.png';

export function Logo() {
  return (
    <View style={styles.container}>
        <Text style={stylesTitle.title}>Gerador de Senhas</Text>
        <Image style={stylesLogo.img} source={logo}></Image>
    </View>
  );
}