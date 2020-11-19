import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableOpacityComponent,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={{
          textAlign: 'center',
          color: 'black',
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 20
        }}>Üyelik Formu</Text>



        <TextInput style={styles.textInp}
          placeholder='Ad'
          placeholderTextColor='black'

        ></TextInput>
        <TextInput style={styles.textInp}
          placeholder='Soyad'
          placeholderTextColor='black'

        ></TextInput>

        <TextInput style={styles.textInp}
          placeholder='Yaş'
          placeholderTextColor='black'

        ></TextInput>

        <TextInput style={styles.textInp}
          placeholder='Email'
          placeholderTextColor='black'

        ></TextInput>

        <TextInput style={styles.textInp}
          placeholder='Şifre'
          placeholderTextColor='black'
          secureTextEntry={true}

        ></TextInput>

        <TextInput style={styles.textInp}
          placeholder='ŞifreTekrar'
          placeholderTextColor='black'
          secureTextEntry={true}

        ></TextInput>

        <TouchableOpacity style={styles.Touchable}
          onPress={() => alert('Kayıt Başarılı..!')}


        ><Text style={{
          color: 'cyan',
          fontSize: 30,
          fontWeight: "bold"
        }}>Kaydet!</Text>


        </TouchableOpacity>

      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInp: {
    width: 300,
    height: 40,
    borderWidth: 2,
    color: 'black',
    borderRadius: 10,
    marginTop: 20
  },
  Touchable: {
    width: 220,
    height: 50,
    backgroundColor: 'black',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',


  }




});


