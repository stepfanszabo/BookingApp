import React, { useContext } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView, TouchableOpacity
} from "react-native";

import { Button, Block, Input, Text } from "../../components";
import { theme } from "../../constants";
import { AuthContext } from "../../context/authContext";

const RegisterScreen = (props) => {
  const [email, setEmail] = React.useState("base@app.hu");
  const [password, setPassword] = React.useState("baseapp");
  const [name, setName] = React.useState("Base App");
  const [username, setUsername] = React.useState("baseApp");
  const [loading, setLoading] = React.useState(false);

  const { register } = useContext(AuthContext);
  const { navigation } = props;

  const handleSignUp = async () => {
    setLoading(true);

    // if (password !== confirmPassword) {
    //   alert("Passwords don't match.")
    //   return
    // }

    if (email != "" && password != "") {
      register(email, password, name, username);
    } else {
      alert("Email or password is empty!");
    }

    setLoading(false);
  };

  return (
    <Block style={styles.signup}>
      <ScrollView>
        <Text h1 bold center>
          Regisztráció
        </Text>
        <Block middle>
          <Input
            email
            label="Email cím"
            style={styles.input}
            defaultValue={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            label="Név"
            style={styles.input}
            defaultValue={name}
            onChangeText={(text) => setName(text)}
          />
          <Input
            label="Felhasználónév"
            style={styles.input}
            defaultValue={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Input
            secure
            label="Jelszó"
            style={styles.input}
            defaultValue={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button gradient onPress={() => handleSignUp()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Regisztráció
              </Text>
            )}
          </Button>
          <Button shadow onPress={() => navigation.goBack()}>
            <Text center semibold>
              Vissza
            </Text>
          </Button>

          <Text gray center>
            Már van felhasználód?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text secondary center>
              Bejelentkezés
            </Text>
          </TouchableOpacity>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center",
    paddingTop: theme.sizes.base * 10,
    paddingBottom: theme.sizes.base * 2,
    paddingHorizontal: theme.sizes.base * 2,
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});
