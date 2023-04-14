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

const ReenterPassword = ({ setRe_enterPassword, re_enterPassword }) => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Re-Enter Password</Label>
        <TextInput_Styled
          textContentType="password"
          secureTextEntry
          onChangeText={(enteredValue) => {
            setRe_enterPassword(enteredValue);
          }}
        />
      </TextInputContainer>
    </InputContainer>
  );
};

export default ReenterPassword;

const styles = StyleSheet.create({});
