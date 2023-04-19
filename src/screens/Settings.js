import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  BackButton,
  WhiteRoundedContainer,
  HeaderTwoButtons,
  StyledScrollView,
  ScrollViewContainer,
  LineDivider,
} from "../../styledComponents";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { height, width } from "../../helperFunction";

const Settings = ({ navigation }) => {
  const [email, setEmail] = useState("sample text");
  return (
    <KeyboardAvoidingView
      style={{ width: width, height: height }}
      behavior="height"
    >
      <View style={{ width: width, height: "100%" }}>
        <HeaderTwoButtons>
          <BackButton>
            <Ionicons name="md-arrow-back" size={25} color="white" />
          </BackButton>
          <TextInput
            style={{
              position: "absolute",
              top: "65%",
              left: "50%",
              fontSize: 19,
              color: "white",
              fontWeight: "700",
            }}
          >
            Settings
          </TextInput>
        </HeaderTwoButtons>
        <View style={styles.HeaderBlueBackground} />
        <WhiteRoundedContainer style={{ position: "absolute", top: "20%" }}>
          <ScrollViewContainer>
            <StyledScrollView
              contentContainerStyle={styles.scrollViewContentContainer}
            >
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => navigation.navigate("ProfileUpdate")}
              >
                <View style={styles.rightIconNameContainer}>
                  <TouchableOpacity style={styles.LeftIcon}>
                    <MaterialCommunityIcons
                      name="account-edit-outline"
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                  <Text style={styles.optionsName}>Account Settings</Text>
                </View>
                <TouchableOpacity style={styles.rightArrowIcon}>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </TouchableOpacity>
              <LineDivider
                style={{ backgroundColor: "#E0E0E0", height: 1, width: "100%" }}
              />
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => navigation.navigate("BankDetails")}
              >
                <View style={styles.rightIconNameContainer}>
                  <TouchableOpacity style={styles.LeftIcon}>
                    <MaterialCommunityIcons
                      name="bank"
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                  <Text style={styles.optionsName}>Bank Details</Text>
                </View>
                <TouchableOpacity style={styles.rightArrowIcon}>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </StyledScrollView>
          </ScrollViewContainer>
        </WhiteRoundedContainer>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    paddingBottom: "17%",
    paddingHorizontal: "3%",
  },
  screenName: {
    fontSize: 25,
    fontWeight: 700,
    marginBottom: "5%",
  },
  HeaderBlueBackground: {
    width: "100%",
    height: "70%",
    position: "absolute",
    top: "-10%",
    left: 0,
    alignSelf: "center",
    backgroundColor: "#121F27",
  },
  optionContainer: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
  },
  LeftIcon: {
    marginRight: 20,
  },
  rightArrowIcon: {
    marginLeft: "30%",
  },
  optionsName: {
    fontSize: 18,
  },
  rightIconNameContainer: {
    width: "60%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
  },
});
