/**
 * Created by wenboh on 2017/05/17
 */
export default class ArrayUtils {
  static getObjArrIndex(arr, attr, value) {
    let index = -1;
    if (arr && arr.length > 0) {
      for (const i in arr) {
        if (arr[i][attr] === value) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  static getObjByValue(arr, attr, value) { // 通过属性值获取对象
    let index = -1;
    if (arr && arr.length > 0) {
      for (const i in arr) {
        if (arr[i][attr] === value) {
          index = i;
          break;
        }
      }
    }
    return arr[index] || {};
  }
}
