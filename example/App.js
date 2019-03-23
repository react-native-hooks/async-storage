import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import useAsyncStorage from '@rnhooks/async-storage';

const key = '@Example';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  type: {
    margin: 20,
    fontSize: 20,
  },
});

function App() {
  const [storageItem, updateStorageItem, clearStorageItem] = useAsyncStorage(
    key,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.type}>{`Storage Value: ${storageItem}`}</Text>
      <Button
        title="Update Item"
        onPress={() => updateStorageItem('Test String')}
      />
      <Button title="Clear Item" onPress={() => clearStorageItem()} />
    </View>
  );
}

export default App;
