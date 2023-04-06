import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const responsiveFontSize = (percentage) => {
  const fontSize = (percentage / 100) * Math.min(width, height);
  return Math.round(fontSize);
};
