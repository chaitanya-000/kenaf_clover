import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabsNavigation from "./TabsNavigation";
import ProfileUpdate from "./screens/ProfileUpdate";
import CompanyDetails from "./screens/CompanyDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={TabsNavigation} />
      <Drawer.Screen name="ProfileUpdate" component={ProfileUpdate} />
      <Drawer.Screen name="CompanyDetails" component={CompanyDetails} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
