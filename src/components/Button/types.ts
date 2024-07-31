import { TouchableOpacityProps } from "react-native";

export type VariantProps = {
  variant?: "primary" | "outline";
};

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: JSX.Element;
} & VariantProps;