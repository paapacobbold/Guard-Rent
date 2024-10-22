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

const TenantLoginScreen = () => {
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
        <TouchableOpacity style={styles.appleButton}>
          <Ionicons name="chevron-back" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome Tenant</Text>
        <View>
          <TextInput style={styles.input} placeholder="Enter your email" />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
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
        <TouchableOpacity style={styles.forgotPassword}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>

        <LinearGradient
          colors={["#2529F8", "#1215F8", "#009FF5"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.loginButton}
        >
          <TouchableOpacity>
            <Text style={styles.loginButtonText}>Continue</Text>
          </TouchableOpacity>
        </LinearGradient>
        {/* Divider with text */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Or login with</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.appleButton}>
            <Image
              source={require("../assets/apple icon.png")}
              style={styles.appleImage}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.appleButton}>
            <Image
              source={require("../assets/google.png")}
              style={styles.appleImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.accountText}>
          <Text>Don't have account?</Text>
          <TouchableOpacity>
            <Text style={styles.createAccount}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tnc}>
          <Text>By proceeding, you consent to our</Text>
          <TouchableOpacity>
            <Text style={styles.tncText}>
              Terms and Conditions {"\n"} and Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
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
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#CCCCCC",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#747474",
  },
  header: {
    marginTop: 10,
    alignContent: "flex-start",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 100,
    fontFamily: "Times New Roman",
    paddingHorizontal: 15,
    color: "#1F2E33",
  },
  accountText: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 20,
  },
  tnc: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 20,
    marginTop: 60,
    marginRight: 70,
    alignItems: "flex-start",
  },
  tncText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  createAccount: {
    color: "#1215F8",
    fontWeight: "bold",
  },
  forgotPassword: {
    alignSelf: "flex-end",
  },
  appleButton: {
    width: 50,
    height: 40,
    shadowColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,

    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#CCCCCC",
    backgroundColor: "White",
    padding: 8,
    marginBottom: 10,
    color: "blue",
  },
  appleImage: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
    marginBottom: 20,
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

export default TenantLoginScreen;
