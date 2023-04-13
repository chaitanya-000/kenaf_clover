import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FirstNameLastNameContainer,
  SplitContainer,
  Label,
  TextInput_Styled,
  InputContainer,
  TextInputContainer,
} from "../../styledComponents";

const OrgAddress = () => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Organization Address</Label>
        <TextInput_Styled />
      </TextInputContainer>
    </InputContainer>
  );
};

export default OrgAddress;

const styles = StyleSheet.create({});
