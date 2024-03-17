import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Fragment, useState} from 'react';

interface MyCompProps {
  title: string;
  btnTitle: string;
  onPress: () => any;
}

const MyComp = ({title, btnTitle, onPress}: MyCompProps) => {
  const [data, setData] = useState<any>();

  const handleOnPress = async () => {
    const result = await onPress();
    setData(result);
  };
  return (
    <View style={{marginHorizontal: 20}}>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 22, color: 'dodgerblue', fontWeight: '900'}}>
          {title}
        </Text>
        <Pressable onPress={handleOnPress} style={styles.btn}>
          <Text style={styles.btnTxt}>{btnTitle}</Text>
        </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: '100%', maxHeight: 250, minHeight: 100}}>
        {data && <Text>{JSON.stringify(data, null, 2)}</Text>}
      </ScrollView>
    </View>
  );
};

export {MyComp};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
  },
  btnTxt: {
    fontSize: 17,
    color: 'white',
  },
});
