import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=692806643,3222010621&fm=27&gp=0.jpg'
    };
    return (
      <View style={styles.container}>
        
        <Image source={pic} style={styles.img}/>
        <Text style={styles.title}>我的齐刘海</Text>
        <Button
          title="返回"
          onPress={() => this.props.navigation.navigate('Index')}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Bananas);

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
