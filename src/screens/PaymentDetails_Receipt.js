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
  ButtonText,
  HalfPart,
  Header,
  InformativeFooterText,
  LineDivider,
  LineDividerText_OR,
  PageContainer,
  PageContent,
  SolidGreenButton,
  WhiteRoundedContainer,
} from "../../styledComponents";
import { Ionicons } from "@expo/vector-icons";
import { responsiveFontSize } from "../../helperFunction";
const PaymentDetails_Receipt = () => {
  return (
    <PageContainer>
      <Header>
        <BackButton>
          <Ionicons name="md-arrow-back" size={25} color="white" />
        </BackButton>
      </Header>
      <WhiteRoundedContainer>
        <PageContent>
          <View style={styles.amountAndPaymentStatusContainer}>
            <Text style={styles.amount}>$240:00</Text>
            <Text style={styles.paymentStatus}>Payment Not Closed</Text>
          </View>
          <View style={styles.dateAndTimeContainer}>
            <Text style={styles.dateAndTime}>July 5 2021</Text>
            <View style={styles.separatingDot}></View>
            <Text style={styles.dateAndTime}>15:30 PM</Text>
          </View>
          <View style={styles.detailsReceipt}></View>
          <SolidGreenButton width={"100%"} height={"11%"}>
            <ButtonText>Print Receipt</ButtonText>
          </SolidGreenButton>
          <LineDivider>
            <HalfPart></HalfPart>
            <LineDividerText_OR>OR</LineDividerText_OR>
            <HalfPart></HalfPart>
          </LineDivider>
          <TouchableOpacity>
            <InformativeFooterText>Print to QR code</InformativeFooterText>
          </TouchableOpacity>
        </PageContent>
      </WhiteRoundedContainer>
    </PageContainer>
  );
};

export default PaymentDetails_Receipt;

const styles = StyleSheet.create({
  amountAndPaymentStatusContainer: {
    width: "100%",
    height: "10%",
    justifyContent: "space-between",
    // borderWidth: 1,
  },
  amount: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(38, 174, 96, 1)",
  },
  paymentStatus: {
    fontSize: 11,
    color: "rgba(130, 130, 130, 1)",
    fontWeight: "600",
  },
  dateAndTimeContainer: {
    width: "60%",
    height: 39,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "3%",
    // borderWidth: 1,
  },
  dateAndTime: {
    fontSize: 18,
    fontWeight: "600",
  },
  separatingDot: {
    width: 5,
    aspectRatio: 1,
    backgroundColor: "black",
    borderRadius: 39,
  },
  detailsReceipt: {
    width: "100%",
    height: "45%",
    backgroundColor: "#F6F8FA",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#DEE8EF",
    marginBottom: "10%",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
  },
});
