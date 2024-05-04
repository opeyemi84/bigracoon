import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Register = ({ navigation }) => {
  const handleRegister = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fill this form to signup</Text>
      {/* Add form input collection details here */}

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
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
export default Register;
