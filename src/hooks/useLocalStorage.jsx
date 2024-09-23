// src/hooks/useLocalStorage.js

import { useState } from 'react';
import StorageService from '../services/storageService';

function useLocalStorage(key, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => {
    return StorageService.getItem(key) || defaultValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    StorageService.setItem(key, value);
  };

  const removeValue = () => {
    setStoredValue(null);
    StorageService.removeItem(key);
  };

  return [storedValue, setValue, removeValue];
}

export default useLocalStorage;
