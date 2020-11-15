import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { Block, Button, Text, Circle } from "../components";
import { theme } from "../constants";
import DropDownPicker from "react-native-dropdown-picker";

const { width, height } = Dimensions.get("window");

const AddTrainingScreen = ({ route, navigation }) => {
  const [country, setCountry] = useState("uk");
  return (
    <Block>
      <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 24 }}>
        <Text h2 bold>Típusok</Text>
        <DropDownPicker
          items={[
            {
              label: "Gerinc torna",
              value: "usa",
              hidden: true,
            },
            {
              label: "Mélyizom torna",
              value: "uk",
            },
            {
              label: "Pilates torna",
              value: "france",
            },
          ]}
          defaultValue={country}
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: "#fafafa" }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={(item) => setCountry(item.value)}
        />
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
          onPress={() => navigation.goBack()}
        >
          <Text h3 bold center white>
            Mentés
          </Text>
        </Button>
        <Button
          color={theme.colors.secondary}
          style={{ borderRadius: 0, height: 70, marginBottom: 0  }}
          onPress={() => navigation.goBack()}
        >
          <Text h3 bold center white>
            Vissza
          </Text>
        </Button>
      </View>
    </Block>
  );
};

export default AddTrainingScreen;

const styles = StyleSheet.create({
  image: {
    width: width,
  },
});
