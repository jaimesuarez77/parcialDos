import * as React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Citas_Ingreso from './sreens/create-quotes';
import listQuotes from './sreens/list-quotes';
import { TouchableHighlight } from 'react-native-gesture-handler';

function HomeScreen({navigation}) {
  return (
    <View style={styles.fondo}>
       <ImageBackground  source= {require('./assets/fondo2.jpg')} style={styles.container}>
             
       </ImageBackground>
      {/*  <ImageBackground  source= {require('./assets/logo2.jpg')} style={styles.container}>
             
       </ImageBackground> */}
       

      

       <View style={styles.centerView}>
          <Image source= {require('./assets/sanitasInicio.png')} style={styles.logoInicio}></Image> 
          <Text>Bienvenido</Text>   
          {/* <TextInput placeholder= 'Nombre de Usuario' placeholderTextColor = 'blue' maxLength = {18} style={styles.box} > </TextInput>
          <TextInput placeholder= 'Cedula Ciudadania' placeholderTextColor = 'blue' maxLength = {10} style={styles.box} > </TextInput>   */}
          <TouchableHighlight onPress={() => navigation.navigate('Ingreso_Citas')} style={styles.InitButton}>
            <Text>Asigna Tu Cita</Text>
          </TouchableHighlight>
          {/* <Button  title="Asigna Tu Cita" onPress={() => navigation.navigate('Ingreso_Citas')} style={styles.logoInicio}  /> */}
        </View> 
  
    </View>
   


  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Ingreso_Citas" component={Citas_Ingreso} />
        <Stack.Screen name="Lista de Citas" component={listQuotes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fondo:{
  flex:1,
  //alignItems: 'center',
  //justifyContent: 'center',
  flexDirection:'column'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35
    
  },
  centerView:{
    flex :1,
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    marginTop:80,
    marginLeft: 25,
    height:250,
    width:315,
    backgroundColor:'white',
    borderRadius: 35
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
 
  InitButton:{
    borderRadius:50,
    fontSize: 30
    

  }
});

export default App;

