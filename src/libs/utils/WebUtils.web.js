/*
 * Copyright (c) 2014-2016. JarkimZhu
 * This software can not be used privately without permission
 */

import httpClient from '../network/HttpClient';

/**
 * Created on 2016/9/6.
 *
 * @author JarkimZhu
 * @class
 */
export default class WebUtils {
  static getParamFromQueryString(key) {
    const queryString = window.location.search;
    if (queryString) {
      const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
      const r = queryString.substr(1).match(reg);
      if (r !== null) return r[2];
    }
    return null;
  }

  static async loadJson(url) {
    const response = await httpClient.get(url);
    return await response.json();
  }
}
