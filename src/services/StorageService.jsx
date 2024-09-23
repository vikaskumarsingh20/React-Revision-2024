// src/services/storageService.js

import Cookies from 'js-cookie';

const StorageService = {
  // Local Storage Methods...
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  getItem: (key) => {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : null;
  },

  removeItem: (key) => {
    localStorage.removeItem(key);
  },

  clearAll: () => {
    localStorage.clear();
  },

  // Cookie Methods
  setCookie: (key, value, options) => {
    Cookies.set(key, value, options);
  },

  getCookie: (key) => {
    return Cookies.get(key);
  },

  removeCookie: (key) => {
    Cookies.remove(key);
  }
};

export default StorageService;
