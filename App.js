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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Loyalty" component={Loyalty} />
      <Tab.Screen name="Analytics" component={Analytics} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
        <Stack.Screen name="CompanyDetails" component={CompanyDetails} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="PaymentDetails_Refund"
          component={PaymentDetails_Refund}
        />
        <Stack.Screen
          name="PaymentDetails_Receipt"
          component={PaymentDetails_Receipt}
        />
        <Stack.Screen name="PaymentLogs" component={PaymentLogs} />
        <Stack.Screen name="QuickSale" component={QuickSale} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
