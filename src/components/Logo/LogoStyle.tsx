import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    width: "auto",
    display:'flex',
    flexDirection: "column",
    borderColor: "white",
    borderWidth: 2,
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
  },
});

export const stylesLogo = StyleSheet.create({
  img: {
    resizeMode: "contain",
    height: 150,
    margin: 5,
    marginBottom: 20,
  },
});
