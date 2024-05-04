import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("You are signing in as:", { username });
    alert("You are signing in as:", { username });

    // Clear username and Password fields
    setUsername("");
    setPassword("");
  };

  const handleForgotPassword = () => navigation.navigate("ForgotPassword");
  const handleRegister = () => navigation.navigate("Register");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Big Racoon!!!!!!!</Text>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://t4.ftcdn.net/jpg/02/21/13/29/360_F_221132937_6X32xmuAeHgS7x6aYshPEnkuIrswoBQk.jpg",
          }}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Log In</Text>
      {/* <Text>Enter Username:</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      {/* <Text>Enter Password:</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {/* <Button title="Sign In" onPress={handleSignIn} /> */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSignIn}>
        <Text style={styles.submitButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.link}>Register</Text>
      </TouchableOpacity>
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
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
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
  link: {
    marginTop: 10,
    color: "blue",
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

export default SignIn;
