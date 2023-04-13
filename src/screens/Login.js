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
  TextInputContainer,
  TextInput_Styled,
  InputContainer,
  Label,
} from "../../styledComponents";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BASE_URL, height, width } from "../../helperFunction";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendLoginData = () => {
    axios
      .post(`https://kenaf.ie/cloverAppLoginCheckUsers`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => alert(error.response.data.message[0]));
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
              <InputContainer>
                <TextInputContainer>
                  <Label>Email Address</Label>
                  <TextInput_Styled onChangeText={(value) => setEmail(value)} />
                </TextInputContainer>
              </InputContainer>
              <InputContainer>
                <TextInputContainer>
                  <Label>Password</Label>
                  <TextInput_Styled
                    textContentType="password"
                    secureTextEntry
                    onChangeText={(value) => setPassword(value)}
                  />
                </TextInputContainer>
              </InputContainer>
              <InputContainer>
                <TextInputContainer>
                  <Label>Re-Enter Password</Label>
                  <TextInput_Styled
                    textContentType="password"
                    secureTextEntry
                    onChangeText={(value) => console.log(value)}
                  />
                </TextInputContainer>
              </InputContainer>
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
