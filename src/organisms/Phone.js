import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Label,
  TextInput_Styled,
  InputContainer,
  TextInputContainer,
} from "../../styledComponents";

const Phone = () => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Phone</Label>
        <TextInput_Styled keyboardType="number-pad" />
      </TextInputContainer>
    </InputContainer>
  );
};

export default Phone;

const styles = StyleSheet.create({});
