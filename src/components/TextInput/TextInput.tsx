import React from "react";
import { View, TextInput } from "react-native";

import { styles } from "./TextInputStyle";

interface TextInputPasswordProps{
  pass:string
}

export function TextInputPassword(props:TextInputPasswordProps) {
  return (
    <View style={styles.inputContainer} >
      <TextInput 
      style={styles.input} 
      placeholder="pass"
      value={props.pass}
      ></TextInput>
    </View>
  );
}
