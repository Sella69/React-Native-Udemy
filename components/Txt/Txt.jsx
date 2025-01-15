import { Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.style";
const SAMSUNG_A73_RATIO = 0.0012978772496538993;

export function Txt({ children, style, ...restProps }) {
  const fontSize = style?.fontSize || s.txt.fontSize;
  const { height } = useWindowDimensions();

  return (
    <Text
      style={[
        s.txt,
        style,
        {
          fontSize: Math.round(fontSize * SAMSUNG_A73_RATIO * height),
        },
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
}
