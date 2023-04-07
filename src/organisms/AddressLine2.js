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

const AddressLine2 = () => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Address Line 2</Label>
        <TextInput_Styled onChange={(value) => console.log(value)} />
      </TextInputContainer>
    </InputContainer>
  );
};

export default AddressLine2;

const styles = StyleSheet.create({});
