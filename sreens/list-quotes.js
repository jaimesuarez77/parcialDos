import  React,{useEffect, useState} from 'react';
import { View, Text, ImageBackground, Button, StyleSheet, TextInput } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';

 function listQuotes({navigation}){
    const [Quotes, setQuotes] = useState([]);
    const fetchQuotes = async ()=>{
        let response = await fetch('');
        let jsonResponse = await response.json();
        setQuotes(jsonResponse.Quotes);
    }
useEffect(()=>{
  fetchQuotes();

},[]);
    const DATA = []
  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

    return(
        <ImageBackground  source= {require('../assets/fondo2.jpg')} style={styles.container}>
          <Text >Lista de Citas</Text> 
          <TouchableHighlight style={styles.createQuotesButton} onPress={()=> navigation.navigate('Ingreso_Citas')}>
              <Text style={styles.buttonTextStyle}> Asignar Cita</Text>
          </TouchableHighlight >
          <FlatList
            data={Quotes}
            renderItem={({item})=><Item  title={item.title}></Item>}
            keyExtractor={item => item.id}
          >


          </FlatList>
         
       </ImageBackground>

    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
       /*  alignItems: 'center',
        justifyContent: 'center', */
        
        height:632,
         width:355,
         flexDirection:'column'
      },
      createQuotesButton:{
        backgroundColor:'white',
        padding: 20,
        alignItems: 'center'

      },
      buttonTextStyle:{
        color: 'black',
        fontSize: 20
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
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 50
      },
      title: {
        fontSize: 32,
      },


});

export default listQuotes;