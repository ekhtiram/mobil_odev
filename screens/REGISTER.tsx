import * as React from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import firebase from 'firebase';


import * as GoogleSignIn from 'expo-google-sign-in';


export default function LoginScreen({navigation}) {
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');

  
function succesLogin(){
  navigation.navigate('Root')
}

  async function signInWithEmail() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(()=>succesLogin())
      .catch(error => {
          let errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
              alert("şifre yanlış")
        // navigation.navigate('Login')
          } else {
             
            alert(errorMessage)
        // navigation.navigate('Login')
          }
      });
  }

  React.useEffect(()=>{
    checkitLogin();
  })
  function checkitLogin(){
    firebase.auth().onAuthStateChanged(
      function(user){ 
      if(user){
        navigation.navigate('Root')
        return true;
      }
    }
    )
  }
  return (
    <View style={styles.container}>

      <View style={{justifyContent:'center',backgroundColor: 'white',alignItems:'center',marginBottom:50}} >
        <Text>KAYIT OL</Text>
      </View>

      
      <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="black"
            onChangeText={text => setEmail(text)}/>
        </View>

     <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Şifre..." 
            placeholderTextColor="black"
            onChangeText={text => setPassword(text)}/>
        </View>
        

        
        <TouchableOpacity style={styles.loginBtn} onPress={signInWithEmail}>
          <Text style={styles.loginText}>Kayıt Ol</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.goBack()}>
          <Text style={styles.loginText}>Geri don</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputView:{
    width:"80%",
    backgroundColor:"#E8E8E8",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },inputText:{
    height:50,
    color:"black"
  },container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#A66666",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});
