import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  BackButton,
  Header,
  PageContainer,
  PageContent,
  SolidGreenButton,
  WhiteRoundedContainer,
} from "../../styledComponents";
import { Ionicons } from "@expo/vector-icons";
import { responsiveFontSize } from "../../helperFunction";

const PaymentLogs = () => {
  return (
    <PageContainer>
      <Header>
        <BackButton>
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
            <TouchableOpacity style={styles.paymentInfoButton}>
              <View style={styles.transactionTypeIndicatorIcon}>
                <Image
                  source={require("../../images/creditedMoney.png")}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View style={styles.transactionIdAndDate}>
                <Text style={{ fontWeight: "600", fontSize: 17 }}>
                  #723939230
                </Text>
                <Text style={{ color: "rgba(130, 130, 130, 1)", fontSize: 12 }}>
                  23 July 2022, 2:25 PM
                </Text>
              </View>
              <View style={styles.debitCardAndAmount}>
                <Text style={{ fontSize: responsiveFontSize(4) }}>
                  Debit Card
                </Text>
                <Text style={{ fontWeight: "600" }}>$1:00</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <SolidGreenButton
          width={"85%"}
          height={"8%"}
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
    height: "90%",
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
