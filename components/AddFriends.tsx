import React, { useState } from "react";
import { ScrollView, Text, TextInput, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

function AddFriends() {

    const [name, setName] = useState<string>('');
    const [birthday, setBirthday] = useState<Date>(new Date())

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
                onChangeText={(newText: string) => setName(newText)}
                placeholder="친구이름 입력"
            />

            <Text>생년월일</Text>
            <DateTimePicker 
                value={birthday}
                mode="date"
                display="default"
            />
            
        </ScrollView>
    );
}

export default AddFriends;