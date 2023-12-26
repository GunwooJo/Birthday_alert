import React from 'react';
import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import CuteCat from './components/CuteCat';
import PizzaTranslator from './components/PizzaTranslator';

function App(): React.JSX.Element {
  return (
    <ScrollView>
      <PizzaTranslator />
    </ScrollView>
  );
}

export default App;
