import  React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet, TextInput } from 'react-native';

 function Citas_Ingreso(){
    return(
        <ImageBackground  source= {require('../assets/logo2.jpg')} style={styles.container}>
          <Text>Bienvenido</Text> 
          <TextInput placeholder= 'Nombre de Usuario' placeholderTextColor = 'white' maxLength = {18} style={styles.box} > </TextInput>
          <TextInput placeholder= 'Cedula Ciudadania' placeholderTextColor = 'white' maxLength = {10} style={styles.box} > </TextInput>  
          <TextInput placeholder= 'Nombre de Usuario' placeholderTextColor = 'white' maxLength = {18} style={styles.box} > </TextInput>
          <TextInput placeholder= 'Cedula Ciudadania' placeholderTextColor = 'white' maxLength = {10} style={styles.box} > </TextInput> 
          <TextInput placeholder= 'Nombre de Usuario' placeholderTextColor = 'white' maxLength = {18} style={styles.box} > </TextInput>
          <TextInput placeholder= 'Cedula Ciudadania' placeholderTextColor = 'white' maxLength = {10} style={styles.box} > </TextInput>     
       </ImageBackground>

    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        height:632,
         width:355
      },
      box :{
        alignItems : 'center',
        justifyContent: 'center',
        borderWidth : 1,
        borderRadius : 40,
        borderColor:'blue',
        width:180,
        marginTop : 10
      },


});

export default Citas_Ingreso;