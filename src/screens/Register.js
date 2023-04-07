import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import {
  BackButton,
  SolidGreenButton,
  Header,
  PageContainer,
  PageContent,
  WhiteRoundedContainer,
  OutlinedGreenButton,
  OptionsButton,
} from "../../styledComponents";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { height, responsiveFontSize, width } from "../../helperFunction";

const Register = () => {
  return (
    <KeyboardAvoidingView style={{ width: width, height: height }}>
      <View style={{ width: width, height: "100%" }}>
        <Header
          style={{
            // borderWidth: 1,
            zIndex: 12,
            position: "absolute",
            top: 20,
            left: 0,
            alignSelf: "center",
          }}
        >
          <BackButton>
            <Ionicons name="md-arrow-back" size={25} color="white" />
          </BackButton>
          <OptionsButton>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="black"
            />
          </OptionsButton>
        </Header>
        <Image
          source={require("../../images/kenafBackgroundImage.png")}
          style={{
            width: "100%",
            height: "70%",
            position: "absolute",
            top: "-10%",
            left: 0,
            alignSelf: "center",
          }}
          resizeMode="cover"
        />
        <WhiteRoundedContainer style={{ position: "absolute", top: "25%" }}>
          <View
            style={{ width: "100%", height: "65%", backgroundColor: "red" }}
          >
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollViewContentContainer}
            >
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
              <Text>dhdkjs</Text>
            </ScrollView>
          </View>
          <SolidGreenButton
            width={"85%"}
            height={"8%"}
            style={{ alignSelf: "center" }}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>Sign Up</Text>
          </SolidGreenButton>
        </WhiteRoundedContainer>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
    paddingBottom: "12%",
  },
  scrollViewContentContainer: {
    paddingBottom: "10%",
  },
});
