import {
  Alert,
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
  TextInputContainer,
  TextInput_Styled,
  InputContainer,
  Label,
} from "../../styledComponents";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BASE_URL, height, width } from "../../helperFunction";
import axios from "axios";
import EmailAddress from "../organisms/EmailAddress";
import Password from "../organisms/Password";
import ReenterPassword from "../organisms/ReenterPassword";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_enteredPassword, setRe_enteredPassword] = useState("");

  // const sendLoginData = () => {
  //   if (email && password && re_enteredPassword) {
  //     if (password.length >= 6) {
  //       if (password === re_enteredPassword) {
  //         axios
  //           .post(`https://kenaf.ie/cloverAppLoginCheckUsers`, {
  //             email: email,
  //             password: password,
  //           })
  //           .then((response) => {
  //             console.log(response);
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //             alert(error.response.data.message[0]);
  //           });
  //       } else {
  //         Alert.alert("Passwords do not match");
  //       }
  //     } else {
  //       Alert.alert("Password should be at least 6 characters long");
  //     }
  //   } else {
  //     Alert.alert("All fields are necessary. Please enter the credentials");
  //   }
  // };
  const sendLoginData = async () => {
    try {
      if (!email || !password || !re_enteredPassword) {
        throw new Error(
          "All fields are necessary. Please enter the credentials"
        );
      }

      if (password.length < 6) {
        throw new Error("Password should be at least 6 characters long");
      }

      if (password !== re_enteredPassword) {
        throw new Error("Passwords do not match");
      }

      const response = await axios
        .post("https://kenaf.ie/cloverAppLoginCheckUsers", {
          email,
          password,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          Alert.alert(error.response.data.message[0]);
          console.log(error);
        });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

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
              <ScreenName style={styles.screenName}>Login</ScreenName>
              <EmailAddress email={email} setEmail={setEmail} />
              <Password password={password} setPassword={setPassword} />
              <ReenterPassword
                re_enteredPassword={re_enteredPassword}
                setRe_enteredPassword={setRe_enteredPassword}
              />
              <SolidGreenButton
                width={"85%"}
                height={"13%"}
                style={{ alignSelf: "center" }}
                onPress={sendLoginData}
              >
                <Text style={{ color: "white", fontWeight: "700" }}>Login</Text>
              </SolidGreenButton>
            </StyledScrollView>
          </ScrollViewContainer>
        </WhiteRoundedContainer>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

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
