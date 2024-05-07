import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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
  //state variables to store form inputs, errors, and form validity
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Trigger form validation when username and password changes
    validateSignIn();
  }, [username, password]);

  const validateSignIn = () => {
    let errors = {};

    // Validate username field
    if (!username) {
      errors.username = "Username is required";
    }

    // Validate Password
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSignIn = () => {
    if (isFormValid) {
      console.log(`Welcome, you are logged in as ${username}`);
      alert(`You are signing in as: ${username}`);
    } else {
      console.log("Sign in has errors.");
      alert("Username and Password are required.");
    }

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
      <TouchableOpacity
        style={styles.submitButton}
        // disabled={!isFormValid}
        onPress={handleSignIn}
      >
        <Text style={styles.submitButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.link}>Not a member? Register Here</Text>
      </TouchableOpacity>

      {/* Display error messages */}
      {Object.values(errors).map((error, index) => (
        <Text key={index} style={styles.error}>
          {error}
        </Text>
      ))}
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
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 12,
  },
});

export default SignIn;
