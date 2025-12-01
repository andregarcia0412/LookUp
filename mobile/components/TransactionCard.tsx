import { View, Text, ImageSourcePropType, Image } from "react-native";
import styles from "@/assets/styles/home.styles";

type Expense = {
  id: string;
  name: string;
  amount: string;
  category: string;
  description: string;
  date: string;
  user_id: string;
};

type ExpenseList = Expense[];

interface TransactionCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  amount: string;
  date: string;
  icon: ImageSourcePropType;
}

const TransactionCard = (props: TransactionCardProps) => {
  const dateToFormat = new Date(props.date);
  dateToFormat.setMinutes(
    dateToFormat.getMinutes() + dateToFormat.getTimezoneOffset()
  );
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(dateToFormat);

  return (
    <View style={styles.transactionCard}>
      <View>
        <View style={styles.iconTextWrapper}>
          <View style={styles.cardIcon}>
            <Image style={{ width: 24, height: 24 }} source={props.icon} />
          </View>
          <View>
            <Text style={{ color: "#FFF", fontSize: 16 }}>{props.name}</Text>
            <Text style={{ color: "#999" }}>{formattedDate}</Text>
          </View>
        </View>
      </View>

      <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 16 }}>
        {Number(props.amount).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </Text>
    </View>
  );
};

export default TransactionCard;
