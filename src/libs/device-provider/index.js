/*
 * Copyright (c) 2014-2016. JarkimZhu
 * This software can not be used privately without permission
 */

import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
/**
 * @author JarkimZhu
 * Created on 2016-06-02.
 * @version 0.1.0
 */
const DeviceProvider = {
  deviceId() {
    return DeviceInfo.getUniqueID();
  },

  OS() {
    return Platform.OS;
  },

  device() {
    return DeviceInfo.getDeviceName();
  },

  language() {
    return DeviceInfo.getDeviceLocale();
  },

  store() {
    if (global.__DEV__) {
      return 'dev';
    } else {
      return 'self';
    }
  },

  version() {
    return DeviceInfo.getVersion();
  },

  appName() {
    return 'unknow';
  },

  model() {
    return DeviceInfo.getModel();
  },

  systemName() {
    return DeviceInfo.getSystemName();
  },
};

export default DeviceProvider;
