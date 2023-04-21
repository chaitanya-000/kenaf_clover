import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
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
import { captureRef } from "react-native-view-shot";

const Receipt = () => {
  const [receivedData, setReceivedData] = useState(null);
  const imageRef = useRef();
  useEffect(() => {
    const getTillId = async () => {
      try {
        const value = await AsyncStorage.getItem("tID");
        if (value !== null) {
          axios
            .post(`${BASE_URL}/TransactionReceipt`, {
              tId: JSON.parse(value),
            })
            .then((response) => {
              setReceivedData(response.data);
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    getTillId();
  }, []);
  return (
    <KeyboardAvoidingView behavior="height">
      <PageContainer>
        <Header>
          <BackButton>
            <Ionicons name="md-arrow-back" size={25} color="white" />
          </BackButton>
        </Header>
        <WhiteRoundedContainer ref={imageRef}>
          <PageContent>
            <View style={styles.container}>
              <View style={styles.receiptHeader}>
                <Text style={styles.shopName}>Shop Receipt</Text>
                <Text>
                  {receivedData ? receivedData[0].mainOrName : "Loading..."}
                </Text>
                <Text>
                  {receivedData ? receivedData[0].orAddress : "Loading..."}
                </Text>
                <Text>
                  {receivedData ? receivedData[1].phone : "Loading..."}
                </Text>
              </View>
              <View style={{ borderWidth: 0.3, marginTop: "10%" }}></View>
              <View style={styles.receiptMain}>
                <View style={styles.receiptHorizontalContainer}>
                  <Text>Taxable</Text>
                  <Text>€ 00.00</Text>
                </View>
                <View style={styles.receiptHorizontalContainer}>
                  <Text>VAT</Text>
                  <Text>00.00 %</Text>
                </View>
                <View style={styles.receiptHorizontalContainer}>
                  <Text style={styles.total}>Total</Text>
                  <Text>
                    €
                    {receivedData
                      ? receivedData.data.Amount / 100
                      : "Loading..."}
                  </Text>
                </View>
                <View
                  style={{ borderWidth: 0.3, width: "100%", marginTop: 10 }}
                ></View>
              </View>
              <View style={styles.receiptFooter}>
                <View style={styles.receiptHorizontalContainer}>
                  <Text>Card Type</Text>
                  <Text>
                    {receivedData ? receivedData.data.cardType : "Loading..."}
                  </Text>
                </View>
                <View style={styles.receiptHorizontalContainer}>
                  <Text>Change</Text>
                  <Text>00.00</Text>
                </View>
              </View>
              <View style={styles.receiptHorizontalContainer}>
                <Text>Paid with card</Text>
              </View>
              <View style={{ borderWidth: 0.3 }}></View>

              <View
                style={
                  ([styles.receiptHorizontalContainer],
                  { alignSelf: "center", marginTop: "4%" })
                }
              >
                <Text
                  onPress={() => {
                    captureRef(imageRef, {
                      format: "png",
                      quality: 0.2,
                    })
                      .then((uri) => {
                        console.log(uri);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  Thank you! Have a nice day{" "}
                </Text>
              </View>
            </View>
          </PageContent>
        </WhiteRoundedContainer>
      </PageContainer>
    </KeyboardAvoidingView>
  );
};

export default Receipt;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: "10%",
    // borderWidth: 1,
  },
  receiptHeader: {
    width: "100%",
    height: "30%",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  shopName: {
    fontSize: 30,
    fontWeight: "600",
  },
  receiptMain: {
    width: "100%",
    height: "23%",
    // borderWidth: 1,
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  receiptHorizontalContainer: {
    padding: "5%",
    width: "100%",
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    fontSize: 22,
    fontWeight: "700",
  },
  receiptFooter: {
    width: "100%",
    height: "20%",
    marginTop: "10%",
    // borderWidth: 1,
  },
});
