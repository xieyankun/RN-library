// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';

import {
  StackNavigator
} from 'react-navigation';

import Index from "./src/components/Index";
import Day01 from "./src/components/Day01";

export default App = StackNavigator(
  {
    Index: { screen: Index },
    Day01: { screen: Day01 }
  },
  {
    headerTitle: 'hekk',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    }
  }
);