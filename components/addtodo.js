import React,{useState} from 'react';
import { View,TextInput,Button,StyleSheet, } from 'react-native';

export default function AddTodo({submitHandler}){

    const[input,setInput]=useState('');
    const changeHandler=(val)=>{
        
        setInput(val)
        

    }
    return(
        <View style={style.container}>
            <TextInput style={style.input} onChangeText={changeHandler} placeholder='Work...'/>
            <Button title='add work' style={style.btn} color='pink' onPress={()=>submitHandler(input)}/>

                    </View>

    )
}
const style=StyleSheet.create({
    container:{
        margin:20,
        marginTop:20
    },
    input:{
        borderColor:'gray',
        borderBottomWidth:1,
        marginBottom:20
        
    },
    btn:{
        backgroundColor:'yellow',
        borderRadius:20
    }

})