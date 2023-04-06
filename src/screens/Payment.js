import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { width, height } from "../../helperFunction";
import { Ionicons } from "@expo/vector-icons";
import {
  BackButton,
  Header,
  PageContainer,
  PageContent,
  WhiteRoundedContainer,
} from "../../styledComponents";

const Payment = () => {
  return (
    <PageContainer>
      <Header>
        <BackButton>
          <Ionicons name="md-arrow-back" size={25} color="white" />
        </BackButton>
      </Header>
      <WhiteRoundedContainer>
        <PageContent></PageContent>
      </WhiteRoundedContainer>
    </PageContainer>
  );
};

export default Payment;

const styles = StyleSheet.create({
  pageContainer: {
    width: width,
    height: height,
    backgroundColor: "#121F27",
  },
  header: {
    width: "100%",
    height: "13%",
    paddingHorizontal: "6%",
    paddingVertical: "4%",
    justifyContent: "flex-end",
  },
  whiteRoundedContainer: {
    width: "100%",
    height: "90%",
    backgroundColor: "white",
    borderRadius: 34,
    padding: "5%",
  },
  PageContent: {
    width: "100%",
    height: "90%",
    backgroundColor: "red",
  },
  backButton: {
    width: "14%",
    aspectRatio: 1,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DEE8EF1A",
    borderColor: "#FFFFFF",
    borderWidth: 0.3,
  },
});
