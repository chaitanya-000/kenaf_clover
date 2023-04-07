import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { width, height } from "./helperFunction";
import Payment from "./src/screens/Payment";
import QuickSale from "./src/screens/QuickSale";
import Refund from "./src/screens/Refund";
import Dashboard from "./src/screens/Dashboard";
import PaymentLogs from "./src/screens/PaymentLogs";
import PaymentDetails_Receipt from "./src/screens/PaymentDetails_Receipt";
import PaymentDetails_Refund from "./src/screens/PaymentDetails_Refund";

export default function App() {
  return <PaymentDetails_Refund />;
}

const styles = StyleSheet.create({});
