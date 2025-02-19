import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';

const Stack = createStackNavigator();

const CustomAppBar = ({ navigation, back }) => {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} />
      )}
      <Appbar.Content title="MD Nav Demo" />
    </Appbar.Header>
  );
};

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>HomeScreen</Text>
  </View>
);

const SecondScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>SecondScreen</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          header: (props) => <CustomAppBar {...props} navigation={navigation} />,
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
