import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  BackButton,
  SolidGreenButton,
  Header,
  PageContainer,
  PageContent,
  WhiteRoundedContainer,
  OutlinedGreenButton,
} from "../../styledComponents";
import { Ionicons } from "@expo/vector-icons";
import { responsiveFontSize } from "../../helperFunction";

const QuickSale = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="height">
      <PageContainer>
        <Header>
          <BackButton onPress={() => navigation.navigate("Payment")}>
            <Ionicons name="md-arrow-back" size={25} color="white" />
          </BackButton>
        </Header>
        <WhiteRoundedContainer>
          <PageContent>
            <View style={styles.options}>
              <View style={styles.nameAndOptionsContainer}>
                <Text style={styles.screenName}>Quick Sale</Text>
                <View style={styles.labelAndTextInputContainer}>
                  <Text style={styles.label}>YOUR AMOUNT</Text>
                  <TextInput
                    style={styles.textInput}
                    keyboardType="number-pad"
                  />
                </View>
                <View style={styles.buttonsContainer}>
                  <SolidGreenButton height={"50%"} width={"40%"}>
                    <Text style={{ color: "white", fontWeight: "700" }}>
                      Cash
                    </Text>
                  </SolidGreenButton>
                  <OutlinedGreenButton height={"50%"} width={"40%"}>
                    <Text style={{ color: "#26AE60", fontWeight: "700" }}>
                      Card
                    </Text>
                  </OutlinedGreenButton>
                </View>
              </View>
            </View>
          </PageContent>
        </WhiteRoundedContainer>
      </PageContainer>
    </KeyboardAvoidingView>
  );
};

export default QuickSale;

const styles = StyleSheet.create({
  nameAndOptionsContainer: {
    width: "100%",
    height: "80%",
    // backgroundColor: "red",
    // borderWidth: 1,
  },
  screenName: {
    fontSize: responsiveFontSize(8),
    fontWeight: 700,
    marginBottom: "5%",
  },
  labelAndTextInputContainer: {
    width: "100%",
    height: "24%",
    // borderWidth: 1,
    justifyContent: "space-between",
  },
  label: {
    color: "#828282",
    fontWeight: "500",
    fontSize: responsiveFontSize(3.2),
  },
  textInput: {
    width: "100%",
    height: "70%",
    borderWidth: 1,
    borderColor: "#DEE8EF",
    borderRadius: 10,
    backgroundColor: "#F6F8FA",
    paddingHorizontal: "6%",
    fontSize: responsiveFontSize(7),
  },
  buttonsContainer: {
    width: "100%",
    height: "30%",
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "20%",
  },
  //   options: {
  //     width: "100%",
  //     height: "60%",
  //     borderWidth: ,
  //     display: "flex",
  //     justifyContent: "space-between",
  //   },
});
