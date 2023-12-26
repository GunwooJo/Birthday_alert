import React from 'react';
import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import AddFriends from './components/AddFriends';

function App(): React.JSX.Element {
  return (
    <ScrollView>
      <AddFriends/>
    </ScrollView>
  );
}

export default App;
