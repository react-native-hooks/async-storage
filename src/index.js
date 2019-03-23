/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';

export default key => {
  const [storageItem, setStorageItem] = useState(null);

  async function getStorageItem() {
    const data = await AsyncStorage.getItem(key);
    setStorageItem(data);
  }

  function updateStorageItem(data) {
    if (typeof data === 'string') {
      AsyncStorage.setItem(key, data);
      setStorageItem(data);
    }
    return data;
  }

  function clearStorageItem() {
    AsyncStorage.removeItem(key);
    setStorageItem(null);
  }

  useEffect(() => {
    getStorageItem();
  }, []);

  return [storageItem, updateStorageItem, clearStorageItem];
};
