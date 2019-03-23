# @rnhooks/async-storage [![Build Status](https://travis-ci.com/react-native-hooks/async-storage.svg?branch=master)](https://travis-ci.com/react-native-hooks/async-storage) [![Maintainability](https://api.codeclimate.com/v1/badges/6497ec4103f7ff8f95d9/maintainability)](https://codeclimate.com/github/react-native-hooks/async-storage/maintainability) <a href="https://github.com/pritishvaidya/react-native-hooks/async-storage/blob/master/README.md"><img src="https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg" alt="module formats: umd, cjs, esm"></a>

> React Native hook for AsyncStorage

```
import useAsyncStorage from '@rnhooks/async-storage';

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
```

### Input
| Name  | Type  | Default | Description |
| :------------ |---------------:| :---------------| :-----|
| key | String | `null` | Async Storage Key |


### Output
| Name  | Type  | Default | Description |
| :------------ |---------------:| :---------------| :-----|
| storageItem | String | `null` | Async Storage Item |
| updateStorageItem | function | `() => {}` | Async Storage updater method |
| clearStorageItem | function | `() => {}` | Async Storage clear item method |

## Contribution
- [@pritishvaidya](mailto:pritishvaidya94@gmail.com) The main author.


## Questions

Feel free to [contact me](mailto:pritishvaidya94@gmail.com) or [create an issue](https://github.com/react-native-hooks/async-storage/issues/new)
