/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

const App = () => {
  console.log(Dimensions.get('screen').width);

  useEffect(() => {
    console.log('hello');
    SplashScreen.hide();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text
        onPress={() =>
          console.trace(
            'fhdsg......................................................................................usid',
          )
        }>
        ghd
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
