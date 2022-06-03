import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.BORDER_INPUT,
    paddingHorizontal: 12,
    marginVertical: 34,
  },
  textRequired: {
    color: "#FF0000",
  },
  viewText: {
    width: "100%",
    height: 25,
    marginVertical: -30,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
