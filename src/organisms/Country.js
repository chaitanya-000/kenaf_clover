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

const Country = () => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Country</Label>
        <TextInput_Styled onChange={(value) => console.log("wwdw")} />
      </TextInputContainer>
    </InputContainer>
  );
};

export default Country;

const styles = StyleSheet.create({});
