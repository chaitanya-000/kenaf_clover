import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
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
import { BASE_URL, responsiveFontSize } from "../../helperFunction";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QuickSale = ({ navigation }) => {
  const [amount, setAmount] = useState(0);
  const [tID, setTID] = useState(null);

  const sendPaymentInputInfo = () => {
    axios
      .post(`${BASE_URL}/stripePost`, {
        number: "4242424242424242",
        exp_month: "12",
        exp_year: "2034",
        cvc: "123",
        amount: amount * 100,
        description: "This is test transaction 1",
        tId: JSON.parse(tID),
      })
      .then((response) => {
        console.log(response);
        console.log(response.status);
        if (response.status === 201) {
          Alert.alert(response.data[0], "", [
            {
              text: "OK",
              onPress: () => navigation.navigate("PaymentDetails_Receipt"),
            },
          ]);
        }
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.response.data.message);
      });
  };

  useEffect(() => {
    const getTillId = async () => {
      try {
        const value = await AsyncStorage.getItem("tID");
        if (value !== null) {
          setTID(value);
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    getTillId();
  }, [tID]);
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
                    onChangeText={(enteredAmount) => setAmount(enteredAmount)}
                  />
                </View>
                <View style={styles.buttonsContainer}>
                  <SolidGreenButton height={"50%"} width={"40%"}>
                    <Text style={{ color: "white", fontWeight: "700" }}>
                      Cash
                    </Text>
                  </SolidGreenButton>
                  <OutlinedGreenButton
                    height={"50%"}
                    width={"40%"}
                    onPress={sendPaymentInputInfo}
                  >
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
