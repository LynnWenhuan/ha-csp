export default class TimeUtils {
  static sleep(time) {
    return new Promise((reslve) => {
      setTimeout(() => {
        reslve();
      }, time);
    });
  }
}



//  effects:{} 中生效
function* counting() {
  //   倒计时
  for (let i = 60; i > 0; i -= 1) {
    const payload = i > 1 ? { count: i, isSend: true } : { isSend: false };
    yield put({ type: 'saveCountTime', payload });
    yield call(TimeUtils.sleep, 1000);
  }
}

const task = yield fork(counting);
try {
  yield call(UserService.sendCode, body); //  倒计时与调用发送短信接口并发执行
  // yield put({ type: '@@DVA_LOADING/HIDE', payload: { namespace: 'user', actionType: 'user/getSmscode' } });
} catch (e) {
  yield cancel(task);
  yield put({ type: 'saveCountTime', payload: { count: 0, isSend: false } });
  throw e;
}