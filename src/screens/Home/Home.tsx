import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./HomeStyle";
import { Logo } from "../../components/Logo/Logo";
import { Btn } from "../../components/Button/Button";

export default function Home() {
  return (
    <>
      <View style={styles.appContainer}>
        <StatusBar style="light" />
        <Logo></Logo>
        <View style={styles.inputContainer}>
        </View>
        <Btn></Btn>
      </View>
    </>
  );
}
