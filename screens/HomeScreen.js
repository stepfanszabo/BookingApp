import React, { useContext, useState } from "react";
import { View, FlatList, Dimensions, StyleSheet } from "react-native";
import { Button, Text, Circle } from "../components";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "reanimated-bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../context/authContext";

const { width, height } = Dimensions.get("window");

const trainings = [
  {
    id: "1",
    name: "gerinctorna",
    max_capacity: 9,
    size: 1,
  },
  {
    id: "2",
    name: "mélyizom",
    max_capacity: 9,
    size: 1,
  },
  {
    id: "3",
    name: "pilates",
    max_capacity: 9,
    size: 1,
  },
  {
    id: "4",
    name: "gerinctorna",
    max_capacity: 9,
    size: 1,
  },
  {
    id: "5",
    name: "mélyizom",
    max_capacity: 9,
    size: 1,
  },
  {
    id: "6",
    name: "pilates",
    max_capacity: 9,
    size: 1,
  },
  {
    id: "7",
    name: "gerinctorna",
    max_capacity: 9,
    size: 1,
  },
  {
    id: "8",
    name: "mélyizom",
    max_capacity: 9,
    size: 1,
  },
  {
    id: "9",
    name: "pilates",
    max_capacity: 9,
    size: 1,
  },
  {
    id: "10",
    name: "gerinctorna",
    max_capacity: 9,
    size: 1,
  },
  {
    id: "11",
    name: "mélyizom",
    max_capacity: 9,
    size: 1,
  },
  {
    id: "12",
    name: "pilates",
    max_capacity: 9,
    size: 1,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const sheetRef = React.useRef(null);
  const { user, logout } = useContext(AuthContext);

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
        padding: 24,
        elevation: 2,
        backgroundColor:"white"
      }}
    >
      <Text>{item.name}</Text>
      <Text>
        Telítettség: {item.size} / {item.max_capacity}
      </Text>
      <TouchableOpacity onPress={() => console.log("lemondas")}>
        <Text>Lemondás</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, marginTop: 32 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 24,
        }}
      >
        <Text h2>{user.name}</Text>
        <TouchableOpacity onPress={() => logout()}>
          <Text h2 bold>
            Kilépés
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 24 }}>
        <Text h1 bold center>
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
