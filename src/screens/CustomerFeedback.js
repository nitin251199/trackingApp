import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputField from '../components/CustomInput';
import {Button, RadioButton} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SignatureModal from '../components/modals/SignatureModal';
import {Color} from '../theme';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import SuccessModal from '../components/modals/SuccessModal';
import { getDateValue } from '../utils/dateFunctions';

export default function CustomerFeedback({navigation}) {
  const _scrollRef = React.useRef(null);

  const [customerName, setCustomerName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const [qualityOfTesting, setQualityOfTesting] = React.useState(0);
  const [timelyDispatch, setTimelyDispatch] = React.useState(0);
  const [handlingComplaint, setHandlingComplaint] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState(
    qualityOfTesting + timelyDispatch + handlingComplaint,
  );

  const [feedBackerName, setFeedBackerName] = React.useState('');
  const [date, setDate] = React.useState(new Date());

  const [signature, setSignature] = React.useState(
    'https://via.placeholder.com/250x100.png?text=Press+to+sign',
  );

  const [showSignatureModal, setShowSignatureModal] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    setTotalScore(qualityOfTesting + timelyDispatch + handlingComplaint);
  }, [qualityOfTesting, timelyDispatch, handlingComplaint]);

  const getScoreText = () => {
    if (totalScore >= 12) return 'Excellent';
    if (totalScore >= 9 && totalScore <= 11) return 'Very good';
    if (totalScore >= 6 && totalScore <= 8) return 'Good but need improvement';
    if (totalScore < 6) return ' Not satisfactory';
  };

  const onPrimaryPress = () => {
    setCustomerName('');
    setAddress('');
    setTelephone('');
    setQualityOfTesting(0);
    setTimelyDispatch(0);
    setHandlingComplaint(0);
    setFeedBackerName('');
    setDate(new Date());
    setSignature('https://via.placeholder.com/250x100.png?text=Press+to+sign');
    _scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
    setShowModal(false);
  };

  const openDobCalender = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: (event, date) => {
        setDate(date);
      },
      mode: 'date',
      is24Hour: false,
    });
  };

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={32} color={'#000'} />
        </TouchableOpacity>
        <Text style={styles.title}>Customer Feedback</Text>
      </View>
      <ScrollView
        ref={_scrollRef}
        keyboardShouldPersistTaps="always"
        style={styles.form}
        contentContainerStyle={{
          paddingBottom: 40,
        }}>
        <View>
          <Text style={styles.label}>Customer Name</Text>
          <InputField
            value={customerName}
            activeOutlineColor={'green'}
            onChangeText={text => setCustomerName(text)}
          />
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Text style={styles.label}>Address</Text>
          <InputField
            value={address}
            activeOutlineColor={'green'}
            onChangeText={text => setAddress(text)}
          />
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <Text style={styles.label}>Telephone No.</Text>
          <InputField
            value={telephone}
            activeOutlineColor={'green'}
            onChangeText={text => setTelephone(text)}
          />
        </View>
        <Text style={styles.subHeading}>
          Please rate the performance of our organization on the following five
          point scale:
        </Text>
        <View
          style={{
            marginTop: 20,
          }}>
          <Text style={styles.headingLabel}>Quality of Testing</Text>
          <View style={styles.radioContainer}>
            <View style={styles.radio}>
              <RadioButton
                value={5}
                color={Colors.primary}
                status={qualityOfTesting === 5 ? 'checked' : 'unchecked'}
                onPress={() => setQualityOfTesting(5)}
              />
              <Text style={styles.radioLabel}>Excellent</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value={4}
                color={Colors.primary}
                status={qualityOfTesting === 4 ? 'checked' : 'unchecked'}
                onPress={() => setQualityOfTesting(4)}
              />
              <Text style={styles.radioLabel}>Very good</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value={3}
                color={Colors.primary}
                status={qualityOfTesting === 3 ? 'checked' : 'unchecked'}
                onPress={() => setQualityOfTesting(3)}
              />
              <Text style={styles.radioLabel}>Good</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value={2}
                color={Colors.primary}
                status={qualityOfTesting === 2 ? 'checked' : 'unchecked'}
                onPress={() => setQualityOfTesting(2)}
              />
              <Text style={styles.radioLabel}>Average</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value={1}
                color={Colors.primary}
                status={qualityOfTesting === 1 ? 'checked' : 'unchecked'}
                onPress={() => setQualityOfTesting(1)}
              />
              <Text style={styles.radioLabel}>Poor</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
          }}>
          <Text style={styles.headingLabel}>Timely dispatch of reports</Text>
          <View style={styles.radioContainer}>
            <View style={styles.radio}>
              <RadioButton
                value={5}
                color={Colors.primary}
                status={timelyDispatch === 5 ? 'checked' : 'unchecked'}
                onPress={() => setTimelyDispatch(5)}
              />
              <Text style={styles.radioLabel}>Excellent</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value={4}
                color={Colors.primary}
                status={timelyDispatch === 4 ? 'checked' : 'unchecked'}
                onPress={() => setTimelyDispatch(4)}
              />
              <Text style={styles.radioLabel}>Very good</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value={3}
                color={Colors.primary}
                status={timelyDispatch === 3 ? 'checked' : 'unchecked'}
                onPress={() => setTimelyDispatch(3)}
              />
              <Text style={styles.radioLabel}>Good</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value={2}
                color={Colors.primary}
                status={timelyDispatch === 2 ? 'checked' : 'unchecked'}
                onPress={() => setTimelyDispatch(2)}
              />
              <Text style={styles.radioLabel}>Average</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value={1}
                color={Colors.primary}
                status={timelyDispatch === 1 ? 'checked' : 'unchecked'}
                onPress={() => setTimelyDispatch(1)}
              />
              <Text style={styles.radioLabel}>Poor</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
          }}>
          <Text style={styles.headingLabel}>Handling of Complaint</Text>
          <View style={styles.radioContainer}>
            <View style={styles.radio}>
              <RadioButton
                value={5}
                color={Colors.primary}
                status={handlingComplaint === 5 ? 'checked' : 'unchecked'}
                onPress={() => setHandlingComplaint(5)}
              />
              <Text style={styles.radioLabel}>Excellent</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value={4}
                color={Colors.primary}
                status={handlingComplaint === 4 ? 'checked' : 'unchecked'}
                onPress={() => setHandlingComplaint(4)}
              />
              <Text style={styles.radioLabel}>Very good</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value={3}
                color={Colors.primary}
                status={handlingComplaint === 3 ? 'checked' : 'unchecked'}
                onPress={() => setHandlingComplaint(3)}
              />
              <Text style={styles.radioLabel}>Good</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value={2}
                color={Colors.primary}
                status={handlingComplaint === 2 ? 'checked' : 'unchecked'}
                onPress={() => setHandlingComplaint(2)}
              />
              <Text style={styles.radioLabel}>Average</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value={1}
                color={Colors.primary}
                status={handlingComplaint === 1 ? 'checked' : 'unchecked'}
                onPress={() => setHandlingComplaint(1)}
              />
              <Text style={styles.radioLabel}>Poor</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.headingLabel}>Total Score:</Text>
          <Text style={{...styles.label, fontSize: 14, marginLeft: 10}}>
            {getScoreText()} ({totalScore})
          </Text>
        </View>
        <View style={{marginTop: 45, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Feedbacker Name</Text>
            <InputField
              value={feedBackerName}
              activeOutlineColor={'green'}
              onChangeText={text => setFeedBackerName(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Date</Text>
            <InputField
              value={getDateValue(date)}
              activeOutlineColor={'green'}
              onChangeText={text => setDate(text)}
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
            />
          </View>
        </View>
        <View>
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
  headingLabel: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 16,
  },
  form: {
    flex: 1,
    padding: 20,
  },
  subHeading: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  radio: {
    alignItems: 'center',
  },
  radioLabel: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontSize: 12,
    marginTop: 5,
  },
});
