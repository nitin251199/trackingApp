import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-paper';
import { storeDatasync } from '../storage/AsyncStorage';
import {postData} from '../API';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  //   const {login} = useContext(AuthContext);

  const handleLogin = async () => {
    if (email === '' || password === '') {
      return setError('Please enter your email and password');
    }

    // setLoading(true);
    // let result = await postData('api/getLogin', {email, password});
    // if (result.success) {
    //   setLoading(false);
    //   storeDatasync('user', result.data);
      navigation.replace('Home');
    // } else {
    //   setLoading(false);
    //   setError('Invalid email or password');
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaaaaa"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaaaaa"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button
        mode="elevated"
        elevation={5}
        onPress={handleLogin}
        buttonColor="black"
        // disabled={loading}
        dark
        style={styles.button}
        contentStyle={{
          height: 50,
        }}
        labelStyle={{
          fontSize: 18,
        }}
        loading={loading}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    color: '#000',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    // height: 40,
    borderRadius: 5,
    marginBottom: 10,
  },
});
