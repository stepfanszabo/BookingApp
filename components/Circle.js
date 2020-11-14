import React from 'react';
import { View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const Circle = (props) => {
    const { margin, name, size } = props;
    
    const blockStyles = [
        margin && { ...{marginHorizontal:margin} },
      ];
    return (
        <View
            style={[{
              backgroundColor: "#FFA086",
              borderRadius: 20,
              width: size,
              height: size,
              justifyContent: "center",
              alignItems: "center",
            }, blockStyles]}
        >
            <Ionicons
              size={size-15}
              style={{ marginBottom: 0, color: "white" }}
              name={name}
            />
        </View>
    );
}

export default Circle;