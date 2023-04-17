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
  InputContainer,
  Label,
  TextInput_Styled,
  TextInputContainer,
} from "../../styledComponents";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BASE_URL, height, width } from "../../helperFunction";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CompanyDetails = () => {
  const [uId, setUid] = useState(null);
  const [company_Name_Address, setCompany_Name_Address] = useState(null);
  const [tillName, setTillName] = useState("");

  const getUserId = async () => {
    try {
      const value = await AsyncStorage.getItem("uId");
      if (value !== null) {
        setUid(value);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const getCompanyName_Address = () => {
    axios
      .post(`${BASE_URL}/TillGetDetails`, {
        uId: JSON.parse(uId),
      })
      .then((response) => {
        // console.log(response.data.data[0]);
        setCompany_Name_Address(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error.message);
        // Alert.alert(error.message);
      });
  };

  const sendTillName = () => {
    axios
      .post(`${BASE_URL}/TillRegister`, {
        uId: JSON.parse(uId),
        tName: tillName,
      })
      .then((response) => {
        console.log(response);
        Alert.alert(response.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getUserId();
    uId && getCompanyName_Address();
  }, [uId]);
  return (
    <KeyboardAvoidingView
      style={{ width: width, height: height }}
      behavior="height"
    >
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
              <ScreenName style={styles.screenName}>
                Till Registration
              </ScreenName>
              <InputContainer>
                <TextInputContainer>
                  <Label>Company Name</Label>
                  <TextInput_Styled
                    value={company_Name_Address?.mainOrName}
                    editable={false}
                  />
                </TextInputContainer>
              </InputContainer>
              <InputContainer>
                <TextInputContainer>
                  <Label>Company Address</Label>
                  <TextInput_Styled
                    value={`${company_Name_Address?.orAddress} , ${company_Name_Address?.zipCode}`}
                    editable={false}
                  />
                </TextInputContainer>
              </InputContainer>
              <InputContainer>
                <TextInputContainer>
                  <Label>Till Name</Label>
                  <TextInput_Styled
                    onChangeText={(enteredValue) => setTillName(enteredValue)}
                  />
                </TextInputContainer>
              </InputContainer>
              <SolidGreenButton
                width={"85%"}
                height={"13%"}
                style={{ alignSelf: "center" }}
                onPress={sendTillName}
              >
                <Text style={{ color: "white", fontWeight: "700" }}>Link</Text>
              </SolidGreenButton>
            </StyledScrollView>
          </ScrollViewContainer>
        </WhiteRoundedContainer>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CompanyDetails;

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
