import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>首页</Text>
        <Button
          title="第一天"
          onPress={() => this.props.navigation.navigate('Day01')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 0
  },
  img: {
    width: '120%', 
    height: 340
  },
  title: {
    fontSize: 24,
    color: 'red'
  }
});
