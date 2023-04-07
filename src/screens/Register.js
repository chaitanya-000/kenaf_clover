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
  HeaderTwoButtons,
  StyledScrollView,
  ScrollViewContainer,
} from "../../styledComponents";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { height, responsiveFontSize, width } from "../../helperFunction";

const Register = () => {
  return (
    <KeyboardAvoidingView style={{ width: width, height: height }}>
      <View style={{ width: width, height: "100%" }}>
        <HeaderTwoButtons
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
        </HeaderTwoButtons>
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
          <ScrollViewContainer>
            <StyledScrollView
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
            </StyledScrollView>
          </ScrollViewContainer>
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
  scrollViewContentContainer: {
    paddingBottom: "7%",
  },
});
