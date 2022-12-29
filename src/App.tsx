import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Config from 'react-native-config';
import StorybookUIRoot from '../storybook';

const App = () => (
  <SafeAreaView>
    <StatusBar barStyle={'light-content'} />
  </SafeAreaView>
);

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUIRoot : App;
