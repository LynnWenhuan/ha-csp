
import { StyleSheet } from 'react-native';
import variables from 'antd-mobile/lib/style/themes/default';

const COMMON = {
  flex: 1,
  height: variables.navbar_height,
  alignItems: 'center',
  justifyContent: 'center',
};

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: variables.navbar_height,
    backgroundColor: variables.brand_primary,
  },
  left: {
    ...COMMON,
    justifyContent: 'center',
  },
  title: {
    ...COMMON,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18,
    color: 'white',
  },
  right: {
    ...COMMON,
  },
});
