import React from "react";
import { View,Text,StyleSheet } from "react-native";

export default function Header(){
    return(
        <View>
              <View style={style.header}>
                <Text style={style.text}>TodoApp</Text>
            </View>

    
            

        </View>
    )
}
const style=StyleSheet.create({
    header:{
        
        height:80,
        backgroundColor:'pink',
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:20,
        fontWeight:"bold"
    }
})