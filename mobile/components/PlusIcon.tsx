import { View, Image } from "react-native";
import Plus from "../assets/images/plus.png";
import styles from "../assets/styles/home.styles";

const PlusIcon = () => {
  return (
    <View style={styles.plusContainer}>
      <Image source={Plus} style={{ width: 18, height: 18 }} />
    </View>
  );
};

export default PlusIcon;
