import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SignatureView from 'react-native-signature-canvas';
import {Color, Dimension} from '../../theme';

export default function SignatureModal(props) {
  const handleOK = signature => {
    props.setImage(signature);
    props.onClose();
  };

  const handleEmpty = () => {
    console.log('Empty');
  };

  const style = `.m-signature-pad--footer
    .button {
      background-color: ${Color.primary};
      color: #FFF;
    }`;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        props.onClose();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Signature</Text>
          <SignatureView
            onOK={handleOK}
            onEmpty={handleEmpty}
            descriptionText="Sign"
            clearText="Clear"
            confirmText="Save"
            webStyle={style}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    borderRadius: 25,
    padding: 25,
    width: 350,
    height: 450,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    backgroundColor: '#fff',
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  modalText: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  preview: {
    width: 335,
    height: 114,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  previewText: {
    color: '#FFF',
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#69B2FF',
    width: 120,
    textAlign: 'center',
    marginTop: 10,
  },
});
