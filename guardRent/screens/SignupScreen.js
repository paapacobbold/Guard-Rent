import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const SignupScreen = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backIcon}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.headerText}>Create Account</Text>
        <View>
          <TextInput style={styles.input} placeholder="Your Name" />
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Email Address" />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            style={styles.visibleIcon}
            onPress={() => setPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <Ionicons name="eye-off-outline" size={23} color={"#747474"} />
            ) : (
              <Ionicons name="eye-outline" size={23} color={"#747474"} />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            style={styles.visibleIcon}
            onPress={() => setPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <Ionicons name="eye-off-outline" size={23} color={"#747474"} />
            ) : (
              <Ionicons name="eye-outline" size={23} color={"#747474"} />
            )}
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={["#2529F8", "#1215F8", "#009FF5"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.loginButton}
        >
          <TouchableOpacity>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    marginTop: 80,
    backgroundColor: "white",
  },
  backIcon: {
    alignSelf: "flex-start",
    marginTop: 15,
    marginLeft: 10,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    marginTop: 10,
    alignContent: "flex-start",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 100,
    fontFamily: "Times New Roman",
    paddingHorizontal: 15,
    color: "#1F2E33",
  },

  visibleIcon: {
    position: "absolute",
    right: 30,
    top: 20,
  },
  loginButton: {
    width: 380,
    height: 40,
    backgroundColor: "#4b968f",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  loginButtonText: {
    color: "white",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
  },
  input: {
    width: 380,
    margin: 10,
    height: 50,
    borderColor: "#CCCCCC",
    backgroundColor: "#E7EBEF",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 30,
  },
});
export default SignupScreen;
