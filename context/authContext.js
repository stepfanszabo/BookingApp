import React, { createContext, useState } from "react";
import firebase from "firebase/app";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (email, password, name, username) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;

        const usersRef = firebase.firestore().collection("users");

        usersRef.doc(uid).set({
          id: uid,
          name: name,
          email: email,
          username: username,
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const login = (email, password) => {
    try {
      console.log("login context");
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          const uid = response.user.uid;
          const usersRef = firebase.firestore().collection("users");
          usersRef
            .doc(uid)
            .get()
            .then((firestoreDocument) => {
              if (!firestoreDocument.exists) {
                alert("User does not exist anymore.");
                return;
              }
            })
            .catch((error) => {
              alert(error);
            });
        })
        .catch((error) => {
          alert(error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
