import React,{useState} from 'react';
import {View,Text,FlatList,StyleSheet,TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import  Header  from './components/header';
import AddTodo from './components/addtodo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function App(){
  const[work,setWork]=useState([
    {work:'train lena hai', key:'1'},
    {work:'college jana hai', key:'2'},
    {work:'khana khana hai', key:'3'},
  ]);
  const pressHandler=(key)=>{
    return (
      setWork((prevWork)=>{
        return prevWork.filter(todo=>todo.key!=key);
      })
    )
  }
    const submitHandler=(input)=> {
      if(input.length>3){
        setWork((prevTodos) => {
          console.log(input);
          return [
            
            { work: input, key: Math.random().toString() },
            ...prevTodos
          ];
        }
    
        );
      }
      else{
        Alert.alert('OOPS!','work must be 4 charater long',[
          {text:'OK',onPress:()=>{console.log('alert is closed')}}

        ])

      }
    
  }

  
  return(
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>

    <View style={style.container}>
      <Header/>
      <View style={style.contents}>
      <AddTodo submitHandler={submitHandler}/>
      <View style={style.list}>
      <FlatList
      data={work}
      renderItem={({item})=>(
        <TouchableOpacity on onPress={()=>pressHandler(item.key)}>
          <View style={style.listitems}>
            
        <Text >{item.work}</Text>
        <MaterialIcon name='delete' size={20} color="#111"/>
        </View>
</TouchableOpacity>
      )}
      />
      </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )

}
const style=StyleSheet.create({
  container:{
    flex:1
    
  },
  contents:{
    flex:1
  },
  list:{
    flex:1,
    margin:20, 
   
    
    

  },
  listitems:{
    margin:10,
    borderColor:"black",
    borderWidth:1,
    padding:10,
    borderRadius:10,
    fontWeight:'bold',
    flexDirection:'row',
    justifyContent:"space-between"
    
  }

})