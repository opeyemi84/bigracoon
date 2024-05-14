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
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setconfirmNewPassword] = useState();

  const handleResetPassword = () => {
    alert("Demo -- your password will be rest in a few minutes!!!");

    setOldPassword("");
    setNewPassword("");
    setconfirmNewPassword("");
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Password Reset</Text>
      <TextInput
        style={Styles.input}
        placeholder="Enter Old Password"
        secureTextEntry
        value={oldPassword}
        onChangeText={setOldPassword}
      />
      <TextInput
        style={Styles.input}
        placeholder="Enter New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={Styles.input}
        placeholder="Confirm New Password"
        secureTextEntry
        value={confirmNewPassword}
        onChangeText={setconfirmNewPassword}
      />

      <TouchableOpacity
        style={Styles.submitButton}
        onPress={handleResetPassword}
      >
        <Text style={Styles.submitButtonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    borderRadius: 5,
    width: "100%",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
  },
});

export default ForgotPassword;
