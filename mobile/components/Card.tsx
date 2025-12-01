import { View } from "react-native";
import homeStyles from "../assets/styles/home.styles";
import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return <View style={homeStyles.card}>{props.children}</View>;
};

export default Card;
