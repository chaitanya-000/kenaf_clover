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

const ReenterPassword = () => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Re-Enter Password</Label>
        <TextInput_Styled onChange={(value) => console.log(value)} />
      </TextInputContainer>
    </InputContainer>
  );
};

export default ReenterPassword;

const styles = StyleSheet.create({});
