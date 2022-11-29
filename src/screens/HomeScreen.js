import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topText}>Good Morning</Text>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://w3schools.com/howto/img_avatar.png',
          }}
        />
      </View>
      <View style={styles.mainview}>
        <Text style={styles.mainText}>Your Forms</Text>
        <ScrollView
          style={styles.scrollview}
          showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Requisition')}
              style={{
                ...styles.card,
                backgroundColor: '#feca57',
                borderColor: '#ff9f43',
              }}>
              <Text style={styles.subText}>Requisition formate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Feedback')}
              style={{
                ...styles.card,
                backgroundColor: '#ff6b6b',
                borderColor: '#ee5253',
              }}>
              <Text style={styles.subText}>CUSTOMER FEEDBACK</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Noise')}
              style={{
                ...styles.card,
                backgroundColor: '#48dbfb',
                borderColor: '#0abde3',
              }}>
              <Text style={styles.subText}>NOISE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Water')}
              style={{
                ...styles.card,
                backgroundColor: '#1dd1a1',
                borderColor: '#10ac84',
              }}>
              <Text style={styles.subText}>WATER</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AAQM')}
              style={{
                ...styles.card,
                backgroundColor: '#54a0ff',
                borderColor: '#2e86de',
              }}>
              <Text style={styles.subText}>AAQM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Emission')}
              style={{
                ...styles.card,
                backgroundColor: '#5f27cd',
                borderColor: '#341f97',
              }}>
              <Text style={styles.subText}>EMISSION</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
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
    justifyContent: 'space-between',
  },
  topText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  mainview: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    elevation: 10,
  },
  mainText: {
    fontSize: 18,
    marginVertical: 15,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  section: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: 'red',
    elevation: 5,
    borderWidth: 3,
    borderColor: 'pink',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  subText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
});
