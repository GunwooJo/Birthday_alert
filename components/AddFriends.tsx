import React, { useState } from "react";
import { ScrollView, Text, TextInput, StyleSheet, Button } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Input, Icon } from '@rneui/themed';

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
            
            <Input
                placeholder='ex) 조건우'
                label='이름'
                onChangeText={(newText: string) => setName(newText)}
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