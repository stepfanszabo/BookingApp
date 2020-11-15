import React, { useEffect, useContext, useState } from "react";
import { View, FlatList, Dimensions, StyleSheet } from "react-native";
import { Button, Text, Circle } from "../components";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "reanimated-bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../context/authContext";
import firebase from "firebase/app";
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();
  const [trainings, setTrainings] = useState([]);
  const { user, setUser, logout } = useContext(AuthContext);

  const getTrainings = async () => {
    const trainingsRef = firebase.firestore().collection("trainings");
    const snapshot = await trainingsRef
      .where("users", "array-contains", user.id)
      .get();
    data = [];
    snapshot.forEach((doc) => {
      data.push(doc.data());
    });

    setTrainings(data);
  };

  const cancel = async (id) => {
    console.log("cancel");
    const trainingsRef = firebase.firestore().collection("trainings")
    let list = await trainingsRef.doc(id).get()

    await trainingsRef.doc(id).update({
      users: list.data().users.filter(u => user.id !== u)
    });
    const userRef = firebase.firestore().collection("users").doc(user.id);
    await userRef.update({
      cancelCount: user.cancelCount + 1
    })
    setUser((await userRef.get()).data())
    getTrainings();
  };

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  useEffect(() => {
    getTrainings();
  }, []);

  const renderTrainingItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 12,
        marginVertical: 6,
        borderWidth: 0,
        height: 75,
        borderRadius: 5,
        justifyContent: "space-between",
        paddingVertical: 24,
        paddingLeft: 24,
        elevation: 2,
        backgroundColor: "white",
      }}
    >
      <Text>
        {item.type} ({item.users.length} / {item.max_capacity})
      </Text>
      <View style={{ width: 100 }}>
        <Text>
          {new Date(item.date.toDate()).toISOString().split("T")[0]}{" "}
          {new Date(item.date.toDate()).toISOString().split("T")[1]}
        </Text>
      </View>
      <Button
        onPress={() => cancel(item.id)}
        style={{
          height: 75,
          borderRadius: 0,
          borderBottomRightRadius: 7,
          borderTopRightRadius: 7,
          width: 85,
          alignItems: "center",
        }}
        color={theme.colors.primary}
      >
        <Text white bold>
          Lemondás
        </Text>
      </Button>
    </View>
  );

  if (!trainings) return <Text>Töltés</Text>;

  return (
    <View style={{ flex: 1, marginBottom: 0, paddingBottom: 0 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 24,
          backgroundColor: "white",
          paddingTop: 48,
          paddingBottom: 16,
          elevation: 5
        }}
      >
        <Text h2>{user.name}</Text>
        <TouchableOpacity onPress={() => logout()}>
          <Text h2 bold>
            Kilépés
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 16, flex: 1 }}>
        <Text h1 bold center style={{ marginBottom: 24 }}>
          Edzéseim
        </Text>
        <FlatList
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={trainings}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderTrainingItem}
        />
      </View>
      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <Text>{user.cancelCount}</Text>
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          elevation: 5,
          backgroundColor: theme.colors.primary,
        }}
      >
        <Button
          color={theme.colors.primary}
          style={{ borderRadius: 0 }}
          onPress={() => navigation.navigate("AddTraining")}
        >
          <Text h3 bold center white>
            Edzésre jelentkezés
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  tripItem: {
    height: 150,
    width: (width / 7) * 4,
    borderColor: "#de4598",
    borderWidth: 1,
    borderRadius: 16,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
    borderRadius: 16,
    padding: 16,
  },
  input: {
    flex: 1,
    height: 40,
    fontWeight: "700",
    borderRadius: 50,
    //borderWidth: 1,
    paddingHorizontal: 8,
    backgroundColor: "white",
    elevation: 5,
  },
});
