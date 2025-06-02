import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Dimensions, TouchableHighlight } from 'react-native';
import ShareImage from './view/ShareImage/ShareImage';
const windowWidth = Dimensions.get('window').width;

export default function App() {
  const [inputText, setInputText] = useState('');
  return (
    // <View style={styles.container}>
    //   <View style={styles.red}><Text>1</Text></View>
    //   <View style={styles.blue}><Text>2</Text></View>
    //   <View style={styles.green}><Text>3</Text></View>
    // </View>
    // <View style={styles.container}></View>
    // <View style={styles.container}>
    //   <TextInput
    //     style={{
    //       height: 40,
    //       borderColor: 'gray',
    //       borderWidth: 1,
    //       width: 300,
    //       marginBottom: 10,
    //     }}
    //     onChangeText={setInputText}
    //     value={inputText}
    //     ></TextInput>
    // </View>

    // <View style={styles.container}>
    //   <TouchableHighlight
    //     activeOpacity={0.6}
    //     underlayColor="#DDDDDD"
    //     onPress={() => {
    //       alert('You tapped the button!');
    //     }}
    //   >
    //     {/* <View style={styles.touchBtn}>Touch</View> */}
    //   </TouchableHighlight>
    // </View>
    <ShareImage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#ff0',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }, 
  red: {
    flex: 1,
    backgroundColor: 'red',
    width: windowWidth,
  },
  green: {
    flex: 1,
    backgroundColor:'green',
    width: windowWidth,
  },
  blue: {
    flex: 1,
    backgroundColor:'blue'
  },
  touchBtn: {

  }
});
