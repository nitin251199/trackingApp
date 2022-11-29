import React, {useEffect} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import AnimatedMarkers from './src/screens/AnimatedMarkers';
import {LoginScreen} from './src/screens/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RequisitionForm from './src/screens/RequisitionForm';
import CustomerFeedback from './src/screens/CustomerFeedback';
import NoiseForm from './src/screens/NoiseForm';
import WaterForm from './src/screens/WaterForm';
import AAQMForm from './src/screens/AAQMForm';
import EmissionForm from './src/screens/EmissionForm';

const styles = StyleSheet.create({
  defaultFontFamily: {
    fontFamily: 'Poppins-Regular',
  },
});

const customProps = {style: styles.defaultFontFamily};

// To set default font family, avoiding issues with specific android fonts like OnePlus Slate
function setDefaultFontFamily() {
  const TextRender = Text.render;
  const initialDefaultProps = Text.defaultProps;
  Text.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  };
  Text.render = function render(props) {
    let oldProps = props;
    props = {...props, style: [customProps.style, props.style]};
    try {
      return TextRender.apply(this, arguments);
    } finally {
      props = oldProps;
    }
  };
}

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      setDefaultFontFamily();
    }
  }, []);

  const isLoggedIn = false;

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={!isLoggedIn ? 'Login' : null}
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            animationTypeForReplace: 'pop',
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Map" component={AnimatedMarkers} />
          <Stack.Screen name="Requisition" component={RequisitionForm} />
          <Stack.Screen name="Feedback" component={CustomerFeedback} />
          <Stack.Screen name="Noise" component={NoiseForm} />
          <Stack.Screen name="Water" component={WaterForm} />
          <Stack.Screen name="AAQM" component={AAQMForm} />
          <Stack.Screen name="Emission" component={EmissionForm} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
