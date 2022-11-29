import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {mainStyles} from './RequisitionForm';
import InputField from '../components/CustomInput';
import {Color, Fonts} from '../theme';
import {Button, Chip} from 'react-native-paper';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import SuccessModal from '../components/modals/SuccessModal';
import { getDateValue, getTime } from '../utils/dateFunctions';

export default function NoiseForm({navigation}) {
  const _scrollRef = React.useRef(null);

  const [fieldCode, setFieldCode] = React.useState('');
  const [monitoringLocation, setMonitoringLocation] = React.useState('');
  const [instrumentCode, setInstrumentCode] = React.useState('');
  const [noiseSource, setNoiseSource] = React.useState('');
  const [monitoringTime, setMonitoringTime] = React.useState(new Date());

  const [readingText, setReadingText] = React.useState('');
  const [readings, setReadings] = React.useState([]);

  const [monitoredBy, setMonitoredBy] = React.useState('');
  const [monitoredDate, setMonitoredDate] = React.useState(new Date());

  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const _inputRef = React.useRef(null);

  const onPrimaryPress = () => {
    setFieldCode('');
    setMonitoringLocation('');
    setInstrumentCode('');
    setNoiseSource('');
    setMonitoringTime(new Date());
    setReadingText('');
    setReadings([]);
    setMonitoredBy('');
    setMonitoredDate(new Date());
    _scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
    setShowModal(false);
  };

  const openTimeCalender = () => {
    DateTimePickerAndroid.open({
      value: monitoringTime,
      onChange: (event, date) => {
        setMonitoringTime(date);
      },
      mode: 'time',
      is24Hour: false,
    });
  };

  const openCalendar = () => {
    DateTimePickerAndroid.open({
      value: monitoredDate,
      onChange: (event, date) => {
        setMonitoredDate(date);
      },
      mode: 'date',
      is24Hour: false,
    });
  };

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      _inputRef.current.focus();
      setShowModal(true);
    }, 1000);
  };

  const renderItem = (item, index) => {
    return (
      <Chip
        key={index}
        elevated
        textStyle={{
          fontFamily: Fonts.primarySemiBold,
          fontSize: 14,
          lineHeight: 14 * 1.4,
          color: Color.black,
        }}
        style={{
          marginLeft: 10,
          backgroundColor: Color.white,
          marginTop: 10,
          color: '#fff',
        }}>
        {item}
      </Chip>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={32} color={'#000'} />
        </TouchableOpacity>
        <Text style={styles.title}>Noise Monitoring</Text>
      </View>
      <ScrollView
        ref={_scrollRef}
        keyboardShouldPersistTaps="always"
        style={styles.form}
        contentContainerStyle={{
          paddingBottom: 40,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Field Code</Text>
            <InputField
              ref={_inputRef}
              value={fieldCode}
              activeOutlineColor={'green'}
              onChangeText={text => setFieldCode(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Location of Monitoring</Text>
            <InputField
              value={monitoringLocation}
              activeOutlineColor={'green'}
              onChangeText={text => setMonitoringLocation(text)}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Text style={styles.label}>Instrument Code</Text>
          <InputField
            value={instrumentCode}
            activeOutlineColor={'green'}
            onChangeText={text => setInstrumentCode(text)}
          />
        </View>
        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Source of Noise</Text>
            <InputField
              value={noiseSource}
              activeOutlineColor={'green'}
              onChangeText={text => setNoiseSource(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Monitoring Time</Text>
            <InputField
              value={getTime(monitoringTime)}
              activeOutlineColor={'green'}
              onChangeText={text => setMonitoringTime(text)}
              fieldButtonFunction={openTimeCalender}
              fieldButton={
                <MaterialCommunityIcons
                  name="calendar"
                  color={Color.primary}
                  size={23}
                  style={{
                    paddingHorizontal: 15,
                  }}
                />
              }
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 45,
          }}>
          <Text style={styles.label}>Reading</Text>
          <InputField
            value={readingText}
            keyboardType={'numeric'}
            activeOutlineColor={'green'}
            onChangeText={text => setReadingText(text)}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            readingText !== '' && setReadings(prev => [...prev, readingText]);
            setReadingText('');
          }}
          style={{
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-end',
          }}>
          <MaterialCommunityIcons
            name="plus-circle"
            color={Color.primary}
            size={23}
            style={{
              paddingHorizontal: 5,
            }}
          />
          <Text
            style={{
              color: Color.primary,
              lineHeight: 14 * 1.4,
              fontFamily: Fonts.primarySemiBold,
            }}>
            Add more
          </Text>
        </TouchableOpacity>
        <View style={styles.chipContainer}>
          {readings.map((item, index) => {
            return renderItem(item, index);
          })}
        </View>
        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Monitored By</Text>
            <InputField
              value={monitoredBy}
              activeOutlineColor={'green'}
              onChangeText={text => setMonitoredBy(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Monitoring Date</Text>
            <InputField
              value={getDateValue(monitoredDate)}
              activeOutlineColor={'green'}
              onChangeText={text => setMonitoredDate(text)}
              fieldButtonFunction={openCalendar}
              fieldButton={
                <MaterialCommunityIcons
                  name="calendar"
                  color={Color.primary}
                  size={23}
                  style={{
                    paddingHorizontal: 15,
                  }}
                />
              }
            />
          </View>
        </View>
        <Button
          mode="elevated"
          elevation={5}
          onPress={onSubmit}
          buttonColor={Color.primary}
          loading={loading}
          dark
          style={{...styles.button, marginTop: 30}}
          contentStyle={{
            height: 50,
          }}
          labelStyle={{
            fontSize: 14,
          }}>
          Submit
        </Button>
      </ScrollView>
      <SuccessModal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        title="Records Added Successfully"
        primaryBtnText="Add More"
        onPrimaryPress={() => onPrimaryPress()}
        secondaryBtnText="Go Back"
        onSecondaryPress={() => {
          setShowModal(false);
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ...mainStyles,
  chipContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
