import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  BackButton,
  SolidGreenButton,
  WhiteRoundedContainer,
  OptionsButton,
  HeaderTwoButtons,
  StyledScrollView,
  ScrollViewContainer,
  ScreenName,
} from "../../styledComponents";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { height, width } from "../../helperFunction";
import FirstNameLastName from "../organisms/FirstNameLastName";
import OrgName from "../organisms/OrgName";
import EmailAddress from "../organisms/EmailAddress";
import Password from "../organisms/Password";
import ReenterPassword from "../organisms/ReenterPassword";
import OrgAddress from "../organisms/OrgAddress";
import Phone from "../organisms/Phone";
import StoreNameDropdown from "../organisms/StoreNameDropdown";
import AddStoreModal from "./AddStoreModal";

const Register = () => {
  const [email, setEmail] = useState("sample text");
  const [show_AddStoreModal, setShow_AddStoreModal] = useState(true);

  const sendData = () => {
    axios.post(BASE_URL);
  };
  return (
    <>
      <KeyboardAvoidingView
        style={{ width: width, height: height }}
        behavior="height"
      >
        <View
          style={{
            width: width,
            height: "100%",
            opacity: show_AddStoreModal ? 0.1 : 1,
          }}
        >
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
          <WhiteRoundedContainer
            style={{
              position: "absolute",
              top: "25%",
            }}
          >
            <ScrollViewContainer>
              <StyledScrollView
                contentContainerStyle={styles.scrollViewContentContainer}
              >
                <ScreenName style={styles.screenName}>Register</ScreenName>
                <StoreNameDropdown
                  show_AddStoreModal={show_AddStoreModal}
                  setShow_AddStoreModal={setShow_AddStoreModal}
                />
                <FirstNameLastName />
                <OrgName />
                <EmailAddress email={email} setEmail={setEmail} />
                <Password />
                <ReenterPassword />
                <OrgAddress />
                <Phone />
                <SolidGreenButton
                  width={"85%"}
                  height={"6%"}
                  style={{ alignSelf: "center" }}
                >
                  <Text style={{ color: "white", fontWeight: "700" }}>
                    Sign Up
                  </Text>
                </SolidGreenButton>
              </StyledScrollView>
            </ScrollViewContainer>
          </WhiteRoundedContainer>
        </View>
      </KeyboardAvoidingView>
      {show_AddStoreModal && (
        <AddStoreModal
          show_AddStoreModal={show_AddStoreModal}
          setShow_AddStoreModal={setShow_AddStoreModal}
        />
      )}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    paddingBottom: "17%",
  },
  screenName: {
    fontSize: 25,
    fontWeight: 700,
    marginBottom: "5%",
  },
});
