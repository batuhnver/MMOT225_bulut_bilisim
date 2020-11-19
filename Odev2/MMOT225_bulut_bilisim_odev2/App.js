import React from 'react';
import {
  StyleSheet,
  View,
  Text,
 
} from 'react-native';

const App= () => {
  return(
    <View style={styles.container}>
      <Text style={styles.txt1}>
        AD: BATUHAN ÜNVER {"\n"}{"\n"}
        YAŞ: 24 {"\n"}   {"\n"}
        LISE: ISTANBUL ANADOLU LISESI{"\n"}{"\n"}
        MEMLEKET:SAKARYA {"\n"}{"\n"}
        {"                   "}IS DENEYIMI{"\n"}{"\n"}
        2012-2015 {"\n"}
        Siber Güvenlik Görevlisi{"\n"}{"\n"}
        2015-2017 {"\n"}
        Veri Yöneticisi {"\n"}{"\n"}
        2017-2019 {"\n"}
        Baş Teknoloji Yöneticisi</Text>
        </View>

  );
 
 };

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent:'center'
  },
  
  txt1: {
    color: 'green',
    marginTop:-100,
    fontSize:25,
    
  },
 
});

export default App;
