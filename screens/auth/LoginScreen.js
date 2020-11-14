import React, { useContext } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Block, Button, Input, Text } from "../../components";
import { theme } from "../../constants";
import { AuthContext } from "../../context/authContext";

export default function LoginScreen(props) {
  const [email, setEmail] = React.useState("asdasd");
  const [password, setPassword] = React.useState("asdasd");
  const [loading, setLoading] = React.useState(false);
  const { login } = useContext(AuthContext);
  const { navigation } = props;

  function handleLogin() {
    console.log("login");

    Keyboard.dismiss();
    setLoading(true);
    login(email, password);

    setLoading(false);
  }

  return (
    <Block padding={theme.sizes.base * 2}>
      <Block center bottom flex={0.4} padding={theme.sizes.base * 2}>
        <Text h1 center bold>
          Bejelentkezés
        </Text>
      </Block>
      <Block top>
        <Input
          label="Email cím"
          style={styles.input}
          defaultValue={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Jelszó"
          style={styles.input}
          secure
          defaultValue={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button color={theme.colors.primary} onPress={() => handleLogin()}>
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text center semibold white>
              Bejelentkezés
            </Text>
          )}
        </Button>
        <Button shadow onPress={() => navigation.goBack()}>
          <Text center semibold>
            Vissza
          </Text>
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
          <Text center>Elfelejtetted a jelszavad?</Text>
        </TouchableOpacity>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
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
