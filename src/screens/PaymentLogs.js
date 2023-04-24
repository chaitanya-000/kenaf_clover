import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  BackButton,
  Header,
  PageContainer,
  PageContent,
  SolidGreenButton,
  WhiteRoundedContainer,
} from "../../styledComponents";
import { Ionicons } from "@expo/vector-icons";
import { BASE_URL, responsiveFontSize } from "../../helperFunction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const PaymentLogs = ({ navigation }) => {
  const [paymentInfo, setPaymentInfo] = useState();

  useEffect(() => {
    const getUserId = async () => {
      try {
        const value = await AsyncStorage.getItem("tID");
        if (value !== null) {
          console.log(JSON.parse(value));
          axios
            .post(`${BASE_URL}/PaymentLogs`, {
              tId: JSON.parse(value),
            })
            .then((response) => {
              if (response.data.status === "false") {
                setPaymentInfo(null);
              } else {
                setPaymentInfo(response.data.data);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (e) {
        console.log(e);
      }
    };

    getUserId();
  }, []);
  return (
    <PageContainer>
      <Header>
        <BackButton onPress={() => navigation.navigate("Payment")}>
          <Ionicons name="md-arrow-back" size={25} color="white" />
        </BackButton>
      </Header>
      <WhiteRoundedContainer style={{ alignItems: "center" }}>
        <Text style={styles.screenName}>Payment Logs</Text>
        <View style={{ width: "100%", height: "65%" }}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContentContainer}
          >
            {paymentInfo &&
              paymentInfo.map((eachObj) => {
                const date = new Date(eachObj?.created_at);
                const formattedDate = date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                });

                const formattedTime = date.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                });
                return (
                  <TouchableOpacity style={styles.paymentInfoButton}>
                    <View style={styles.transactionTypeIndicatorIcon}>
                      <Image
                        source={require("../../images/creditedMoney.png")}
                        resizeMode="contain"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </View>
                    <View style={styles.transactionIdAndDate}>
                      <Text style={{ fontWeight: "600", fontSize: 15 }}>
                        #{eachObj.transactionNo}
                      </Text>
                      <Text
                        style={{
                          color: "rgba(130, 130, 130, 1)",
                          fontSize: 13,
                          // marginTop: 15,
                        }}
                      >
                        {formattedDate} {formattedTime}
                      </Text>
                    </View>
                    <View style={styles.debitCardAndAmount}>
                      <Text style={{ fontSize: responsiveFontSize(4) }}>
                        {eachObj.cardType}
                      </Text>
                      <Text style={{ fontWeight: "600" }}>
                        € {eachObj.Amount / 100}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        </View>
        <SolidGreenButton
          width={"85%"}
          height={"10%"}
          style={{ marginTop: "7%" }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>Okay</Text>
        </SolidGreenButton>
      </WhiteRoundedContainer>
    </PageContainer>
  );
};

export default PaymentLogs;

const styles = StyleSheet.create({
  screenName: {
    fontSize: responsiveFontSize(8),
    fontWeight: 700,
    marginBottom: "5%",
    alignSelf: "flex-start",
  },
  scrollView: {
    width: "100%",
    paddingBottom: "12%",
  },
  scrollViewContentContainer: {
    paddingBottom: "10%",
  },
  paymentInfoButton: {
    width: "100%",
    height: 68,
    borderWidth: 1,
    borderColor: "rgba(222, 232, 239, 1)",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
    // paddingHorizontal: 5,
    justifyContent: "center",
    borderRadius: 10,
  },
  transactionTypeIndicatorIcon: {
    width: 55,
    aspectRatio: 1,
    borderRadius: 5,
    // borderWidth: 1,
  },
  transactionIdAndDate: {
    width: "55%",
    height: "100%",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  debitCardAndAmount: {
    width: "25%",
    height: "90%",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
