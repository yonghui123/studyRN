import { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableHighlight } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function ShareImage() {
  const [localUri, setLocalUri] = useState<string | undefined>();
  async function openImagePicker() {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('You need to enable permission to access your photos');
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.canceled) {
      return;
    } 
    if (pickerResult.assets[0].uri) {
      setLocalUri(pickerResult.assets[0].uri);
    }
  }

  async function onShareImageAsync() {
    await Sharing.shareAsync(localUri as string);
  }

  if(localUri) {
    return (
      <View style={styles.container}>
        <Image source={{uri: localUri}} style={styles.thumbnail} />
        <TouchableHighlight style={styles.botton} onPress={onShareImageAsync}>
          <Text style={styles.bottonText}>分享照片</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.botton} onPress={() => {setLocalUri(undefined)}}>
          <Text style={styles.bottonText}>取消</Text>
        </TouchableHighlight>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/splash-icon.png')} style={styles.logo} />
      <Text style={styles.instructions}>Share your photos with friends and family</Text>
      <TouchableHighlight style={styles.botton} onPress={() => {openImagePicker()}}>
        <Text style={styles.bottonText}>Share</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    textAlign: 'center', // Centered text for better readability on smaller screens
    marginBottom: 10,
  },
  botton: {
    backgroundColor: 'blue',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 10
  },
  bottonText: {
    fontSize: 16,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  }
})
