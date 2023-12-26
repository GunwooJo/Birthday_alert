import React, { useState } from "react";
import { ScrollView, Text, TextInput, StyleSheet, Button } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

function AddFriends() {

    const [name, setName] = useState<string>('');
    const [birthday, setBirthday] = useState<Date>(new Date());

    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
      });

    const onDateChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || birthday;
        setBirthday(currentDate);
    };

    return (
        <ScrollView>
            <Text>친구정보 입력</Text>
            
            <TextInput  
                style={styles.input}
                value={name}
                onChangeText={(newText: string) => setName(newText)}
                placeholder="친구이름 입력"
            />

            <Text style={styles.input}>생일: {birthday.toLocaleDateString()}</Text>
            
            <DateTimePicker
                value={birthday}
                mode="date"
                display="spinner"
                onChange={onDateChange}
            />
            
        </ScrollView>
    );
}

export default AddFriends;