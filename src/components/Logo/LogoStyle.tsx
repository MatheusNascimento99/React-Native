import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    width: "auto",
    display:'flex',
    flexDirection: "column",
    alignContent:'center',
    justifyContent:'center'
  },
});

export const stylesTitle = StyleSheet.create({
  title: {
    fontWeight: "800",
    fontSize: 32,
    textAlign: "center",
    padding: 5,
    width:"auto",

  },
});

export const stylesLogo = StyleSheet.create({
  img: {
    width:"auto",
    resizeMode: "contain",
    height: 150,
    margin: 5,
    marginBottom: 20,
  },
});
