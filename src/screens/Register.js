import {
  Alert,
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
import EmailAddress from "../organisms/EmailAddress";
import Password from "../organisms/Password";
import ReenterPassword from "../organisms/ReenterPassword";
import OrgAddress from "../organisms/OrgAddress";
import Phone from "../organisms/Phone";
import StoreNameDropdown from "../organisms/StoreNameDropdown";
import AddStoreModal from "./AddStoreModal";
import axios from "axios";
import City from "../organisms/City";
import Country from "../organisms/Country";
import EirCode from "../organisms/EirCode";
import AddressLine2 from "../organisms/AddressLine2";

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [store, setStore] = useState(null);
  const [orgAddress, setOrgAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [email, setEmail] = useState("sample text");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [re_enterPassword, setRe_enterPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [eircode, setEircode] = useState("");

  const [show_AddStoreModal, setShow_AddStoreModal] = useState(false);
  const [reset, setReset] = useState(false);
  const [orgList, setOrgList] = useState(null);
  const getStoreName = () => {
    axios
      .get(`${BASE_URL}/organizationList`)
      .then((response) => {
        setOrgList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerUser = () => {
    try {
      if (!firstName) {
        throw new Error("Please Enter First name");
      }
      if (!lastName) {
        throw new Error("Please Enter last Name");
      }
      if (!store) {
        throw new Error("Please Enter store");
      }
      if (!orgAddress) {
        throw new Error("Please Enter Organization address");
      }
      if (!email) {
        throw new Error("Please enter Email ");
      }
      if (!phone) {
        throw new Error("Please Enter phone");
      }
      if (!password) {
        throw new Error("Please Enter password");
      }
      if (!country) {
        throw new Error("Please Enter country");
      }
      if (!eircode) {
        throw new Error("Please Enter EIRCODE");
      }
      if (password.length < 6) {
        throw new Error("Password should be at least 6 characters long");
      }
      if (password !== re_enterPassword) {
        throw new Error("Passwords do not match");
      }

      axios
        .post(`${BASE_URL}/cloverAppUserRegister`, {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          phone: phone,
          mainOrId: store,
          orAddress: orgAddress,
          address2: address2,
          city: city,
          country: country,
          zipCode: eircode,
        })
        .then((response) => {
          console.log(response);
          if (response.data.data) {
            setReset(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  useEffect(() => {
    getStoreName();
  }, [reset]);
  useEffect(() => {
    if (reset) {
      setFirstName(null);
      setLastName("");
      setStore(null);
      setOrgAddress("");
      setAddress2("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRe_enterPassword("");
      setCity("");
      setCountry("");
      setEircode("");
      setReset(false); // set reset back to false
    }
  }, [reset]);
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
                <FirstNameLastName
                  firstName={firstName}
                  lastName={lastName}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                />
                <StoreNameDropdown
                  show_AddStoreModal={show_AddStoreModal}
                  setShow_AddStoreModal={setShow_AddStoreModal}
                  orgList={orgList}
                  setOrgList={setOrgList}
                  setStore={setStore}
                />
                <OrgAddress
                  orgAddress={orgAddress}
                  setOrgAddress={setOrgAddress}
                />
                <AddressLine2 address2={address2} setAddress2={setAddress2} />
                <EmailAddress email={email} setEmail={setEmail} />
                <Phone phone={phone} setPhone={setPhone} />
                <Password password={password} setPassword={setPassword} />
                <ReenterPassword
                  re_enterPassword={re_enterPassword}
                  setRe_enterPassword={setRe_enterPassword}
                />
                <City city={city} setCity={setCity} />
                <Country country={country} setCountry={setCountry} />
                <EirCode eircode={eircode} setEircode={setEircode} />
                <SolidGreenButton
                  width={"85%"}
                  height={"4%"}
                  style={{ alignSelf: "center" }}
                  onPress={registerUser}
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
