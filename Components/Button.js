import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Button = () => {
  return (
    <View style={StyleSheet.container}>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={StyleSheet.text}>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    borderRadius: 5,
    width: "100%",
    padding: 10,
    margin: 15,
    height: 40,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default Button;
