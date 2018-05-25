import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      timer: null
    }
  }
  start = () => {
    clearInterval(this.timer);

    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time += 1
      }))
    }, 1000)
  }
  reset = () => {
    clearInterval(this.timer);
    this.setState({
      time: 0,
      timer: null
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>第一天</Text>
        <Text>{this.state.time}</Text>
        <Button
          title="Start"
          onPress={this.start}
        />
        <Button
          title="Reset"
          onPress={this.reset}
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
