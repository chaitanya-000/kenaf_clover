import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./screens/Dashboard";
import Payment from "./screens/Payment";
import Loyalty from "./screens/Loyalty";
import Analytics from "./screens/Analytics";

const TabsNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Loyalty" component={Loyalty} />
      <Tab.Screen name="Analytics" component={Analytics} />
    </Tab.Navigator>
  );
};

export default TabsNavigation;

const styles = StyleSheet.create({});
