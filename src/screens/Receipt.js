import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { captureRef } from "react-native-view-shot";
import { ButtonText, SolidGreenButton } from "../../styledComponents";

const Receipt = ({ setShowInvoice, receivedData, tId }) => {
  const imageRef = useRef();

  const handleScreenShot = () => {
    captureRef(imageRef, {
      format: "png",
      quality: 0.2,
    }).then((uri) => {
      console.log(uri);
      const formData = new FormData();
      formData.append("tID", JSON.parse(tId));
      formData.append("Invoice", {
        uri: uri,
        type: "image/png",
        name: "receipt.png",
      });
      fetch("https://kenaf.ie/QRCounter", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.container} ref={imageRef}>
        <View style={styles.receiptHeader}>
          <Text style={styles.shopName}>Shop Receipt</Text>
          <Text>{receivedData ? receivedData[0].mainOrName : "Shop Name"}</Text>
          <Text>{receivedData ? receivedData[0].orAddress : "Address"}</Text>
          <Text>{receivedData ? receivedData[1].phone : "Phone"}</Text>
        </View>
        <View style={{ borderWidth: 0.3, marginTop: "5%" }}></View>
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
              €{receivedData ? receivedData.data.Amount / 100 : "Loading..."}
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
            { alignSelf: "center", marginTop: "4%", marginBottom: "4%" })
          }
        >
          <Text>Thank you! Have a nice day </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <SolidGreenButton
          width={"80%"}
          height={"40%"}
          style={{ alignSelf: "center" }}
          onPress={handleScreenShot}
        >
          <ButtonText>Ok</ButtonText>
        </SolidGreenButton>
        <SolidGreenButton
          width={"80%"}
          height={"40%"}
          style={{ alignSelf: "center" }}
          onPress={() => setShowInvoice(false)}
        >
          <ButtonText>Cancel</ButtonText>
        </SolidGreenButton>
      </View>
    </View>
  );
};

export default Receipt;

const styles = StyleSheet.create({
  parentContainer: {
    width: "85%",
    height: "90%",
    paddingHorizontal: "2%",
    alignSelf: "center",
    marginTop: "6%",
    borderRadius: 30,
    zIndex: 9999,
    backgroundColor: "white",
    position: "absolute",
    justifyContent: "space-around",
  },
  container: {
    width: "100%",
    height: "75%",
    paddingHorizontal: "7%",
    borderWidth: 1,
    alignSelf: "center",
    // marginTop: "1%",
    borderRadius: 30,
    backgroundColor: "#F6F8FA",
    borderColor: "#DEE8EF",

    // top: "2%",
  },
  receiptHeader: {
    width: "100%",
    height: "20%",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "6%",
  },
  shopName: {
    fontSize: 30,
    fontWeight: "600",
  },
  receiptMain: {
    width: "100%",
    height: "20%",
    // borderWidth: 1,
    marginTop: "7%",
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
    height: "15%",
    marginTop: "7%",
    // borderWidth: 1,
  },
  buttonContainer: {
    width: "100%",
    height: "18%",
    justifyContent: "space-around",
    marginBottom: "5%",
    // borderWidth: 1,
  },
});
