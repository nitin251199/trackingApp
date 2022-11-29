import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {FAB} from 'react-native-paper';

export default function UploadBotton() {

     const [state, setState] = React.useState({open: false});

     const onStateChange = ({open}) => setState({open});

     const {open} = state;

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
    <FAB.Group
      open={open}
      backdropColor="rgba(0,0,0,0.5)"
      icon={open ? 'close' : 'upload'}
      style={{
        paddingVertical: 60,
        paddingHorizontal: 0,
      }}
      color="white"
      actions={[
        {
          icon: 'camera',
          label: 'Image',
          onPress: () => takePhoto(),
        },
        {
          icon: 'video',
          label: 'Video',
          onPress: () => takeVideo(),
        },
      ]}
      onStateChange={onStateChange}
      // onPress={() => {
      //   if (open) {
      //     // do something if the speed dial is open
      //   }
      // }}
    />
  );
}
