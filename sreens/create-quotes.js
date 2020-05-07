import  React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

 function Citas_Ingreso({navigation}){
    return(
        <ImageBackground  source= {require('../assets/fondo2.jpg')} style={styles.container}>
          <Text style={styles.tittle}>Bienvenido</Text> 
          <TextInput placeholder= 'Cedula de Ciudadania' placeholderTextColor = 'red' maxLength = {11} style={styles.box} required > </TextInput>
          <TextInput placeholder= 'Nombres Completos' placeholderTextColor = 'white' maxLength = {25} style={styles.box} > </TextInput>  
          <TextInput placeholder= 'Apellidos' placeholderTextColor = 'white' maxLength = {25} style={styles.box} > </TextInput>
          <TextInput placeholder= 'Fecha de Nacimiento' placeholderTextColor = 'white' maxLength = {10} style={styles.box} > </TextInput> 
          <TextInput placeholder= 'Ciudad de Residencia' placeholderTextColor = 'white' maxLength = {18} style={styles.box} > </TextInput>
          <TextInput placeholder= 'Número Celular' placeholderTextColor = 'white' maxLength = {10} style={styles.box} > </TextInput> 
          
          <TouchableHighlight onPress={() => navigation.navigate('Lista de Citas')} style={styles.listButton}>
            <Text>Lista de Citas</Text>
          </TouchableHighlight>
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
      tittle:{
        color:'white',
        fontSize: 30

      },
      listButton:{
        color:'white',
        fontSize: 25
      }


});

export default Citas_Ingreso;