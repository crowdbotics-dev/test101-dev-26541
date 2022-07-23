import { CheckBox } from "react-native-elements";
import React from "react";
import { View } from "react-native";

const Untitled2 = () => {
  return <View style={{
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%",
    borderRadius: "50%"
  }}>
      <View style={{
      position: "absolute",
      left: 49.5,
      top: 158,
      height: 36,
      width: 98,
      backgroundColor: "#E4E4E4",
      borderRadius: 0,
      color: "#777777"
    }}></View><CheckBox title="Checkbox Title" style={{
      left: 62,
      top: 287,
      position: "absolute"
    }}></CheckBox></View>;
};

export default Untitled2;