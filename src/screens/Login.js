import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
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

const Login = ({ navigation }) => {
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
              <View style={styles.footer}>
                <Text style={styles.dont_Have_An_Account}>
                  Don’t have an account?
                </Text>

                <TouchableOpacity
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text style={styles.RegisterNow}>Register Now</Text>
                </TouchableOpacity>
              </View>
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
  footer: {
    alignItems: "center",
    marginTop: "10%",
    // borderWidth: 1,
  },
  dont_Have_An_Account: {
    color: "rgba(130, 130, 130, 1)",
  },
  RegisterNow: {
    color: "rgba(38, 174, 96, 1)",
    fontWeight: "600",
  },
});
