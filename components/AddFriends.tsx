import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Input, Button, Overlay } from '@rneui/themed';

function AddFriends() {

    const [name, setName] = useState<string>('');
    const [birthday, setBirthday] = useState<Date>(new Date());
    const [overlayVisible, setOverlayVisible] = useState(false);

    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
        button: {
            margin: 10,
        },
      });

    const onDateChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || birthday;
        setBirthday(currentDate);
    };

    const toggleOverlay = () => {
        setOverlayVisible(!overlayVisible);
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

            <Button
                title="알림 지정"
                onPress={toggleOverlay}
                buttonStyle={styles.button}
            />

            <Overlay isVisible={overlayVisible} onBackdropPress={toggleOverlay}>
                <Text>이것이 오버레이다!이것이 오버레이다!이것이 오버레이다!이것이 오버레이다!이것이 오버레이다!</Text>
                <Text>아이브 레이 아니다!</Text>
            </Overlay>

        </ScrollView>
    );
}

export default AddFriends;