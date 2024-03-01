import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
// import Lottie from 'lottie-react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setItem } from '../utils/asyncStorage';


const {width, height} = Dimensions.get('window');

const OnBoardingScreen = () => {

    const navigation = useNavigation();

    const handleDone = () => {
        navigation.navigate('Home');
        setItem('onboarded', '1')
    }

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
        containerStyles={{paddingHorizontal: 25}}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View>
                <LottieView style={styles.lottie2} source={require('../assets/animations/meditation.json')} autoPlay loop />
              </View>
            ),
            title: (
                <View>
                    
                  <Text style={styles.appTitle}>Savasana APP</Text>
                  <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle} numberOfLines={null}>
                      Guided Meditations, Yoga Asanas, Mantras, Lectures and more.
                    </Text>
                    {/* <Text style={styles.name} numberOfLines={null}>
                      Agustin Trezza - Excercise React Native
                    </Text> */}
                    {/* <Text style={styles.subtitle2} numberOfLines={null}>
                        Enjoy it.
                    </Text> */}
                  </View>
                </View>
              ),
            // subtitle: 'Guided Meditations, Yoga Asanas and Mantras',
            // subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#a78bfa',
            image: (
                <View>
                <LottieView style={styles.lottie2} source={require('../assets/animations/meditation2.json')} autoPlay loop />
              </View>
            ),
            title: (
                <View>
                  <Text style={styles.appTitle2}>10 guided meditations</Text>
                  <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle2} numberOfLines={null}>
                        Powerfull meditations to calm the mind.
                    </Text>
                    {/* <Text style={styles.subtitle22} numberOfLines={null}>
                        Enjoy it.
                    </Text> */}
                  </View>
                </View>
              ),
          },
          {
            backgroundColor: '#fef3c7',
            image: (
                <View>
                <LottieView style={styles.lottie2} source={require('../assets/animations/animation.json')} autoPlay loop />
              </View>
            ),
            title: (
                <View>
                    
                  <Text style={styles.appTitle3}>Yoga Asanas, lectures and more.</Text>
                  <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle3} numberOfLines={null}>
                      Yoga Asanas, lectures and more.
                    </Text>
                    {/* <Text style={styles.subtitle2} numberOfLines={null}>
                        Enjoy it.
                    </Text> */}
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
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    backgroundColor: 'white',
  },
  lottie2: {
    width: width*0.9,
    height: width,
    marginBottom: 70
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 25,
  },
  appTitle: {
    marginTop: -150,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 40, // Tamaño de fuente deseado
    fontWeight: 'bold', // Otras propiedades de estilo según necesidad
    color: '#1d7e8d',
    // Otros estilos...
  },
  subtitleContainer: {
    height: 60, // Altura fija deseada para el contenedor del subtítulo
  },
  subtitle: {
    fontSize: 23, // Tamaño de fuente deseado para el subtítulo
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#195761',
    // Otros estilos...
  },
  name: {
    fontSize: 18, // Tamaño de fuente deseado para el subtítulo
    textAlign: 'center',
    paddingHorizontal: 20,
    color: 'black',
    marginTop: 35,
  },
  subtitle2: {
    fontSize: 25, // Tamaño de fuente deseado para el subtítulo
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#195761',
    // Otros estilos...
  },
  appTitle2: {
    marginTop: -120,
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 37, // Tamaño de fuente deseado
    fontWeight: 'bold', // Otras propiedades de estilo según necesidad
    color: '#2d0070',
    // Otros estilos...
  },
  subtitleContainer: {
    height: 60, // Altura fija deseada para el contenedor del subtítulo
  },
  subtitle2: {
    fontSize: 23, // Tamaño de fuente deseado para el subtítulo
    textAlign: 'center',
    paddingHorizontal: 60,
    // color: '#6221c3',
    color: '#e2cfff',
    // Otros estilos...
  },
  subtitle22: {
    fontSize: 25, // Tamaño de fuente deseado para el subtítulo
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#195761',
    // Otros estilos...
  },
  appTitle3: {
    marginTop: -70,
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 37,
    fontWeight: 'bold',
    color: '#febf36',
  },
  subtitle3: {
    fontSize: 23, // Tamaño de fuente deseado para el subtítulo
    textAlign: 'center',
    paddingHorizontal: 60,
    // color: '#6221c3',
    color: '#a88333',
    // Otros estilos...
  },
});

export default OnBoardingScreen;
