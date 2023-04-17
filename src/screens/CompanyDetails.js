import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
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
import { height, width } from "../../helperFunction";
import axios from "axios";

const CompanyDetails = () => {
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
                Till Registration{" "}
              </ScreenName>
              <InputContainer>
                <TextInputContainer>
                  <Label>Company Name</Label>
                  <TextInput_Styled />
                </TextInputContainer>
              </InputContainer>
              <InputContainer>
                <TextInputContainer>
                  <Label>Company Address</Label>
                  <TextInput_Styled />
                </TextInputContainer>
              </InputContainer>
              <InputContainer>
                <TextInputContainer>
                  <Label>Till Name</Label>
                  <TextInput_Styled
                    editable={false}
                    value={`${"nick"} , ${"afdhsjk"}`}
                  />
                </TextInputContainer>
              </InputContainer>
              <SolidGreenButton
                width={"85%"}
                height={"13%"}
                style={{ alignSelf: "center" }}
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
