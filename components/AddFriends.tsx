import React, { useState } from "react";
import { ScrollView, Text, TextInput, StyleSheet } from "react-native";

function AddFriends() {

    const [name, setName] = useState('');

    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
      });

    return (
        <ScrollView>
            <Text>친구정보 입력</Text>
            <TextInput  
                style={styles.input}
                value={name}
                onChangeText={newText => setName(newText)}
                placeholder="친구이름 입력"
            />
        </ScrollView>
    );
}

export default AddFriends;