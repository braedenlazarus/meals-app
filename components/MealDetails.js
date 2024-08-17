import { StyleSheet, View, Text } from "react-native";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  textStyle,
}) {
  return (
    <View style={styles.description}>
      <Text style={textStyle}>{duration} minutes</Text>
      <Text style={textStyle}>{complexity.toUpperCase()}</Text>
      <Text style={textStyle}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 8,
  },
});
