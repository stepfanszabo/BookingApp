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
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Block, Button, Text, Circle } from "../components";
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");

const TripDetailsScreen = ({ route, navigation }) => {
  return (
    <Block center middle>
      <Text>details</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Button>
          <Text> Back</Text>
        </Button>
      </TouchableOpacity>
    </Block>
  );
};

export default TripDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: width,
  },
});
