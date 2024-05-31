import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./ButtonStyle";
import generatePass from "../../services/passwordService";
import { TextInputPassword } from "../TextInput/TextInput";
import * as Clipboard from 'expo-clipboard';

export function Btn() {
  const [pass, setPass] = useState("");

  function handGenerateBtn() {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass)
  }

  return (
    <>
      <View style={styles.containerButton}>
        <TextInputPassword pass={pass}></TextInputPassword>
        <Text style={styles.pressable} onPress={handGenerateBtn}>
          <Text style={styles.text}>GERAR SENHA</Text>
        </Text>
        <Pressable onPress={handleCopyButton} style={styles.pressable}>
          <Text style={styles.text}>⚡ COPIAR</Text>
        </Pressable>
      </View>
    </>
  );
}
