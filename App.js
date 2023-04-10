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
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import CompanyDetails from "./src/screens/CompanyDetails";
import ProfileUpdate from "./src/screens/ProfileUpdate";
import Analytics from "./src/screens/Analytics";
import Loyalty from "./src/screens/Loyalty";

export default function App() {
  return <Loyalty />;
}

const styles = StyleSheet.create({});
