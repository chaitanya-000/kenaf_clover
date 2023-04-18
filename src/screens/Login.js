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
} from "../../styledComponents";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { height, width } from "../../helperFunction";
import axios from "axios";
import EmailAddress from "../organisms/EmailAddress";
import Password from "../organisms/Password";
import ReenterPassword from "../organisms/ReenterPassword";
import LoadingSpinner from "../organisms/LoadingSpinner";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuthStore from "../store";
import { useStore } from "zustand";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_enteredPassword, setRe_enteredPassword] = useState("");
  const loading = useStore(useAuthStore, (state) => state.loading);

  // const [loading, setLoading] = useState(false);

  const login = useStore(useAuthStore, (state) => state.login);
  async function handleLogin() {
    await login(email, password, re_enteredPassword);
  }

  return (
    <KeyboardAvoidingView
      style={{ width: width, height: height }}
      behavior="height"
    >
      {loading && <LoadingSpinner loading={loading} />}

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
              <ReenterPassword setRe_enteredPassword={setRe_enteredPassword} />
              <SolidGreenButton
                width={"85%"}
                height={"13%"}
                style={{ alignSelf: "center" }}
                onPress={handleLogin}
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
