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

const OrgName = () => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>FIRST NAME</Label>
        <TextInput_Styled onChange={(value) => console.log(value)} />
      </TextInputContainer>
    </InputContainer>
  );
};

export default OrgName;

const styles = StyleSheet.create({});
