import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import {
  FirstNameLastNameContainer,
  SplitContainer,
  Label,
  TextInput_Styled,
  InputContainer,
  TextInputContainer,
} from "../../styledComponents";

const Password = () => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Password</Label>
        <TextInput_Styled textContentType="password" secureTextEntry />
      </TextInputContainer>
    </InputContainer>
  );
};

export default Password;

const styles = StyleSheet.create({});
