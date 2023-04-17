import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import TabsNavigation from "./TabsNavigation";
import ProfileUpdate from "./screens/ProfileUpdate";
import CompanyDetails from "./screens/CompanyDetails";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Settings from "./screens/Settings";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useStore } from "zustand";
import useAuthStore from "./store";

const DrawerNavigation = (props) => {
  const Drawer = createDrawerNavigator();
  const logout = useStore(useAuthStore, (state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props} style={styles.drawerContent}>
        <DrawerItemList {...props} />
        <TouchableOpacity onPress={handleLogout}>
          <View style={styles.logoutButton}>
            <MaterialCommunityIcons
              name="logout"
              size={24}
              color="white"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      drawerStyle={styles.drawer}
      initialRouteName="Links"
    >
      <Drawer.Screen
        name="Home"
        component={TabsNavigation}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "green" : "white"}
            />
          ),
          drawerLabelStyle: {
            color: "white",
          },
        }}
      />
      <Drawer.Screen
        name="Links"
        component={CompanyDetails}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Entypo name="link" size={24} color={focused ? "green" : "white"} />
          ),
          drawerLabelStyle: {
            color: "white",
          },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name={focused ? "settings" : "settings-outline"}
              size={size}
              color={focused ? "green" : "white"}
            />
          ),
          drawerLabelStyle: {
            color: "white",
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "rgba(18, 31, 39, 1)",
  },
  drawerContent: {
    backgroundColor: "rgba(18, 31, 39, 1)",
  },
  logoutButton: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
  },
});

export default DrawerNavigation;
