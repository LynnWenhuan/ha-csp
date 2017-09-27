import httpClient from '../libs/network/HttpClient';
import { SERVER } from '../config';

/**
 * Created on 2017/4/28.
 * @author JarkimZhu
 * @class
 */
export default class HttpUtils {
  static _TOKEN_KEY = 'TOKEN'
  static _seq = 0;
  static _token = '';
  static _chaCode = null;

  static async post(url, body) {
    const uri = SERVER + url;
    const request = HttpUtils._createRequest(body);
    const response = await httpClient.post(uri, request);
    return HttpUtils._processResponse(response);
  }

  static async get(url) {
    const uri = SERVER + url;
    const request = {
      headers: {
        Token: HttpUtils._token,
        Seq: HttpUtils._seq += 1,
      },
    };
    const response = await httpClient.get(uri, request);
    return HttpUtils._processResponse(response);
  }

  static async put(url, body) {
    const uri = SERVER + url;
    const request = HttpUtils._createRequest(body);
    const response = await httpClient.put(uri, request);
    return HttpUtils._processResponse(response);
  }

  static async delete(url, body) {
    const uri = SERVER + url;
    const request = HttpUtils._createRequest(body);
    const response = await httpClient.delete(uri, request);
    return HttpUtils._processResponse(response);
  }

  static async patch(url, body) {
    const uri = SERVER + url;
    const request = HttpUtils._createRequest(body);
    const response = await httpClient.patch(uri, request);
    return HttpUtils._processResponse(response);
  }

  static async upload(url, body, pcb) {
    const uri = SERVER + url;
    const request = HttpUtils._createRequest(body);
    const response = await httpClient.upload(uri, request, pcb);
    return HttpUtils._processResponse(response);
  }

  static _createRequest(body) {
    const request = {
      headers: {
        Token: HttpUtils._token,
        Seq: HttpUtils._seq += 1,
        'Cha-Code': HttpUtils._chaCode,
      },
      body,
    };
    return request;
  }

  static async _processResponse(response) {
    let token;
    try {
      token = response.headers.get('Set-Token');
    } catch (e) {
      console.warn(e);
    }
    if (token) {
      HttpUtils._token = token;
      storage.save({
        key: HttpUtils._TOKEN_KEY,
        data: token,
        expires: null,
      });
    }
    const json = await response.json();
    const { code, message, data } = json;
    if (code === 0) {
      return data;
    } else {
      // eslint-disable-next-line
      throw { code, message };
    }
  }

  static async initToken() {
    const token = await HttpUtils._loadToken();
    HttpUtils._token = token;
  }

  static async getToken() {
    let token = HttpUtils._token;
    if (!token) {
      token = await HttpUtils._loadToken();
    }
    return token;
  }

  static removeToken() {
    HttpUtils._token = null;
    return storage.remove({ key: HttpUtils._TOKEN_KEY });
  }

  static setChaCode(chaCode) {
    HttpUtils._chaCode = chaCode;
  }

  static _loadToken() {
    return storage.load({
      key: HttpUtils._TOKEN_KEY,
    }).catch(() => {
      return null;
    });
  }
}
