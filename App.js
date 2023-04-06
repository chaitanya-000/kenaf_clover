import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { width, height } from "./helperFunction";
import Payment from "./src/screens/Payment";
import QuickSale from "./src/screens/QuickSale";

export default function App() {
  return <QuickSale />;
}

const styles = StyleSheet.create({
  PageContainer: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  box: {
    width: "20%",
    height: "20%",
    backgroundColor: "red",
  },
});
