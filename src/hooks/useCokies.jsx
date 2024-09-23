import { useState } from 'react';
import StorageService from '../services/storageService';

function useCookies(key, defaultValue) {
  const [cookieValue, setCookieValue] = useState(() => {
    return StorageService.getCookie(key) || defaultValue;
  });

  const setCookie = (value, options = {}) => {
    setCookieValue(value);
    StorageService.setCookie(key, value, options);
  };

  const removeCookie = () => {
    setCookieValue(null);
    StorageService.removeCookie(key);
  };

  return [cookieValue, setCookie, removeCookie];
}

export default useCookies;
