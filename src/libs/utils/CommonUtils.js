/*
 * Copyright (c) 2014-2016. JarkimZhu
 * This software can not be used privately without permission
 */

/**
 * @version 0.0.1-SNAPSHOT
 * @author JarkimZhu
 * Created on 2015/12/11.
 * @class
 */
class ArrayUtils {
  static remove(arr, toRemove) {
    if (isNaN(toRemove)) {
      for (let i = arr.length - 1; i >= 0; i -= 1) {
        if (arr[i] === toRemove) {
          arr.splice(i, 1);
          break;
        }
      }
    } else {
      arr.splice(toRemove, 1);
    }
    return arr;
  }

  static removeAll(arr, ...indexes) {
    for (let i = indexes.length - 1; i >= 0; i -= 1) {
      const index = indexes[i];
      arr.splice(index, 1);
    }
    return arr;
  }

  static contains(arr, value) {
    const index = ArrayUtils.indexOf(arr, value);
    return index !== -1;
  }

  static indexOf(arr, value) {
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
  }
}

class NumberUtils {
  static toFixed(num, scale) {
    if (num && typeof num === 'number') {
      const fixStr = num.toFixed(scale);
      if (scale === 0) {
        return parseInt(fixStr, 0);
      } else {
        return parseFloat(fixStr);
      }
    } else {
      return num;
    }
  }
}

class RandomUtils {
  static _DEFAULT_CHAR_TABLE = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static random(n, charTable) {
    const r = new Array(n);
    let table = charTable;
    if (!charTable) {
      table = RandomUtils._DEFAULT_CHAR_TABLE;
    }
    const length = table.length;
    for (let i = 0; i < n; i += 1) {
      const index = Math.round(Math.random() * length);
      r[i] = table.charAt(index);
    }
    return r.join('');
  }

  static randomInt(n) {
    const r = new Array(n);
    for (let i = 0; i < n; i += 1) {
      const num = Math.round(Math.random() * n);
      r[i] = num;
    }
    return parseInt(r.join(''), 0);
  }
}

export {
  ArrayUtils,
  NumberUtils,
  RandomUtils,
};
