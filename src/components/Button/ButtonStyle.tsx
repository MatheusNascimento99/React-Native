import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerButton: {
        marginTop: 15,
        gap:20,
        width:'70%',
    },
    text: {
        fontSize:16,
        lineHeight:21,
        letterSpacing:0.25,
        color:'black',
        fontWeight:"700",
        textAlign:'center'
    },
    pressable:{
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:'pink',
        padding:8,
        elevation:7,
        borderRadius:8,
        textAlign:'center'
    },
    copy:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    containerInput:{
        textAlign:'center'
    },
    numCarac:{
        backgroundColor:'pink',
        width:40,
        borderRadius:8,
        alignSelf:'center',
        padding:5,
        fontSize:18,
        fontWeight:'700',
        color:'black',
        textAlign:'center'
    },
    quantCaract:{
        textAlign:'center',
        color:'pink'
    }
});