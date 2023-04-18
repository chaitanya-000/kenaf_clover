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
import TillNameDropdown from "../organisms/TillNameDropdown";
import AddTillModal from "./AddTillModal";

const CompanyDetails = ({ navigation }) => {
  const [uId, setUid] = useState(null);
  const [company_Name_Address, setCompany_Name_Address] = useState(null);
  const [tillName, setTillName] = useState("");
  const [show_AddTillModal, setShow_AddTillModal] = useState(false);
  const [tillList, setTillList] = useState(null);
  const [tillID, setTillID] = useState(null);
  const [tillExists, setTillExists] = useState(false);
  const [storedTillID, setStoredTillID] = useState(null);

  const checkIfTillExists = async () => {
    try {
      const value = await AsyncStorage.getItem("tID");
      if (value !== null) {
        console.log("Till Exists-", JSON.parse(value));
        setTillExists(false);
        setStoredTillID(value);
      } else {
        console.log("Till doesn't exist");
        setTillExists(true);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const linkTill = () => {
    axios
      .post(`${BASE_URL}/LinkTill`, {
        tID: tillID,
      })
      .then((response) => {
        // console.log(response);
        Alert.alert(response.data.data, "", [
          {
            text: "Ok",
            onPress: () => {
              navigation.navigate("Home");
              checkIfTillExists();
            },
          },
        ]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getTillNameList = () => {
    axios
      .post(`${BASE_URL}/GetTillList`, {
        uId: JSON.parse(uId),
      })
      .then((response) => {
        // console.log("Till List -", response.data.data);
        setTillList(response.data.data);
      })
      .catch((error) => {
        console.log("getTillNameList", error);
      });
  };

  const getUserId = async () => {
    try {
      const value = await AsyncStorage.getItem("uId");
      if (value !== null) {
        setUid(value);
        uId &&
          axios
            .post(`${BASE_URL}/TillGetDetails`, {
              uId: JSON.parse(value),
            })
            .then((response) => {
              // console.log(response.data.data);
              setCompany_Name_Address(response.data.data[0]);
            })
            .catch((error) => {
              console.log("getUserId", error.message);
              Alert.alert(error.message);
            });
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUserId();
    uId && getTillNameList();
    checkIfTillExists();
  }, [uId, storedTillID]);
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

            opacity: show_AddTillModal ? 0.1 : 1,
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
            <BackButton onPress={() => navigation.navigate("Home")}>
              <Ionicons name="md-arrow-back" size={25} color="white" />
            </BackButton>
            <OptionsButton
            // onPress={checkIfTillExists}
            >
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
                      value={
                        company_Name_Address
                          ? company_Name_Address?.mainOrName
                          : "Loading..."
                      }
                      editable={false}
                    />
                  </TextInputContainer>
                </InputContainer>
                <InputContainer>
                  <TextInputContainer>
                    <Label>Company Address</Label>
                    <TextInput_Styled
                      value={
                        company_Name_Address
                          ? `${company_Name_Address?.orAddress},${company_Name_Address?.zipCode}`
                          : "Loading..."
                      }
                      editable={false}
                    />
                  </TextInputContainer>
                </InputContainer>

                {tillExists && (
                  <>
                    <Label style={{ marginBottom: 10 }}>
                      Select till / Add till
                    </Label>

                    <TillNameDropdown
                      show_AddTillModal={show_AddTillModal}
                      setShow_AddTillModal={setShow_AddTillModal}
                      tillList={tillList}
                      setTillList={setTillList}
                      // till={till}
                      setTillName={setTillName}
                      getTillNameList={getTillNameList}
                      tillID={tillID}
                      setTillID={setTillID}
                    />
                  </>
                )}

                {tillExists && (
                  <SolidGreenButton
                    width={"85%"}
                    height={"13%"}
                    style={{ alignSelf: "center" }}
                    onPress={linkTill}
                  >
                    <Text style={{ color: "white", fontWeight: "700" }}>
                      Link
                    </Text>
                  </SolidGreenButton>
                )}
                {!tillExists && (
                  <InputContainer>
                    <TextInputContainer>
                      <Label>Till ID</Label>
                      <TextInput_Styled
                        value={JSON.parse(storedTillID)}
                        editable={false}
                      />
                    </TextInputContainer>
                  </InputContainer>
                )}
              </StyledScrollView>
            </ScrollViewContainer>
          </WhiteRoundedContainer>
        </View>
      </KeyboardAvoidingView>
      {show_AddTillModal && (
        <AddTillModal
          getTillNameList={getTillNameList}
          show_AddTillModal={show_AddTillModal}
          setShow_AddTillModal={setShow_AddTillModal}
          uId={uId}
          tillName={tillName}
          setTillName={setTillName}
        />
      )}
    </>
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
