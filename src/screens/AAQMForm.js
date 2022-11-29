import {
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
import {Button} from 'react-native-paper';
import {getDateValue, getTime} from '../utils/dateFunctions';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import SuccessModal from '../components/modals/SuccessModal';

export default function AAQMForm({navigation}) {
  const _scrollRef = React.useRef(null);

  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const _inputRef = React.useRef(null);

  const [monitoringPoint, setMonitoringPoint] = React.useState('');
  const [fieldCode, setFieldCode] = React.useState('');
  const [startDate, setStartDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(new Date());
  const [closedDate, setClosedDate] = React.useState(new Date());
  const [closedTime, setClosedTime] = React.useState(new Date());
  const [instrumentID, setInstrumentID] = React.useState('');
  const [temp, setTemp] = React.useState('');
  const [humidity, setHumidity] = React.useState('');
  const [windDirection, setWindDirection] = React.useState('');

  const [pm10FilterPaperCode, setPm10FilterPaperCode] = React.useState('');
  const [pm10TimePeriod, setPm10TimePeriod] = React.useState('');
  const [pm10InitialWeight, setPm10InitialWeight] = React.useState('');
  const [pm10FinalWeight, setPm10FinalWeight] = React.useState('');
  const [pm10ManometerInitial, setPm10ManometerInitial] = React.useState(0);
  const [pm10ManometerFinal, setPm10ManometerFinal] = React.useState(0);
  const [pm10TimeTotalizerInitial, setPm10TimeTotalizerInitial] =
    React.useState(0);
  const [pm10TimeTotalizerFinal, setPm10TimeTotalizerFinal] = React.useState(0);
  const [pm10VolumePassedInitial, setPm10VolumePassedInitial] =
    React.useState(0);
  const [pm10VolumePassedFinal, setPm10VolumePassedFinal] = React.useState(0);

  const [pm5FilterPaperCode, setPm5FilterPaperCode] = React.useState('');
  const [pm5TimePeriod, setPm5TimePeriod] = React.useState('');
  const [pm5InitialWeight, setPm5InitialWeight] = React.useState('');
  const [pm5FinalWeight, setPm5FinalWeight] = React.useState('');
  const [pm5ManometerInitial, setPm5ManometerInitial] = React.useState(0);
  const [pm5ManometerFinal, setPm5ManometerFinal] = React.useState(0);
  const [pm5TimeTotalizerInitial, setPm5TimeTotalizerInitial] =
    React.useState(0);
  const [pm5TimeTotalizerFinal, setPm5TimeTotalizerFinal] = React.useState(0);
  const [pm5VolumePassedInitial, setPm5VolumePassedInitial] = React.useState(0);
  const [pm5VolumePassedFinal, setPm5VolumePassedFinal] = React.useState(0);

  const [gasTimePeriod, setGasTimePeriod] = React.useState('');
  const [SO2AbsoluteVolume, setSO2AbsoluteVolume] = React.useState('');
  const [SO2RemainingVolume, setSO2RemainingVolume] = React.useState('');
  const [SO2RotameterInitial, setSO2RotameterInitial] = React.useState(0);
  const [SO2RotameterFinal, setSO2RotameterFinal] = React.useState(0);

  const [NO2AbsoluteVolume, setNO2AbsoluteVolume] = React.useState('');
  const [NO2RemainingVolume, setNO2RemainingVolume] = React.useState('');
  const [NO2RotameterInitial, setNO2RotameterInitial] = React.useState(0);
  const [NO2RotameterFinal, setNO2RotameterFinal] = React.useState(0);

  const [O3AbsoluteVolume, setO3AbsoluteVolume] = React.useState('');
  const [O3RemainingVolume, setO3RemainingVolume] = React.useState('');
  const [O3RotameterInitial, setO3RotameterInitial] = React.useState(0);
  const [O3RotameterFinal, setO3RotameterFinal] = React.useState(0);

  const [NH3AbsoluteVolume, setNH3AbsoluteVolume] = React.useState('');
  const [NH3RemainingVolume, setNH3RemainingVolume] = React.useState('');
  const [NH3RotameterInitial, setNH3RotameterInitial] = React.useState(0);
  const [NH3RotameterFinal, setNH3RotameterFinal] = React.useState(0);

  const [monitoredBy, setMonitoredBy] = React.useState('');
  const [checkedBy, setCheckedBy] = React.useState('');

  const onPrimaryPress = () => {
    setMonitoringPoint('');
    setFieldCode('');
    setStartDate(new Date());
    setStartTime(new Date());
    setClosedDate(new Date());
    setClosedTime(new Date());
    setInstrumentID('');
    setTemp('');
    setHumidity('');
    setWindDirection('');
    setPm10FilterPaperCode('');
    setPm10TimePeriod('');
    setPm10InitialWeight('');
    setPm10FinalWeight('');
    setPm10ManometerInitial(0);
    setPm10ManometerFinal(0);
    setPm10TimeTotalizerInitial(0);
    setPm10TimeTotalizerFinal(0);
    setPm10VolumePassedInitial(0);
    setPm10VolumePassedFinal(0);
    setPm5FilterPaperCode('');
    setPm5TimePeriod('');
    setPm5InitialWeight('');
    setPm5FinalWeight('');
    setPm5ManometerInitial(0);
    setPm5ManometerFinal(0);
    setPm5TimeTotalizerInitial(0);
    setPm5TimeTotalizerFinal(0);
    setPm5VolumePassedInitial(0);
    setPm5VolumePassedFinal(0);
    setGasTimePeriod('');
    setSO2AbsoluteVolume('');
    setSO2RemainingVolume('');
    setSO2RotameterInitial(0);
    setSO2RotameterFinal(0);
    setNO2AbsoluteVolume('');
    setNO2RemainingVolume('');
    setNO2RotameterInitial(0);
    setNO2RotameterFinal(0);
    setO3AbsoluteVolume('');
    setO3RemainingVolume('');
    setO3RotameterInitial(0);
    setO3RotameterFinal(0);
    setNH3AbsoluteVolume('');
    setNH3RemainingVolume('');
    setNH3RotameterInitial(0);
    setNH3RotameterFinal(0);
    setMonitoredBy('');
    setCheckedBy('');
    _scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
    setShowModal(false);
  };

  const openStartCalendar = () => {
    DateTimePickerAndroid.open({
      value: startDate,
      onChange: (event, date) => {
        setStartDate(date);
      },
      mode: 'date',
      is24Hour: false,
    });
  };

  const openStartTimeCalender = () => {
    DateTimePickerAndroid.open({
      value: startTime,
      onChange: (event, date) => {
        setStartTime(date);
      },
      mode: 'time',
      is24Hour: false,
    });
  };

  const openClosedCalendar = () => {
    DateTimePickerAndroid.open({
      value: closedDate,
      onChange: (event, date) => {
        setClosedDate(date);
      },
      mode: 'date',
      is24Hour: false,
    });
  };

  const openClosedTimeCalender = () => {
    DateTimePickerAndroid.open({
      value: closedTime,
      onChange: (event, date) => {
        setClosedTime(date);
      },
      mode: 'time',
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={32} color={'#000'} />
        </TouchableOpacity>
        <Text style={styles.title}>AAQM Monitoring</Text>
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
            <Text style={styles.label}>Monitoring Point</Text>
            <InputField
              ref={_inputRef}
              value={monitoringPoint}
              activeOutlineColor={'green'}
              onChangeText={text => setMonitoringPoint(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Field Code</Text>
            <InputField
              value={fieldCode}
              activeOutlineColor={'green'}
              onChangeText={text => setFieldCode(text)}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Started Date & Time</Text>
            <InputField
              value={getDateValue(startDate)}
              activeOutlineColor={'green'}
              onChangeText={text => setStartDate(text)}
              fieldButtonFunction={openStartCalendar}
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
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}> </Text>
            <InputField
              value={getTime(startTime)}
              activeOutlineColor={'green'}
              onChangeText={text => setStartTime(text)}
              fieldButtonFunction={openStartTimeCalender}
              fieldButton={
                <MaterialCommunityIcons
                  name="clock"
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
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Closed time & date</Text>
            <InputField
              value={getDateValue(closedDate)}
              activeOutlineColor={'green'}
              onChangeText={text => setClosedDate(text)}
              fieldButtonFunction={openClosedCalendar}
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
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}> </Text>
            <InputField
              value={getTime(closedTime)}
              activeOutlineColor={'green'}
              onChangeText={text => setClosedTime(text)}
              fieldButtonFunction={openClosedTimeCalender}
              fieldButton={
                <MaterialCommunityIcons
                  name="clock"
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
            marginTop: 15,
          }}>
          <Text style={styles.label}>Instrument ID</Text>
          <InputField
            value={instrumentID}
            activeOutlineColor={'green'}
            onChangeText={text => setInstrumentID(text)}
          />
        </View>
        <Text
          style={{
            color: '#000',
            fontFamily: Fonts.primarySemiBold,
            fontSize: 16,
            marginTop: 30,
          }}>
          Climatic Conditions
        </Text>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Temperature</Text>
            <InputField
              value={temp}
              activeOutlineColor={'green'}
              onChangeText={text => setTemp(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Humidity</Text>
            <InputField
              value={humidity}
              activeOutlineColor={'green'}
              onChangeText={text => setHumidity(text)}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Text style={styles.label}>Wind direction</Text>
          <InputField
            value={windDirection}
            activeOutlineColor={'green'}
            onChangeText={text => setWindDirection(text)}
          />
        </View>
        <Text
          style={{
            color: '#000',
            fontFamily: Fonts.primaryBold,
            fontSize: 18,
            marginTop: 50,
          }}>
          PM-10 Monitoring
        </Text>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Filter paper code</Text>
            <InputField
              value={pm10FilterPaperCode}
              activeOutlineColor={'green'}
              onChangeText={text => setPm10FilterPaperCode(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Time Period (in Hours)</Text>
            <InputField
              value={pm10TimePeriod}
              activeOutlineColor={'green'}
              onChangeText={text => setPm10TimePeriod(text)}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>
              Initial weight of filter paper (mg)
            </Text>
            <InputField
              value={pm10InitialWeight}
              activeOutlineColor={'green'}
              onChangeText={text => setPm10InitialWeight(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Final weight of filter paper (mg)</Text>
            <InputField
              value={pm10FinalWeight}
              activeOutlineColor={'green'}
              onChangeText={text => setPm10FinalWeight(text)}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            Manometer reading (m
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 12,
            }}>
            3
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            /min)
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Initial</Text>
            <InputField
              value={pm10ManometerInitial}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setPm10ManometerInitial(text)}
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={styles.label}>Final</Text>
            <InputField
              value={pm10ManometerFinal}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setPm10ManometerFinal(text)}
            />
          </View>
          {/* <View style={{marginHorizontal: 10, alignSelf: 'flex-end'}}>
            <Text style={styles.label}>=</Text>
          </View> */}
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.label}>Calculated</Text>
            <Text style={styles.value}>
              {(parseFloat(pm10ManometerInitial) +
                parseFloat(pm10ManometerFinal)) /
                2}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            Time totalizer reading (min)
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Initial</Text>
            <InputField
              value={pm10TimeTotalizerInitial}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setPm10TimeTotalizerInitial(text)}
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={styles.label}>Final</Text>
            <InputField
              value={pm10TimeTotalizerFinal}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setPm10TimeTotalizerFinal(text)}
            />
          </View>
          {/* <View style={{marginHorizontal: 10, alignSelf: 'flex-end'}}>
            <Text style={styles.label}>=</Text>
          </View> */}
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.label}>Calculated</Text>
            <Text style={styles.value}>
              {(parseFloat(pm10TimeTotalizerInitial) +
                parseFloat(pm10TimeTotalizerFinal)) /
                2}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            Volume of passed Air (m
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 12,
            }}>
            3
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            )
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Initial</Text>
            <InputField
              value={pm10VolumePassedInitial}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setPm10VolumePassedInitial(text)}
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={styles.label}>Final</Text>
            <InputField
              value={pm10VolumePassedFinal}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setPm10VolumePassedFinal(text)}
            />
          </View>
          {/* <View style={{marginHorizontal: 10, alignSelf: 'flex-end'}}>
            <Text style={styles.label}>=</Text>
          </View> */}
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.label}>Calculated</Text>
            <Text style={styles.value}>
              {(parseFloat(pm10VolumePassedInitial) +
                parseFloat(pm10VolumePassedFinal)) /
                2}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: '#000',
            fontFamily: Fonts.primaryBold,
            fontSize: 18,
            marginTop: 50,
          }}>
          PM-2.5 Monitoring
        </Text>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Filter paper code</Text>
            <InputField
              value={pm5FilterPaperCode}
              activeOutlineColor={'green'}
              onChangeText={text => setPm5FilterPaperCode(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Time Period (in Hours)</Text>
            <InputField
              value={pm5TimePeriod}
              activeOutlineColor={'green'}
              onChangeText={text => setPm5TimePeriod(text)}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>
              Initial weight of filter paper (mg)
            </Text>
            <InputField
              value={pm5InitialWeight}
              activeOutlineColor={'green'}
              onChangeText={text => setPm5InitialWeight(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Final weight of filter paper (mg)</Text>
            <InputField
              value={pm5FinalWeight}
              activeOutlineColor={'green'}
              onChangeText={text => setPm5FinalWeight(text)}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            Manometer reading (m
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 12,
            }}>
            3
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            /min)
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Initial</Text>
            <InputField
              value={pm5ManometerInitial}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setPm5ManometerInitial(text)}
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={styles.label}>Final</Text>
            <InputField
              value={pm5ManometerFinal}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setPm5ManometerFinal(text)}
            />
          </View>
          {/* <View style={{marginHorizontal: 10, alignSelf: 'flex-end'}}>
            <Text style={styles.label}>=</Text>
          </View> */}
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.label}>Calculated</Text>
            <Text style={styles.value}>
              {(parseFloat(pm5ManometerInitial) +
                parseFloat(pm5ManometerFinal)) /
                2}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            Time totalizer reading (min)
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Initial</Text>
            <InputField
              value={pm5TimeTotalizerInitial}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setPm5TimeTotalizerInitial(text)}
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={styles.label}>Final</Text>
            <InputField
              value={pm5TimeTotalizerFinal}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setPm5TimeTotalizerFinal(text)}
            />
          </View>
          {/* <View style={{marginHorizontal: 10, alignSelf: 'flex-end'}}>
            <Text style={styles.label}>=</Text>
          </View> */}
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.label}>Calculated</Text>
            <Text style={styles.value}>
              {(parseFloat(pm5TimeTotalizerInitial) +
                parseFloat(pm5TimeTotalizerFinal)) /
                2}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            Volume of passed Air (m
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 12,
            }}>
            3
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            )
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Initial</Text>
            <InputField
              value={pm5VolumePassedInitial}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setPm5VolumePassedInitial(text)}
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={styles.label}>Final</Text>
            <InputField
              value={pm5VolumePassedFinal}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setPm5VolumePassedFinal(text)}
            />
          </View>
          {/* <View style={{marginHorizontal: 10, alignSelf: 'flex-end'}}>
            <Text style={styles.label}>=</Text>
          </View> */}
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.label}>Calculated</Text>
            <Text style={styles.value}>
              {(parseFloat(pm5VolumePassedInitial) +
                parseFloat(pm5VolumePassedFinal)) /
                2}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: '#000',
            fontFamily: Fonts.primaryBold,
            fontSize: 18,
            marginTop: 50,
          }}>
          Gaseous Monitoring
        </Text>
        <View
          style={{
            marginTop: 15,
          }}>
          <Text style={styles.label}>Time Period (In Hours)</Text>
          <InputField
            value={gasTimePeriod}
            activeOutlineColor={'green'}
            onChangeText={text => setGasTimePeriod(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 20,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primaryBold,
              fontSize: 20,
              lineHeight: 20 * 1.4,
            }}>
            SO
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primaryBold,
              fontSize: 14,
              lineHeight: 44,
            }}>
            2
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 0}}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            Volume of absorbent media poured in the inpingers
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Absolute vol.</Text>
            <InputField
              value={SO2AbsoluteVolume}
              activeOutlineColor={'green'}
              onChangeText={text => setSO2AbsoluteVolume(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Remaining vol.</Text>
            <InputField
              value={SO2RemainingVolume}
              activeOutlineColor={'green'}
              onChangeText={text => setSO2RemainingVolume(text)}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            Rotameter reading in LPM
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Initial</Text>
            <InputField
              value={SO2RotameterInitial}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setSO2RotameterInitial(text)}
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={styles.label}>Final</Text>
            <InputField
              value={SO2RotameterFinal}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setSO2RotameterFinal(text)}
            />
          </View>
          {/* <View style={{marginHorizontal: 10, alignSelf: 'flex-end'}}>
            <Text style={styles.label}>=</Text>
          </View> */}
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.label}>Calculated</Text>
            <Text style={styles.value}>
              {(parseFloat(SO2RotameterInitial) +
                parseFloat(SO2RotameterFinal)) /
                2}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 20,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primaryBold,
              fontSize: 20,
              lineHeight: 20 * 1.4,
            }}>
            NO
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primaryBold,
              fontSize: 14,
              lineHeight: 44,
            }}>
            2
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 0}}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            Volume of absorbent media poured in the inpingers
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Absolute vol.</Text>
            <InputField
              value={NO2AbsoluteVolume}
              activeOutlineColor={'green'}
              onChangeText={text => setNO2AbsoluteVolume(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Remaining vol.</Text>
            <InputField
              value={NO2RemainingVolume}
              activeOutlineColor={'green'}
              onChangeText={text => setNO2RemainingVolume(text)}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            Rotameter reading in LPM
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Initial</Text>
            <InputField
              value={NO2RotameterInitial}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setNO2RotameterInitial(text)}
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={styles.label}>Final</Text>
            <InputField
              value={NO2RotameterFinal}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setNO2RotameterFinal(text)}
            />
          </View>
          {/* <View style={{marginHorizontal: 10, alignSelf: 'flex-end'}}>
            <Text style={styles.label}>=</Text>
          </View> */}
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.label}>Calculated</Text>
            <Text style={styles.value}>
              {(parseFloat(NO2RotameterInitial) +
                parseFloat(NO2RotameterFinal)) /
                2}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 20,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primaryBold,
              fontSize: 20,
              lineHeight: 20 * 1.4,
            }}>
            O
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primaryBold,
              fontSize: 14,
              lineHeight: 44,
            }}>
            3
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 0}}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            Volume of absorbent media poured in the inpingers
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Absolute vol.</Text>
            <InputField
              value={O3AbsoluteVolume}
              activeOutlineColor={'green'}
              onChangeText={text => setO3AbsoluteVolume(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Remaining vol.</Text>
            <InputField
              value={O3RemainingVolume}
              activeOutlineColor={'green'}
              onChangeText={text => setO3RemainingVolume(text)}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            Rotameter reading in LPM
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Initial</Text>
            <InputField
              value={O3RotameterInitial}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setO3RotameterInitial(text)}
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={styles.label}>Final</Text>
            <InputField
              value={O3RotameterFinal}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setO3RotameterFinal(text)}
            />
          </View>
          {/* <View style={{marginHorizontal: 10, alignSelf: 'flex-end'}}>
            <Text style={styles.label}>=</Text>
          </View> */}
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.label}>Calculated</Text>
            <Text style={styles.value}>
              {(parseFloat(O3RotameterInitial) + parseFloat(O3RotameterFinal)) /
                2}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 20,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primaryBold,
              fontSize: 20,
              lineHeight: 20 * 1.4,
            }}>
            NH
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primaryBold,
              fontSize: 14,
              lineHeight: 44,
            }}>
            3
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 0}}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            Volume of absorbent media poured in the inpingers
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Absolute vol.</Text>
            <InputField
              value={NH3AbsoluteVolume}
              activeOutlineColor={'green'}
              onChangeText={text => setNH3AbsoluteVolume(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Remaining vol.</Text>
            <InputField
              value={NH3RemainingVolume}
              activeOutlineColor={'green'}
              onChangeText={text => setNH3RemainingVolume(text)}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primarySemiBold,
              fontSize: 16,
            }}>
            Rotameter reading in LPM
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Initial</Text>
            <InputField
              value={NH3RotameterInitial}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => NH3RotameterInitial(text)}
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={styles.label}>Final</Text>
            <InputField
              value={NH3RotameterFinal}
              keyboardType="numeric"
              activeOutlineColor={'green'}
              onChangeText={text => setNH3RotameterFinal(text)}
            />
          </View>
          {/* <View style={{marginHorizontal: 10, alignSelf: 'flex-end'}}>
            <Text style={styles.label}>=</Text>
          </View> */}
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.label}>Calculated</Text>
            <Text style={styles.value}>
              {(parseFloat(NH3RotameterInitial) +
                parseFloat(NH3RotameterFinal)) /
                2}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 45}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Monitored By</Text>
            <InputField
              value={monitoredBy}
              activeOutlineColor={'green'}
              onChangeText={text => setMonitoredBy(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Checked By</Text>
            <InputField
              value={checkedBy}
              activeOutlineColor={'green'}
              onChangeText={text => setCheckedBy(text)}
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
  value: {
    color: '#000',
    fontFamily: Fonts.primarySemiBold,
    fontSize: 22,
  },
});
