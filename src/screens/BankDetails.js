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

const BankDetails = ({ navigation }) => {
  const [bankName, setBankName] = useState("");
  const [BIC, setBIC] = useState("");
  const [IBAN, setIBAN] = useState("");
  const [uId, setUid] = useState(null);
  const [bankDetailsExist, setBankDetailsExist] = useState(false);
  const [bankDetails, setBankDetails] = useState(null);

  const sendBankDetails = () => {
    try {
      if (!bankName) {
        throw new Error("Bank name cannot be empty");
      }

      if (!IBAN) {
        throw new Error("IBAN  cannot be empty");
      }

      axios
        .post(`${BASE_URL}/RetailBankAccount`, {
          uId: uId,
          bankName: bankName,
          BIC: BIC,
          IBAN: IBAN,
        })
        .then((response) => {
          console.log("Response", response.data.data);
          Alert.alert(response.data.data);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    } catch (error) {
      Alert.alert(error.message);
      console.log("Error", error);
    }
  };

  const getBankDetails = (uId) => {
    axios
      .post(`${BASE_URL}/RetailBankAccountInfo`, {
        uId: JSON.parse(uId),
      })
      .then((response) => {
        console.log(response.data);
        if (!response.data.data.length) {
          setBankDetailsExist(false);
          console.log("User has not entered bank details");
        } else {
          console.log("User has  entered bank details");
          setBankDetailsExist(true);
          setBankDetails(response.data.data[0]);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const getUserId = async () => {
      try {
        const value = await AsyncStorage.getItem("uId");
        if (value !== null) {
          //   console.log(value);
          setUid(JSON.parse(value));
          getBankDetails(value);
        }
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserId();
  }, []);
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
          <BackButton onPress={() => navigation.navigate("Home")}>
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
              <ScreenName style={styles.screenName}>Bank Details</ScreenName>
              {!bankDetailsExist && (
                <>
                  <InputContainer>
                    <TextInputContainer>
                      <Label>Bank Name</Label>
                      <TextInput_Styled
                        onChangeText={(enteredValue) =>
                          setBankName(enteredValue)
                        }
                      />
                    </TextInputContainer>
                  </InputContainer>
                  <InputContainer>
                    <TextInputContainer>
                      <Label>BIC</Label>
                      <TextInput_Styled
                        onChangeText={(enteredValue) => setBIC(enteredValue)}
                      />
                    </TextInputContainer>
                  </InputContainer>
                  <InputContainer>
                    <TextInputContainer>
                      <Label>IBAN</Label>
                      <TextInput_Styled
                        onChangeText={(enteredValue) => setIBAN(enteredValue)}
                      />
                    </TextInputContainer>
                  </InputContainer>
                  <SolidGreenButton
                    width={"85%"}
                    height={"13%"}
                    style={{ alignSelf: "center" }}
                    onPress={sendBankDetails}
                  >
                    <Text style={{ color: "white", fontWeight: "700" }}>
                      Register
                    </Text>
                  </SolidGreenButton>
                </>
              )}
              {bankDetailsExist && (
                <>
                  <InputContainer>
                    <TextInputContainer>
                      <Label>Bank Name</Label>
                      <TextInput_Styled
                        editable={false}
                        value={bankDetails?.bankName}
                      />
                    </TextInputContainer>
                  </InputContainer>
                  <InputContainer>
                    <TextInputContainer>
                      <Label>BIC</Label>
                      <TextInput_Styled
                        editable={false}
                        value={bankDetails?.BIC}
                      />
                    </TextInputContainer>
                  </InputContainer>
                  <InputContainer>
                    <TextInputContainer>
                      <Label>IBAN</Label>
                      <TextInput_Styled
                        editable={false}
                        value={bankDetails?.IBAN}
                      />
                    </TextInputContainer>
                  </InputContainer>
                </>
              )}
            </StyledScrollView>
          </ScrollViewContainer>
        </WhiteRoundedContainer>
      </View>
    </KeyboardAvoidingView>
  );
};

export default BankDetails;

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
