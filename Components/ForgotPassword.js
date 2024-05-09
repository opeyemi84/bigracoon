import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ForgotPassword = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Password Reset</Text>
    </View>
  );
};

export default ForgotPassword;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
