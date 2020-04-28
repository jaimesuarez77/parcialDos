import * as React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Citas_Ingreso from './sreens/login';
function HomeScreen({navigation}) {
  return (
    <View style={styles.fondo}>
       <ImageBackground  source= {require('./assets/logoSanitas.jpg')} style={styles.container}>
          <Text>Bienvenido</Text>       
       </ImageBackground>
       <ImageBackground  source= {require('./assets/logo2.jpg')} style={styles.container}>
             
       </ImageBackground>
       

      

       <View style={styles.centerView}>
          <Image source= {require('./assets/sanitasInicio.png')} style={styles.logoInicio}></Image>
         
         
          <Button  title="Asigna Tu Cita" onPress={() => navigation.navigate('Ingreso_Citas')}  />
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
    marginTop:120,
    marginLeft: 30,
    height:250,
    width:315,
    backgroundColor:'white',
    borderRadius: 35
  },
 
  logoInicio:{
    borderRadius:50

  }
});

export default App;

