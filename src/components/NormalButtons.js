import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Button} from 'react-native-paper';

export default function NormalButtons() {
  const takePhoto = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      includeBase64: true,
    }).then(image => {
      console.log('received image', image);
    });
  };

  const takeVideo = () => {
    ImagePicker.openCamera({
      mediaType: 'video',
      compressVideoPreset: 'MediumQuality',
      includeBase64: true,
    }).then(video => {
      console.log('received video', video);
    });
  };

  return (
    <View style={styles.btnContainer}>
      <Button
        icon="camera"
        mode="elevated"
        buttonColor="green"
        textColor="white"
        contentStyle={styles.btn}
        style={{
          borderRadius: 10,
          alignItems: 'center',
          marginHorizontal: 5,
        }}
        labelStyle={styles.btnLabel}
        onPress={() => takePhoto()}>
        Image
      </Button>
      <Button
        icon="video"
        mode="elevated"
        buttonColor="green"
        textColor="white"
        contentStyle={styles.btn}
        style={{
          borderRadius: 10,
          alignItems: 'center',
          marginHorizontal: 5,
        }}
        labelStyle={styles.btnLabel}
        onPress={() => takeVideo()}>
        Video
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    width: Dimensions.get('window').width / 2 - 20,
    height: 60,
    alignItems: 'center',
  },
  btnLabel: {
    fontSize: 20,
    fontWeight: '600',
  },
});
