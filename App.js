import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Navigation } from "./navigation";
import Loading from "./screens/Loading";
import { LogBox } from "react-native";

import firebase from "firebase/app";
import { AuthProvider } from "./context/authContext";

var firebaseConfig = {
  apiKey: "AIzaSyCL1rCTZ2gloeCpMPkNs8li3LcYff5A0n8",
  authDomain: "booking-app-9e35f.firebaseapp.com",
  databaseURL: "https://booking-app-9e35f.firebaseio.com",
  projectId: "booking-app-9e35f",
  storageBucket: "booking-app-9e35f.appspot.com",
  messagingSenderId: "534022322182",
  appId: "1:534022322182:web:aa70c4bf9100595d486b87",
  measurementId: "G-6BXESJTW80"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Navigation />
        {/* <StatusBar /> */}
      </AuthProvider>
    </SafeAreaProvider>
  );
}
