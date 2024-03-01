import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { removeItem } from "../utils/asyncStorage";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleReset = async () => {
    console.log("entra a la funcion");
    await removeItem("onboarded");
    navigation.push("Onboarding");
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View>
          <LottieView
            style={styles.lottie2}
            source={require("../assets/animations/confetti.json")}
            autoPlay
            loop
          />
        </View>

        <Text style={styles.textTitle}>HomeScreen</Text>

        <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
          <Text style={styles.textButton}>Reset</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Onboarding w/Lottie</Text>
        <Text style={styles.text}>Agustin Trezza - React Native Project</Text>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  lottie2: {
    width: width * 0.9,
    height: width,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    paddingHorizontal: 80,
    textAlign: "center",
  },
  textTitle: {
    fontSize: 30,
    marginBottom: 40,
  },
  resetButton: {
    backgroundColor: "#34d399",
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 60,
  },
  textButton: {
    fontSize: 20,
  },
});

export default HomeScreen;
