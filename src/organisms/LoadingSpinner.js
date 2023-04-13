import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const LoadingSpinner = ({ loading, setLoading }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
      }}
    >
      <ActivityIndicator size="large" color="green" animating={loading} />
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({});
