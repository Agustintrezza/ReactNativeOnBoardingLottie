import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../utils/asyncStorage";

const { width, height } = Dimensions.get("window");

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Home");
    setItem("onboarded", "1");
  };

  const doneButton = ({ onPress }) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Done</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 25 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View>
                <LottieView
                  style={styles.lottie2}
                  source={require("../assets/animations/meditation.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: (
              <View>
                <Text style={styles.appTitle}>Savasana APP</Text>
                <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle} numberOfLines={null}>
                    Guided Meditations, Yoga Asanas, Mantras, Lectures and more.
                  </Text>
                </View>
              </View>
            ),
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View>
                <LottieView
                  style={styles.lottie2}
                  source={require("../assets/animations/meditation2.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: (
              <View>
                <Text style={styles.appTitle2}>10 guided meditations</Text>
                <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle2} numberOfLines={null}>
                    Powerfull meditations to calm the mind.
                  </Text>
                </View>
              </View>
            ),
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View>
                <LottieView
                  style={styles.lottie2}
                  source={require("../assets/animations/animation.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: (
              <View>
                <Text style={styles.appTitle3}>
                  Yoga Asanas, lectures and more.
                </Text>
                <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle3} numberOfLines={null}>
                    Yoga Asanas, lectures and more.
                  </Text>
                </View>
              </View>
            ),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  lottie2: {
    width: width * 0.9,
    height: width,
    marginBottom: 70,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    padding: 25,
  },
  appTitle: {
    marginTop: -150,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#1d7e8d",
  },
  subtitleContainer: {
    height: 60,
  },
  subtitle: {
    fontSize: 23,
    textAlign: "center",
    paddingHorizontal: 20,
    color: "#195761",
  },
  name: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    color: "black",
    marginTop: 35,
  },
  subtitle2: {
    fontSize: 25,
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    fontWeight: "bold",
    color: "#195761",
  },
  appTitle2: {
    marginTop: -120,
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 37,
    fontWeight: "bold",
    color: "#2d0070",
  },
  subtitleContainer: {
    height: 60,
  },
  subtitle2: {
    fontSize: 23,
    textAlign: "center",
    paddingHorizontal: 60,
    color: "#e2cfff",
  },
  subtitle22: {
    fontSize: 25,
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    fontWeight: "bold",
    color: "#195761",
  },
  appTitle3: {
    marginTop: -70,
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 37,
    fontWeight: "bold",
    color: "#febf36",
  },
  subtitle3: {
    fontSize: 23,
    textAlign: "center",
    paddingHorizontal: 60,
    color: "#a88333",
  },
});

export default OnBoardingScreen;
