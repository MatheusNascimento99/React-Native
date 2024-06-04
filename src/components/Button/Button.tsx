import React, { useState } from "react";
import { View, Text, Pressable, Image, TextInput } from "react-native";
import { styles } from "./ButtonStyle";
import generatePass from "../../services/passwordService";
import numInput from "../../services/caracNum";
import { TextInputPassword } from "../TextInput/TextInput";
import * as Clipboard from "expo-clipboard";
import copy from "../../../assets/copy.png";

export function Btn() {
  const [pass, setPass] = useState('');
  const [numCarac, setNumCarac] = useState('');
  const [copiar, setCopiar] = useState('COPIAR');

  function caracNumAndGenerate() {
    let generateToken = generatePass(numInput(numCarac));
    setPass(generateToken);
    setCopiar('COPIAR');

  }


  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
    setCopiar('COPIADO!');
  }

  return (
    <>
      <View style={styles.containerButton}>
        <Text style={styles.quantCaract}>Quantidade de caracteres:</Text>
        <TextInput 
        maxLength={2}
        style={styles.numCarac}
        inputMode="numeric" 
        onChangeText={(newText) => setNumCarac(newText)}
        />
        <Text></Text>
        <Text style={styles.pressable} onPress={caracNumAndGenerate}>
          <Text style={styles.text}>GERAR SENHA</Text>
        </Text>
        <TextInputPassword pass={pass}/>
        <Pressable onPress={handleCopyButton} style={styles.pressable}>
          <View style={styles.copy}>
            <Image source={copy} />
            <Text style={styles.text}>{copiar}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}
