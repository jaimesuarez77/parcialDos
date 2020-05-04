import  React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet, TextInput } from 'react-native';

 function listQuotes({navigation}){
    return(
        <ImageBackground  source= {require('../assets/fondo2.jpg')} style={styles.container}>
          <Text >Lista de Citas</Text> 
          
          <Button  title="Regrese al inicio" onPress={() => navigation.navigate('Inicio')}  />    
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
      }


});

export default listQuotes;