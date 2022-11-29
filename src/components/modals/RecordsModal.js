import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Dimension, Fonts} from '../../theme';
import {Divider} from 'react-native-paper';

export default function RecordsModal(props) {
  const showRecords = () => {
    return props.records?.value.map((item, index) => {
      const keys = Object.keys(item);
      return (
        <View
          key={index}
          style={{
            marginTop: 10,
          }}>
          {keys.map((key, i) => {
            return (
              <View
                key={i}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontFamily: Fonts.primaryRegular,
                    fontSize: 12,
                  }}>
                  {props.records?.label[i]}
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontFamily: Fonts.primarySemiBold,
                  }}>
                  {item[key]}
                </Text>
              </View>
            );
          })}
          <View
            style={{
              backgroundColor: '#ddd',
              height: 1,
              marginVertical: 6,
            }}
          />
        </View>
      );
    });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        props.onClose();
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={props.onClose}
        style={styles.centeredView}>
        <TouchableOpacity
          activeOpacity={1}
          //   onPress={() => {}}
          style={styles.modalView}>
          <Text style={styles.modalText}>Added Records</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {showRecords()}
          </ScrollView>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    // margin: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 25,
    width: Dimension.window.width,
    height: Dimension.window.height * 0.55,
    // flex: 1,
    // alignItems: 'center',
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
});
