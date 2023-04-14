import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
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
import { BASE_URL, height, width } from "../../helperFunction";
import FirstNameLastName from "../organisms/FirstNameLastName";
import OrgName from "../organisms/OrgName";
import EmailAddress from "../organisms/EmailAddress";
import Password from "../organisms/Password";
import ReenterPassword from "../organisms/ReenterPassword";
import OrgAddress from "../organisms/OrgAddress";
import Phone from "../organisms/Phone";
import StoreNameDropdown from "../organisms/StoreNameDropdown";
import AddStoreModal from "./AddStoreModal";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [mainOrId, setMainOrId] = useState("");
  const [orAddress, setOrAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [email, setEmail] = useState("sample text");
  const [show_AddStoreModal, setShow_AddStoreModal] = useState(false);
  const [orgList, setOrgList] = useState(null);
  const [store, setStore] = useState(null);

  const getStoreName = () => {
    axios
      .get(`${BASE_URL}/organizationList`)
      .then((response) => {
        console.log(response);
        setOrgList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getStoreName();
  }, []);
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
                <FirstNameLastName />
                <StoreNameDropdown
                  show_AddStoreModal={show_AddStoreModal}
                  setShow_AddStoreModal={setShow_AddStoreModal}
                  orgList={orgList}
                  setOrgList={setOrgList}
                  setStore={setStore}
                />
                <OrgAddress />
                {/* <OrgName /> */}
                <EmailAddress email={email} setEmail={setEmail} />
                <Phone />
                <Password />
                <ReenterPassword />
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
          getStoreName={getStoreName}
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
