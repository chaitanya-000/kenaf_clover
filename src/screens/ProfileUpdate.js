import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  BackButton,
  SolidGreenButton,
  Header,
  PageContainer,
  PageContent,
  WhiteRoundedContainer,
  OutlinedGreenButton,
  OptionsButton,
  HeaderTwoButtons,
  StyledScrollView,
  ScrollViewContainer,
  ScreenName,
  InputContainer,
  SplitContainer,
  Label,
  TextInput_Styled,
} from "../../styledComponents";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { height, responsiveFontSize, width } from "../../helperFunction";
import FirstNameLastName from "../organisms/FirstNameLastName";
import OrgName from "../organisms/OrgName";
import EmailAddress from "../organisms/EmailAddress";
import Password from "../organisms/Password";
import ReenterPassword from "../organisms/ReenterPassword";
import AddressLine1 from "../organisms/AddressLine1";
import AddressLine2 from "../organisms/AddressLine2";
import City from "../organisms/City";
import Country from "../organisms/Country";
import EirCode from "../organisms/EirCode";

const ProfileUpdate = () => {
  const [email, setEmail] = useState("sample text");
  return (
    <KeyboardAvoidingView
      style={{ width: width, height: height }}
      behavior="height"
    >
      <View style={{ width: width, height: "100%" }}>
        <HeaderTwoButtons>
          <BackButton>
            <Ionicons name="md-arrow-back" size={25} color="white" />
          </BackButton>
          <TextInput
            style={{
              position: "absolute",
              top: "65%",
              left: "50%",
              fontSize: 19,
              color: "white",
              fontWeight: "700",
            }}
          >
            Profile
          </TextInput>
        </HeaderTwoButtons>
        <View style={styles.HeaderBlueBackground} />
        <WhiteRoundedContainer style={{ position: "absolute", top: "20%" }}>
          <ScrollViewContainer>
            <StyledScrollView
              contentContainerStyle={styles.scrollViewContentContainer}
            >
              <ScreenName style={styles.screenName}>Profile Update</ScreenName>
              <FirstNameLastName />
              <OrgName />
              <EmailAddress email={email} setEmail={setEmail} />
              <Password />
              <ReenterPassword />
              <AddressLine1 />
              <AddressLine2 />
              <City />
              <Country />
              <EirCode />
              <SolidGreenButton
                width={"85%"}
                height={"5%"}
                style={{ alignSelf: "center" }}
              >
                <Text style={{ color: "white", fontWeight: "700" }}>Save</Text>
              </SolidGreenButton>
            </StyledScrollView>
          </ScrollViewContainer>
        </WhiteRoundedContainer>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ProfileUpdate;

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    paddingBottom: "17%",
  },
  screenName: {
    fontSize: 25,
    fontWeight: 700,
    marginBottom: "5%",
  },
  HeaderBlueBackground: {
    width: "100%",
    height: "70%",
    position: "absolute",
    top: "-10%",
    left: 0,
    alignSelf: "center",
    backgroundColor: "#121F27",
  },
});
