

import React,{useState} from 'react'

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

const App = () => {
  
  const [randomColor, setRandomColor] = useState('rgb(32,0,126)'); 
  const changeBG = () => {
    let color = 'rgb('+
      Math.floor(Math.random()*256)+
      ','+
      Math.floor(Math.random()*256)+
      ',' +
      Math.floor(Math.random()*256)+
      ')';

      setRandomColor(color);
  } 

  const [resetColor, setResetColor] = useState(randomColor);
  const resetBG = () => {
    let color1 = 'rgb(0,0,0)';
    setResetColor(color1);
    setRandomColor(color1);
  }

  return(
    <>
    <StatusBar backgroundColor = {randomColor}/>
      <View style={[styles.container,{backgroundColor:randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Tap Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetBG}>
          <Text style={styles.text1}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",

  },
  text: {
    fontSize:30,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#FFFFFF",
    borderRadius:15,
    textTransform:"uppercase",
  }, 
  text1: {
    fontSize:30,
    marginTop:45,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:45,
    color:"#FFFFFF",
    borderRadius:15,
    textTransform:"uppercase",
    
  }, 

})
