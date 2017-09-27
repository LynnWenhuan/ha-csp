/*
 * Copyright (c) 2014-2016. JarkimZhu
 * This software can not be used privately without permission
 */

/**
 * @author JarkimZhu
 * Created on 2016-06-02.
 * @version 0.1.0
 * 依赖react-native-storage
 */
const DeviceProvider = {
  _RANDOM_TABLE: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  _DEVICE_ID_KEY: 'DEVICE_ID',

  async deviceId() {
    let deviceId;
    try {
      deviceId = await storage.load({
        key: DeviceProvider._DEVICE_ID_KEY,
      });
    } catch (e) {
      deviceId = DeviceProvider._random(16);
      storage.save({
        key: DeviceProvider._DEVICE_ID_KEY,
        data: deviceId,
        expires: null,
      });
    }
    return deviceId;
  },

  OS() {
    const ua = window.navigator.userAgent;
    const m = ua.match(new RegExp('\\((.| )+?\\)', 'ig'));
    if (m && m.length > 0) {
      try {
        let tmp = m[0];
        tmp = tmp.substring(1, tmp.lastIndexOf(')'));
        const arr = tmp.split(/;\s/);
        return `${arr[0]}; ${arr[1]}`;
      } catch (e) {
        console.error(e);
      }
    }
    return 'unknow';
  },

  device() {
    const ua = window.navigator.userAgent;
    const m = ua.match(new RegExp('\\((.| )+?\\)', 'ig'));
    if (m && m.length > 0) {
      try {
        let tmp = m[0];
        tmp = tmp.substring(1, tmp.lastIndexOf(')'));
        const arr = tmp.split(/;\s/);
        return arr[2];
      } catch (e) {
        console.error(e);
      }
    }
    return 'unknow';
  },

  language() {
    return window.navigator.browserLanguage || window.navigator.language;
  },

  /* eslint-disable */
  store() {
    return STORE;
  },

  version() {
    return VERSION;
  },

  appName() {
    return APP_NAME;
  },

  systemName() {
    return 'html';
  },
  /* eslint-enable */

  _random: (n) => {
    const deviceId = new Array(n);
    const table = DeviceProvider._RANDOM_TABLE;
    const length = table.length;
    for (let i = 0; i < n; i += 1) {
      const index = Math.round(Math.random() * length);
      deviceId[i] = table.charAt(index);
    }
    return deviceId.join('');
  },
};

export default DeviceProvider;
