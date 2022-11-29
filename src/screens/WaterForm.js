import {
  FlatList,
  Image,
  Pressable,
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
import {Dropdown} from 'react-native-element-dropdown';
import SignatureModal from '../components/modals/SignatureModal';
import RecordsModal from '../components/modals/RecordsModal';
import {
  ANTHROPOGENIC_ACTIVITIES,
  LAND_USE,
  WATER_BODY_DATA,
  WEATHER_CONDITIONS,
} from '../utils/Constants';
import { getDateValue, getTime } from '../utils/dateFunctions';

export default function WaterForm({navigation}) {
  const _scrollRef = React.useRef(null);

  const [fieldCode, setFieldCode] = React.useState('');
  const [samplingLocation, setSamplingLocation] = React.useState('');
  const [collectedBy, setCollectedBy] = React.useState('');
  const [monitoringTime, setMonitoringTime] = React.useState(new Date());
  const [monitoredDate, setMonitoredDate] = React.useState(new Date());

  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const _inputRef = React.useRef(null);
  const _tableRef = React.useRef(null);

  const [waterBodyType, setWaterBodyType] = React.useState(null);
  const [anthropogenicActivity, setAnthropogenicActivity] =
    React.useState(null);
  const [weatherCondition, setWeatherCondition] = React.useState(null);
  const [landUse, setLandUse] = React.useState(null);
  const [sampleType, setSampleType] = React.useState('Grab');

  const [table1, setTable1] = React.useState([]);

  const [waterTemp, setWaterTemp] = React.useState('');
  const [pH, setPH] = React.useState('');
  const [odOr, setOdOr] = React.useState('');
  const [color, setColor] = React.useState('');
  const [flow, setFlow] = React.useState('');
  const [depth, setDepth] = React.useState('');

  const [signature, setSignature] = React.useState(
    'https://via.placeholder.com/250x100.png?text=Press+to+sign',
  );
  const [selectedRecord, setSelectedRecord] = React.useState({
    label: [],
    value: [],
  });

  const [gpsLocation, setGpsLocation] = React.useState('');

  const [showSignatureModal, setShowSignatureModal] = React.useState(false);
  const [showTableRecords, setShowTableRecords] = React.useState(false);


  const onPrimaryPress = () => {
    setFieldCode('');
    setSamplingLocation('');
    setCollectedBy('');
    setMonitoringTime(new Date());
    setMonitoredDate(new Date());
    setWaterBodyType(null);
    setAnthropogenicActivity(null);
    setWeatherCondition(null);
    setLandUse(null);
    setSampleType('Grab');
    setTable1([]);
    setWaterTemp('');
    setPH('');
    setOdOr('');
    setFlow('');
    setDepth('');
    setColor('');
    setSignature('https://via.placeholder.com/250x100.png?text=Press+to+sign');
    setSelectedRecord({
      label: [],
      value: [],
    });
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={32} color={'#000'} />
        </TouchableOpacity>
        <Text style={styles.title}>Water Quality Monitoring</Text>
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
            <Text style={styles.label}>Sampling Location</Text>
            <InputField
              value={samplingLocation}
              activeOutlineColor={'green'}
              onChangeText={text => setSamplingLocation(text)}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Text style={styles.label}>Collected By</Text>
          <InputField
            value={collectedBy}
            activeOutlineColor={'green'}
            onChangeText={text => setCollectedBy(text)}
          />
        </View>
        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
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

          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Monitoring Time</Text>
            <InputField
              value={getTime(monitoringTime)}
              activeOutlineColor={'green'}
              onChangeText={text => setMonitoringTime(text)}
              fieldButtonFunction={openTimeCalender}
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
            marginTop: 25,
          }}>
          <Text style={styles.label}>Water Body Type</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            itemTextStyle={styles.itemTextStyle}
            selectedStyle={styles.selectedStyle}
            data={WATER_BODY_DATA}
            activeColor={`${Color.primary}50`}
            showsVerticalScrollIndicator={true}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={waterBodyType}
            onChange={item => {
              setWaterBodyType(item.value);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Text style={styles.label}>Anthropogenic activities</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            itemTextStyle={styles.itemTextStyle}
            selectedStyle={styles.selectedStyle}
            data={ANTHROPOGENIC_ACTIVITIES}
            activeColor={`${Color.primary}50`}
            showsVerticalScrollIndicator={true}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={anthropogenicActivity}
            onChange={item => {
              setAnthropogenicActivity(item.value);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Text style={styles.label}>Weather Condition</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            itemTextStyle={styles.itemTextStyle}
            selectedStyle={styles.selectedStyle}
            data={WEATHER_CONDITIONS}
            activeColor={`${Color.primary}50`}
            showsVerticalScrollIndicator={true}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={weatherCondition}
            onChange={item => {
              setWeatherCondition(item.value);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Text style={styles.label}>Land Use</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            itemTextStyle={styles.itemTextStyle}
            selectedStyle={styles.selectedStyle}
            data={LAND_USE}
            activeColor={`${Color.primary}50`}
            showsVerticalScrollIndicator={true}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={landUse}
            onChange={item => {
              setLandUse(item.value);
            }}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>Sample Type</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <TouchableOpacity
              onPress={() => setSampleType('Grab')}
              style={{
                ...styles.radioStyle,
                backgroundColor:
                  sampleType == 'Grab' ? `${Color.primary}50` : '#aaaaaa50',
              }}>
              <Text
                style={{
                  color: '#000',
                  fontFamily: Fonts.primaryRegular,
                  lineHeight: 14 * 1.5,
                }}>
                Grab
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSampleType('Composite')}
              style={{
                ...styles.radioStyle,
                backgroundColor:
                  sampleType == 'Composite'
                    ? `${Color.primary}50`
                    : '#aaaaaa50',
                marginLeft: 5,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontFamily: Fonts.primaryRegular,
                  lineHeight: 14 * 1.5,
                }}>
                Composite
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 16,
            }}>
            Table
          </Text>
          <TouchableOpacity
            onPress={() => {
              setSelectedRecord({
                label: [
                  'Water Temperature',
                  'pH',
                  'Odor',
                  'Colour',
                  'Flow',
                  'Depth',
                ],
                value: table1.map(item => {
                  return {
                    0: item.waterTemp,
                    1: item.pH,
                    2: item.odOr,
                    3: item.color,
                    4: item.flow,
                    5: item.depth,
                  };
                }),
              });
              setShowTableRecords(true);
            }}>
            <Text
              style={{
                color: Color.primary,
                fontFamily: Fonts.primarySemiBold,
              }}>
              View records
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Text style={styles.label}>Water Temperature</Text>
          <InputField
            ref={_tableRef}
            value={waterTemp}
            keyboardType={'numeric'}
            activeOutlineColor={'green'}
            onChangeText={text => setWaterTemp(text)}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>pH</Text>
            <InputField
              value={pH}
              keyboardType={'numeric'}
              activeOutlineColor={'green'}
              onChangeText={text => setPH(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Odor</Text>
            <InputField
              value={odOr}
              activeOutlineColor={'green'}
              onChangeText={text => setOdOr(text)}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Text style={styles.label}>Colour</Text>
          <InputField
            value={color}
            activeOutlineColor={'green'}
            onChangeText={text => setColor(text)}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Flow</Text>
            <InputField
              value={flow}
              activeOutlineColor={'green'}
              onChangeText={text => setFlow(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Depth</Text>
            <InputField
              value={depth}
              activeOutlineColor={'green'}
              onChangeText={text => setDepth(text)}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setTable1([
              ...table1,
              {
                waterTemp,
                pH,
                odOr,
                color,
                flow,
                depth,
              },
            ]);
            setWaterTemp('');
            setPH('');
            setOdOr('');
            setColor('');
            setFlow('');
            setDepth('');
            _tableRef.current.focus();
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
        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Signature</Text>
          <Pressable
            onPress={() => setShowSignatureModal(true)}
            style={{
              marginTop: 10,
            }}>
            <Image
              source={{
                uri: signature,
              }}
              style={{
                flex: 1,
                height: 100,
                resizeMode: 'stretch',
              }}
            />
          </Pressable>
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
      <RecordsModal
        visible={showTableRecords}
        onClose={() => setShowTableRecords(false)}
        records={selectedRecord}
      />
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
      <SignatureModal
        visible={showSignatureModal}
        onClose={() => setShowSignatureModal(false)}
        setImage={setSignature}
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
  dropdown: {
    // margin: 16,
    height: 45,
    paddingLeft: 14,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#aaaaaa50',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray',
  },
  selectedStyle: {
    backgroundColor: `${Color.primary}50`,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000',
  },
  itemTextStyle: {
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  radioStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    // width: '49%',
    padding: 12,
    borderRadius: 5,
  },
});
