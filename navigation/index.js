import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect, useContext } from "react";

import AuthNavigator from "./AuthNavigator";
import NotFoundScreen from "../screens/NotFoundScreen";
import Loading from "../screens/Loading";
import { AuthContext } from "../context/authContext";
import HomeScreen from "../screens/HomeScreen";
import TripDetailsScreen from "../screens/TripDetailsScreen";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export function Navigation() {
  const { setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            console.log("helloka");
            const userData = document.data();
            setIsLoading(false);
            setUser(userData);
            setIsLoggedin(true);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
      } else {
        setIsLoading(false);
        setIsLoggedin(false);
      }
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={DefaultTheme}>
      {isLoggedin ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TripDetails" component={TripDetailsScreen} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
