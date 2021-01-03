import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBdD70jxR1eJGQJz8or0-dRZd88FmnBAxY",
  authDomain: "ehtiram-ff3e9.firebaseapp.com",
  projectId: "ehtiram-ff3e9",
  storageBucket: "ehtiram-ff3e9.appspot.com",
  messagingSenderId: "731712255571",
  appId: "1:731712255571:web:7c59c1dcb13394c44778a6"
};

firebase.initializeApp(firebaseConfig)
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
