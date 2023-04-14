import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Dropdown = ({ show_AddStoreModal, setShow_AddStoreModal }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    setSearchQuery("");
  };

  const options = ["Mango", "banana", "Berry", "apple", "Oranges"];
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.selectButton}
          onPress={() => setShowOptions(!showOptions)}
        >
          <Text style={styles.selectButtonText}>
            {selectedOption || "Select store"}
          </Text>
          <MaterialIcons
            name={showOptions ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={24}
            color="#333"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={showOptions ? styles.button_DropDownActive : styles.button}
          onPress={() => setShow_AddStoreModal(!show_AddStoreModal)}
        >
          {/* <Entypo name="add-to-list" size={25} color="black" />
           */}
          <Text style={{ fontSize: 14, color: "white", fontWeight: "700" }}>
            Add store
          </Text>
        </TouchableOpacity>
      </View>

      {showOptions && (
        <View style={{ height: "70%", width: "90%" }}>
          <ScrollView
            style={styles.optionsContainer}
            nestedScrollEnabled={true}
          >
            {filteredOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.optionButton}
                onPress={() => handleOptionPress(option)}
              >
                <Text style={styles.optionButtonText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
    // borderWidth: 1,
  },
  selectButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "66%",
  },
  selectButtonText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  optionsContainer: {
    width: "100%",
    maxHeight: 150,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    paddingBottom: 30,
  },
  optionButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  optionButtonText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  searchInput: {
    height: 40,
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    // paddingVertical: 12,
    // paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: "27%",
    height: "84%",
    backgroundColor: "#26AE60",
  },
  button_DropDownActive: {
    // paddingVertical: 12,
    // paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: "27%",
    height: "60%",
    backgroundColor: "#26AE60",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

export default Dropdown;
