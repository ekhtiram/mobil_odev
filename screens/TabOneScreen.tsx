import * as React from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import firebase from 'firebase'

export default function TabOneScreen({navigation}) {
  
  function signOut(){
    navigation.navigate('Login')
    firebase.auth().signOut();
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <Text style={styles.text}></Text>
      <Text style={styles.title}>İş İlanları:</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableOpacity style={styles.loginBtn} onPress={signOut}>  
      <Text style={styles.text}>Bulunan sonuçlar...</Text>
      <Text style={styles.text}></Text>
      <Text style={styles.title1}>İngilizce Öğretmeni:   5000TL           </Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>Konum       :        Sakarya Üniversitesi</Text>
      <Text style={styles.text}>İş tecrübesi:       En az 2 sene</Text>
      <Text style={styles.text}></Text>
      <Text style={styles.title3}> Tercüman:  10.000TL             </Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>Konum       :        Britanya Konsolosluğu</Text>
      <Text style={styles.text}>İş tecrübesi:       En az 5 sene</Text>
      <Text style={styles.text}></Text>
      <Text style={styles.title3}> Tercüman:   8.000TL    </Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>Konum       :        Britanya Konsolosluğu</Text>
      <Text style={styles.text}>İş tecrübesi:       En az 3 sene</Text>
      <Text style={styles.text}></Text>
      <Text style={styles.title3}> Tercüman:   15.000TL    </Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>Konum       :        Amerika Konsolosluğu</Text>
      <Text style={styles.text}>İş tecrübesi:       En az 5 sene</Text>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Text style={styles.loginText}>                          Çıkış</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  title1: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  title3: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    color: 'green',
},
loginText: {
  fontSize: 22,
  color: 'red',
},
  separator: {
    marginVertical: 25,
    height: 1,
    width: '80%',
  },
});
