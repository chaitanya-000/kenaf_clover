import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { height, width } from "../../helperFunction";

const SamplePageForTesting = () => {
  return (
    <View
      style={{
        width: width,
        height: height,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity style={{ backgroundColor: "blue" }}>
        <Text>Click me</Text>
      </TouchableOpacity>
      <TextInput style={{ width: 200, height: 50, backgroundColor: "red" }} />
    </View>
  );
};

export default SamplePageForTesting;

const styles = StyleSheet.create({});
