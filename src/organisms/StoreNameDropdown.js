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

const { width } = Dimensions.get("window");

const Dropdown = ({}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    setSearchQuery("");
  };

  const options = [
    "Mango",
    "banana",
    "Berry",
    "apple",
    "Oranges",
    "Mango",
    "banana",
    "Berry",
    "apple",
    "Oranges",
  ];
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Text style={styles.selectButtonText}>
          {selectedOption || "Select an option"}
        </Text>
        <MaterialIcons
          name={showOptions ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="#333"
        />
      </TouchableOpacity>
      {showOptions && (
        <View style={{ height: "70%", width: "90%", backgroundColor: "red" }}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search options"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />

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
  selectButton: {
    width: width * 0.8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
  },
  selectButtonText: {
    fontSize: 20,
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
});

export default Dropdown;
