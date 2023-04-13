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

const EirCode = () => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Eircode</Label>
        <TextInput_Styled />
      </TextInputContainer>
    </InputContainer>
  );
};

export default EirCode;

const styles = StyleSheet.create({});
