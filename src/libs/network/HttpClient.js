/*
 * Copyright (c) 2014-2016. JarkimZhu
 * This software can not be used privately without permission
 */


import AjaxHttpClient from './AjaxHttpClient';

/**
 * @version 0.0.1-SNAPSHOT
 * @author JarkimZhu
 * Created on 2016/3/18.
 * @class
 */
class HttpClient {
  _impl = null;

  constructor() {
    this._impl = new AjaxHttpClient(false);
  }

  get(url, request, isScriptGet, enableCache) {
    return this._impl.get(url, request, isScriptGet, enableCache);
  }

  post(url, request) {
    return this._impl.post(url, request);
  }

  put(url, request) {
    return this._impl.put(url, request);
  }

  delete(url, request) {
    return this._impl.delete(url, request);
  }

  patch(url, request) {
    return this._impl.patch(url, request);
  }

  upload(url, request, pcb) {
    return this._impl.upload(url, request, pcb);
  }

  clearCookie() {
    this._impl.clearCookie();
  }
}

const httpClient = new HttpClient();
export default httpClient;
