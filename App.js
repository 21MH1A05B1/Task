// import { Text, SafeAreaView, StyleSheet } from 'react-native';

// // You can import supported modules from npm
// import { Card } from 'react-native-paper';

// // or any files within the Snack
// import AssetExample from './components/AssetExample';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.paragraph}>
//         Hello World
//       </Text>
//       <Card>
//         <AssetExample />
//       </Card>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from './src/UserScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="User Info" component={UserScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
