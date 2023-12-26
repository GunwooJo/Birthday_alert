import {Button, Image, Text, View} from 'react-native';
import React, {useState} from 'react';

type CatProps = {
  name: string;
};

export default function CuteCat(props: CatProps) {
  const [age, setAge] = useState(0);

  return (
    <View>
      <Text>귀여운 고양이 {props.name}</Text>
      <Text>나이: {age}</Text>
      <Button
        onPress={() => {
          setAge(age + 1);
        }}
        title={age >= 5 ? '나이 충분히 먹었다.' : '나이먹기'}
        disabled={age >= 5 ? true : false}
      />

      <Image
        source={{
          uri: 'https://yt3.ggpht.com/mt_w5lfHyy0tp0P7IjWA4LA-hnUtmr0cgJFrBCDzXCDcAoIxzeE9qAK5s8A3-ohi5k-buGbOODSXAg=s1600-c-fcrop64=1,00003800ffffc7ff-nd-v1',
        }}
        style={{width: 200, height: 200}}
      />
    </View>
  );
}
