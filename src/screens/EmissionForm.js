import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {mainStyles} from './RequisitionForm';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputField from '../components/CustomInput';
import {Color, Fonts} from '../theme';

export default function EmissionForm({navigation}) {
  const _scrollRef = React.useRef(null);

  const [fieldCode, setFieldCode] = React.useState('');
  const [thimbleType, setThimbleType] = React.useState('Cellulose');
  const [thimbleCode, setThimbleCode] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={32} color={'#000'} />
        </TouchableOpacity>
        <Text style={styles.title}>Emission Monitoring</Text>
      </View>
      <ScrollView
        ref={_scrollRef}
        keyboardShouldPersistTaps="always"
        style={styles.form}
        contentContainerStyle={{
          paddingBottom: 40,
        }}>
        <View>
          <Text style={styles.label}>Field Code</Text>
          <InputField
            value={fieldCode}
            activeOutlineColor={'green'}
            onChangeText={text => setFieldCode(text)}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>Thimble Type</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <TouchableOpacity
              onPress={() => setThimbleType('Cellulose')}
              style={{
                ...styles.radioStyle,
                backgroundColor:
                  thimbleType == 'Cellulose'
                    ? `${Color.primary}50`
                    : '#aaaaaa50',
              }}>
              <Text
                style={{
                  color: '#000',
                  fontFamily: Fonts.primaryRegular,
                  lineHeight: 14 * 1.5,
                }}>
                Cellulose
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setThimbleType('Glass')}
              style={{
                ...styles.radioStyle,
                backgroundColor:
                  thimbleType == 'Glass' ? `${Color.primary}50` : '#aaaaaa50',
                marginLeft: 5,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontFamily: Fonts.primaryRegular,
                  lineHeight: 14 * 1.5,
                }}>
                Glass
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>Thimble Code</Text>
          <InputField
            value={thimbleCode}
            activeOutlineColor={'green'}
            onChangeText={text => setThimbleCode(text)}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>Monitoring Point</Text>
          <InputField
            value={thimbleCode}
            activeOutlineColor={'green'}
            onChangeText={text => setThimbleCode(text)}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Started Date</Text>
            <InputField
              // value={flow}
              activeOutlineColor={'green'}
              // onChangeText={text => setFlow(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Closed Date</Text>
            <InputField
              // value={depth}
              activeOutlineColor={'green'}
              // onChangeText={text => setDepth(text)}
            />
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>Stack kit ID</Text>
          <InputField
            value={thimbleCode}
            activeOutlineColor={'green'}
            onChangeText={text => setThimbleCode(text)}
          />
        </View>
        <Text
          style={{
            color: '#000',
            fontFamily: Fonts.primaryBold,
            fontSize: 20,
            marginTop: 60,
          }}>
          PRIMARY DATA OF STACK
        </Text>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Type of Stack</Text>
            <InputField
              // value={flow}
              activeOutlineColor={'green'}
              // onChangeText={text => setFlow(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Type of fuel</Text>
            <InputField
              // value={depth}
              activeOutlineColor={'green'}
              // onChangeText={text => setDepth(text)}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Material of Construction</Text>
            <InputField
              // value={flow}
              activeOutlineColor={'green'}
              // onChangeText={text => setFlow(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Stack Top</Text>
            <InputField
              // value={depth}
              activeOutlineColor={'green'}
              // onChangeText={text => setDepth(text)}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1}}>
            <Text style={styles.label}>Stack Attached to</Text>
            <InputField
              // value={flow}
              activeOutlineColor={'green'}
              // onChangeText={text => setFlow(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.label}>Capacity</Text>
            <InputField
              // value={depth}
              activeOutlineColor={'green'}
              // onChangeText={text => setDepth(text)}
            />
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>
            Monitoring Platform height from ground level
          </Text>
          <InputField
            value={thimbleCode}
            activeOutlineColor={'green'}
            onChangeText={text => setThimbleCode(text)}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>Ampere generated (Only for DG)</Text>
          <InputField
            value={thimbleCode}
            activeOutlineColor={'green'}
            onChangeText={text => setThimbleCode(text)}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>
            Inside Diameter of Stack at sampling point
          </Text>
          <InputField
            value={thimbleCode}
            activeOutlineColor={'green'}
            onChangeText={text => setThimbleCode(text)}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>Cross Sectional Area of Stack</Text>
          <InputField
            value={thimbleCode}
            activeOutlineColor={'green'}
            onChangeText={text => setThimbleCode(text)}
          />
        </View>
        <Text
          style={{
            color: '#000',
            fontFamily: Fonts.primaryBold,
            fontSize: 20,
            marginTop: 60,
          }}>
          SECONDARY DATA OF STACK
        </Text>
        <Text style={{...styles.label, marginTop: 15}}>
          Ambient Temperature
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <InputField
              // value={flow}
              activeOutlineColor={'green'}
              // onChangeText={text => setFlow(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <InputField
              // value={depth}
              activeOutlineColor={'green'}
              // onChangeText={text => setDepth(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <InputField
              // value={depth}
              activeOutlineColor={'green'}
              // onChangeText={text => setDepth(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <InputField
              // value={depth}
              activeOutlineColor={'green'}
              // onChangeText={text => setDepth(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <InputField
              // value={depth}
              activeOutlineColor={'green'}
              // onChangeText={text => setDepth(text)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text style={{...styles.label}}>Average Temperature</Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primaryBold,
              fontSize: 22,
            }}>
            33.5 C / 301 K
          </Text>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>
            Barometric pressure Or Atmospheric pressure
          </Text>
          <InputField
            value={thimbleCode}
            activeOutlineColor={'green'}
            onChangeText={text => setThimbleCode(text)}
          />
        </View>
        <Text style={{...styles.label, marginTop: 15}}>
          Flue Gas Temperature
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <InputField
              // value={flow}
              activeOutlineColor={'green'}
              // onChangeText={text => setFlow(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <InputField
              // value={depth}
              activeOutlineColor={'green'}
              // onChangeText={text => setDepth(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <InputField
              // value={depth}
              activeOutlineColor={'green'}
              // onChangeText={text => setDepth(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <InputField
              // value={depth}
              activeOutlineColor={'green'}
              // onChangeText={text => setDepth(text)}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <InputField
              // value={depth}
              activeOutlineColor={'green'}
              // onChangeText={text => setDepth(text)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text style={{...styles.label}}>Average Temperature</Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primaryBold,
              fontSize: 22,
            }}>
            33.5 C / 301 K
          </Text>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>Absolute Stack pressure</Text>
          <InputField
            value={thimbleCode}
            activeOutlineColor={'green'}
            onChangeText={text => setThimbleCode(text)}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>No traverse as per dia</Text>
          <InputField
            value={thimbleCode}
            activeOutlineColor={'green'}
            onChangeText={text => setThimbleCode(text)}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>
            Pitot tube constant of type ‘S’ pitot
          </Text>
          <InputField
            value={thimbleCode}
            activeOutlineColor={'green'}
            onChangeText={text => setThimbleCode(text)}
          />
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
            // onPress={() => {
            //   setSelectedRecord({
            //     label: [
            //       'Field Code',
            //       'Sampling Locations',
            //       'Sample Source',
            //       'Sample Type',
            //       'Container Used',
            //     ],
            //     value: table1.map(item => {
            //       return {
            //         0: item.fieldCode1,
            //         1: item.samplingLocations,
            //         2: item.sampleSource,
            //         3: item.sampleType,
            //         4: item.containerUsed,
            //       };
            //     }),
            //   });
            //   setShowTableRecords(true);
            // }}
            >
              <Text
                style={{
                  color: Color.primary,
                  fontFamily: Fonts.primarySemiBold,
                }}>
                View records
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={mainStyles.label}>
              Stack gas deferential pressure at different traverse points (m/s)
            </Text>
            <InputField
              // value={sampleSource}
              activeOutlineColor={'green'}
              // onChangeText={text => setSampleSource(text)}
            />
          </View>
          <TouchableOpacity
            // onPress={addTable1}
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text style={{...styles.label}}>Arithmetic mean</Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.primaryBold,
              fontSize: 22,
            }}>
            33.5 m/s
          </Text>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>Gas Valocity in stack</Text>
          <InputField
            value={thimbleCode}
            activeOutlineColor={'green'}
            onChangeText={text => setThimbleCode(text)}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>
            Flue gas flow rate at stack conditions
          </Text>
          <InputField
            value={thimbleCode}
            activeOutlineColor={'green'}
            onChangeText={text => setThimbleCode(text)}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.label}>
            Flue gas flow rate at normal conditions
          </Text>
          <InputField
            value={thimbleCode}
            activeOutlineColor={'green'}
            onChangeText={text => setThimbleCode(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 25,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontFamily: Fonts.primaryBold,
                fontSize: 22,
              }}>
              33.5 m3/s
            </Text>
            <Text style={{...styles.label}}>Flow rate</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontFamily: Fonts.primaryBold,
                fontSize: 22,
              }}>
              33.5 m3
            </Text>
            <Text style={{...styles.label}}>Total gas sample</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ...mainStyles,
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
