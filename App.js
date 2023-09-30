import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>

    <View style= {styles.zalo_title}>Zalo App</View>

     <View style = {{flexDirection : 'row',flex : 1 , flexWrap: 'nowrap'}}>
      <input form='' style={styles.input} placeholder = "Search here"></input>
     
     </View>
     <View style = {{flex : 1, flexDirection: 'row',justifyContent : 'flex-start' , alignItems : 'flex-start',width : '300px'}}>
        <View>
          <Image style = {styles.img} source={require('./assets/icon.png')}/>
        </View>
        <View style = {{marginLeft: '10px'}}>
          <View>Dam Huu Thanh</View>
          <View>Noi dung tin nhan bla bla bla</View>
        </View>
     </View>
     <View style = {{flex : 1, flexDirection: 'row',justifyContent : 'flex-start' , alignItems : 'flex-start',width : '300px'}}>
        <View>
          <Image style = {styles.img} source={require('./assets/icon.png')}/>
        </View>
        <View style = {{marginLeft: '10px'}}>
          <View>Dam Huu Thanh</View>
          <View>Noi dung tin nhan bla bla bla</View>
        </View>
     </View>
     <View style = {{flex : 1, flexDirection: 'row',justifyContent : 'flex-start' , alignItems : 'flex-start',width : '300px'}}>
        <View>
          <Image style = {styles.img} source={require('./assets/icon.png')}/>
        </View>
        <View style = {{marginLeft: '10px'}}>
          <View>Dam Huu Thanh</View>
          <View>Noi dung tin nhan bla bla bla</View>
        </View>
     </View>
     <View style = {{flex : 1, flexDirection: 'row',justifyContent : 'flex-start' , alignItems : 'flex-start',width : '300px'}}>
        <View>
          <Image style = {styles.img} source={require('./assets/icon.png')}/>
        </View>
        <View style = {{marginLeft: '10px'}}>
          <View>Dam Huu Thanh</View>
          <View>Noi dung tin nhan bla bla bla</View>
        </View>
     </View>
     <View style = {{flex : 1, flexDirection: 'row',justifyContent : 'flex-start' , alignItems : 'flex-start',width : '300px'}}>
        <View>
          <Image style = {styles.img} source={require('./assets/icon.png')}/>
        </View>
        <View style = {{marginLeft: '10px'}}>
          <View>Dam Huu Thanh</View>
          <View>Noi dung tin nhan bla bla bla</View>
        </View>
     </View>
     <View style = {{flex : 1, flexDirection: 'row',justifyContent : 'flex-start' , alignItems : 'flex-start',width : '300px'}}>
        <View>
          <Image style = {styles.img} source={require('./assets/icon.png')}/>
        </View>
        <View style = {{marginLeft: '10px'}}>
          <View>Dam Huu Thanh</View>
          <View>Noi dung tin nhan bla bla bla</View>
        </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66CCFF',
    alignItems:'center',
  },
  input: {
    color:'red',
    marginTop: 30,
    height: '30px',
    width:'300px',
    borderRadius: '5px',
    borderColor:'red',
    fontSize: '20px',
  },
  zalo_title : {
    fontSize: '40px',
    color: 'blue',
  },
  img : {
    flex:1,
    width: 50,
    height: 50,
    justifyContent : 'flex-start' , alignItems : 'flex-start'
  }
  
});
