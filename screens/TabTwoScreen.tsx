import * as React from 'react';
import { StyleSheet, } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Başvuru Formu: </Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>Başvuracak kişi hakkinda genel bilgiler...</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title2}>Isim: Ekhtiram                             </Text>
      <Text style={styles.title2}>Soyisim: Khudiev                         </Text>
      <Text style={styles.text}></Text>
      <Text style={styles.title3}> Yabancı Diller:                               </Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>Ana dil:                 Türkce</Text>
      <Text style={styles.text}>       Ingilizce:            iyi derecede</Text>
      <Text style={styles.text}>       Rusca:                iyi derecede</Text>
      <Text style={styles.text}></Text>
      <Text style={styles.title3}> İş tecrübesi:                                   </Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>           Amerikan Konsolosluğu:             3 sene                  </Text>
      <Text style={styles.text}>     Sakarya  Üniversitesi:                2 sene          </Text>
      <Text style={styles.text}></Text>
      <Text style={styles.title3}> Referans:                                       </Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>Chris Hemsword:   Porfessor    </Text>
      <Text style={styles.text}>Tony Stark:   Doc.Dr.    </Text>
      <Text style={styles.text}>Scarlet Johanson:   Konsol    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    fontSize: 25,
    color: 'blue',
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  title3: {
    fontSize: 22,
    color: 'blue',
    fontWeight: 'bold',
  },
  text: {
    color: 'green',
},
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
