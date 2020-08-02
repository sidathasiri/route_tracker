import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Signup for Tracker</Text>
      </Spacer>
      <Spacer>
        <Input label='Email' />
      </Spacer>
      <Spacer>
        <Input label='Password' />
      </Spacer>
      <Spacer>
        <Button
          title='Sign Up'
          onPress={() => navigation.navigate('TrackList')}
        />
      </Spacer>
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150,
  },
});

export default SignUpScreen;
