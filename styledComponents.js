import styled from "styled-components";
import { width, height } from "./helperFunction";
import { Ionicons } from "@expo/vector-icons";

export const PageContainer = styled.SafeAreaView`
  width: ${width}px;
  height: ${height}px;
  background-color: #121f27;
`;
export const Header = styled.View`
  width: 100%;
  height: 13%;
  padding-horizontal: 6%;
  padding-vertical: 4%;
  justify-content: flex-end;
`;
export const BackButton = styled.TouchableOpacity`
  width: 14%;
  aspect-ratio: 1;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(222, 232, 239, 0.1);
  border-width: 1px;
`;
export const WhiteRoundedContainer = styled.View`
  width: 100%;
  height: 90%;
  background-color: white;
  border-radius: 34px;
  padding: 5%;
`;
export const PageContent = styled.View`
  width: 100%;
  height: 90%;
  background-color: red;
`;
