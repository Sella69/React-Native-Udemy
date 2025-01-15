import { View } from "react-native";
import {
  StyledContainer,
  StyledLabel,
  StyledValue,
  s,
} from "./MeteoAdvanced.style";
import { Txt } from "../Txt/Txt";

export function MeteoAdvanced({ sunrize, sunset, windspeed }) {
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledLabel>{sunrize}</StyledLabel>
        <StyledValue>Sunrise</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>{sunset}</StyledLabel>
        <StyledValue>Sunset</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>{windspeed} km/h</StyledLabel>
        <StyledValue>Wind Speed</StyledValue>
      </StyledContainer>
    </View>
  );
}
