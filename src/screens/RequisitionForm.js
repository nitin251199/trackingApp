import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import InputField from '../components/CustomInput';
import {Color, Fonts} from '../theme';
import {Button} from 'react-native-paper';
import SignatureModal from '../components/modals/SignatureModal';
import RecordsModal from '../components/modals/RecordsModal';
import SuccessModal from '../components/modals/SuccessModal';
import { getDateValue } from '../utils/dateFunctions';

export default function RequisitionForm({navigation}) {
  const theme = {colors: {text: '#000', background: '#aaaaaa50'}}; // for text input

  const [labCode, setLabCode] = React.useState('');
  const [companyName, setCompanyName] = React.useState('');
  const [samplingDate, setSamplingDate] = React.useState(new Date());
  const [sampleReceived, setSampleReceived] = React.useState('');
  const [sampleCondition, setSampleCondition] = React.useState('');
  const [sampleCollectedBy, setSampleCollectedBy] = React.useState('');

  const [table1, setTable1] = React.useState([]);
  const [table2, setTable2] = React.useState([]);

  const [fieldCode1, setFieldCode1] = React.useState('');
  const [samplingLocations, setSamplingLocations] = React.useState('');
  const [sampleSource, setSampleSource] = React.useState('');
  const [sampleType, setSampleType] = React.useState('');
  const [containerUsed, setContainerUsed] = React.useState('');

  const [fieldCode2, setFieldCode2] = React.useState('');
  const [preservation, setPreservation] = React.useState('');
  const [parameters, setParameters] = React.useState('');

  const [customerModal, setCustomerModal] = React.useState(false);
  const [staffModal, setStaffModal] = React.useState(false);

  const [loading, setLoading] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const [selectedRecord, setSelectedRecord] = React.useState({
    label: [],
    value: [],
  });
  const _scrollRef = React.useRef(null);

  const [showTableRecords, setShowTableRecords] = React.useState(false);

  const [customerName, setCustomerName] = React.useState('');
  const [staffName, setStaffName] = React.useState('');

  const [customerSign, setCustomerSign] = useState(
    'https://via.placeholder.com/250x100.png?text=Press+to+sign',
  );
  const [staffSign, setStaffSign] = useState(
    'https://via.placeholder.com/250x100.png?text=Press+to+sign',
  );

  const _fieldCode1Ref = React.useRef(null);
  const _fieldCode2Ref = React.useRef(null);

  const addTable1 = () => {
    setTable1([
      ...table1,
      {
        fieldCode1,
        samplingLocations,
        sampleSource,
        sampleType,
        containerUsed,
      },
    ]);
    setFieldCode1('');
    setSamplingLocations('');
    setSampleSource('');
    setSampleType('');
    setContainerUsed('');
  };

  const addTable2 = () => {
    setTable2([
      ...table2,
      {
        fieldCode2,
        preservation,
        parameters,
      },
    ]);
    setFieldCode2('');
    setPreservation('');
    setParameters('');
  };


  const openDobCalender = () => {
    DateTimePickerAndroid.open({
      value: samplingDate,
      onChange: (event, date) => {
        setSamplingDate(date);
      },
      mode: 'date',
      is24Hour: false,
    });
  };

  const onPrimaryPress = () => {
    setLabCode('');
    setCompanyName('');
    setSamplingDate(new Date());
    setSampleReceived('');
    setSampleCondition('');
    setSampleCollectedBy('');
    setTable1([]);
    setFieldCode1('');
    setSamplingLocations('');
    setSampleSource('');
    setSampleType('');
    setContainerUsed('');
    setTable2([]);
    setFieldCode2('');
    setPreservation('');
    setParameters('');
    setCustomerName('');
    setStaffName('');
    setSelectedRecord({
      label: [],
      value: [],
    });
    setCustomerSign(
      'https://via.placeholder.com/250x100.png?text=Press+to+sign',
    );
    setStaffSign('https://via.placeholder.com/250x100.png?text=Press+to+sign');
    _scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
    setShowModal(false);
  };

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
    }, 2000);
  };

  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={32} color={'#000'} />
        </TouchableOpacity>
        <Text style={mainStyles.title}>Requisition Form</Text>
      </View>
      <ScrollView
        ref={_scrollRef}
        keyboardShouldPersistTaps="always"
        style={mainStyles.form}
        contentContainerStyle={{
          paddingBottom: 40,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={mainStyles.label}>Lab</Text>
            <InputField
              value={labCode}
              activeOutlineColor={'green'}
              onChangeText={text => setLabCode(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={mainStyles.label}>Company Name</Text>
            <InputField
              value={companyName}
              activeOutlineColor={'green'}
              onChangeText={text => setCompanyName(text)}
            />
          </View>
        </View>
        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={mainStyles.label}>Date of Sampling</Text>
            <InputField
              value={getDateValue(samplingDate)}
              activeOutlineColor={'green'}
              fieldButtonFunction={openDobCalender}
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
              onChangeText={text => setSamplingDate(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={mainStyles.label}>Sample received in lab</Text>
            <InputField
              value={sampleReceived}
              activeOutlineColor={'green'}
              onChangeText={text => setSampleReceived(text)}
            />
          </View>
        </View>
        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={mainStyles.label}>Sample Condition</Text>
            <InputField
              value={sampleCondition}
              activeOutlineColor={'green'}
              onChangeText={text => setSampleCondition(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={mainStyles.label}>Sample collected by</Text>
            <InputField
              value={sampleCollectedBy}
              activeOutlineColor={'green'}
              onChangeText={text => setSampleCollectedBy(text)}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 45,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={mainStyles.subHeading}>Table 1</Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedRecord({
                  label: [
                    'Field Code',
                    'Sampling Locations',
                    'Sample Source',
                    'Sample Type',
                    'Container Used',
                  ],
                  value: table1.map(item => {
                    return {
                      0: item.fieldCode1,
                      1: item.samplingLocations,
                      2: item.sampleSource,
                      3: item.sampleType,
                      4: item.containerUsed,
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
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={mainStyles.label}>Field Code</Text>
              <InputField
                value={fieldCode1}
                activeOutlineColor={'green'}
                onChangeText={text => setFieldCode1(text)}
              />
            </View>
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={mainStyles.label}>Sampling Locations</Text>
              <InputField
                value={samplingLocations}
                activeOutlineColor={'green'}
                onChangeText={text => setSamplingLocations(text)}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={mainStyles.label}>Source of Sample</Text>
            <InputField
              value={sampleSource}
              activeOutlineColor={'green'}
              onChangeText={text => setSampleSource(text)}
            />
          </View>
          <View style={{marginTop: 15, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={mainStyles.label}>Type of sample</Text>
              <InputField
                value={sampleType}
                activeOutlineColor={'green'}
                onChangeText={text => setSampleType(text)}
              />
            </View>
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={mainStyles.label}>Container Used</Text>
              <InputField
                value={containerUsed}
                activeOutlineColor={'green'}
                onChangeText={text => setContainerUsed(text)}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={addTable1}
            style={{
              marginTop: 20,
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
        </View>
        <View
          style={{
            marginTop: 45,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={mainStyles.subHeading}>Table 2</Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedRecord({
                  label: [
                    'Field Code',
                    'Preservation',
                    'Parameters to be analysed',
                  ],
                  value: table2.map(item => {
                    return {
                      0: item.fieldCode2,
                      1: item.preservation,
                      2: item.parameters,
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
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={mainStyles.label}>Field Code</Text>
              <InputField
                value={fieldCode2}
                activeOutlineColor={'green'}
                onChangeText={text => setFieldCode2(text)}
              />
            </View>
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={mainStyles.label}>Preservation</Text>
              <InputField
                value={preservation}
                activeOutlineColor={'green'}
                onChangeText={text => setPreservation(text)}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={mainStyles.label}>Parameteres to be analysed</Text>
            <InputField
              value={parameters}
              activeOutlineColor={'green'}
              onChangeText={text => setParameters(text)}
            />
          </View>
          <TouchableOpacity
            onPress={addTable2}
            style={{
              marginTop: 20,
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
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={mainStyles.label}>Customer Name</Text>
              <InputField
                value={customerName}
                activeOutlineColor={'green'}
                onChangeText={text => setCustomerName(text)}
              />
              {/* <Button
                mode="elevated"
                elevation={5}
                onPress={() => setCustomerModal(true)}
                buttonColor={Color.primary}
                // disabled={loading}
                dark
                style={mainStyles.button}
                contentStyle={{
                  height: 50,
                }}
                labelStyle={{
                  fontSize: 14,
                }}
                // loading={loading}
              >
                Sign
              </Button> */}
              <Pressable
                onPress={() => setCustomerModal(true)}
                style={{
                  marginTop: 10,
                }}>
                <Image
                  source={{
                    uri: customerSign,
                  }}
                  style={{
                    flex: 1,
                    height: 100,
                    resizeMode: 'stretch',
                  }}
                />
              </Pressable>
            </View>
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={mainStyles.label}> Field /Sampling Staff</Text>
              <InputField
                value={staffName}
                activeOutlineColor={'green'}
                onChangeText={text => setStaffName(text)}
              />
              {/* <Button
                mode="elevated"
                elevation={5}
                onPress={() => setStaffModal(true)}
                buttonColor={Color.primary}
                // disabled={loading}
                dark
                style={mainStyles.button}
                contentStyle={{
                  height: 50,
                }}
                labelStyle={{
                  fontSize: 14,
                }}
                // loading={loading}
              >
                Sign
              </Button> */}
              <Pressable
                onPress={() => setStaffModal(true)}
                style={{
                  marginTop: 10,
                }}>
                <Image
                  source={{
                    uri: staffSign,
                  }}
                  style={{
                    flex: 1,
                    height: 100,
                    resizeMode: 'stretch',
                  }}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <Button
          mode="elevated"
          elevation={5}
          onPress={onSubmit}
          buttonColor={Color.primary}
          loading={loading}
          dark
          style={{...mainStyles.button, marginTop: 30}}
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
      <RecordsModal
        visible={showTableRecords}
        onClose={() => setShowTableRecords(false)}
        records={selectedRecord}
      />
      <SignatureModal
        visible={customerModal}
        onClose={() => setCustomerModal(false)}
        setImage={setCustomerSign}
      />
      <SignatureModal
        visible={staffModal}
        onClose={() => setStaffModal(false)}
        setImage={setStaffSign}
      />
    </View>
  );
}

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 30,
    lineHeight: 20 * 1.4,
    color: '#000',
  },
  label: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  form: {
    flex: 1,
    padding: 20,
  },
  input: {
    backgroundColor: '#aaaaaa50',
    marginTop: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    color: '#000',
  },
  subHeading: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
});
