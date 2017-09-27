
import ReactNative from 'react-native';

const React = require('react');
const model = require('../../../node_modules/react-native-menu/src/menu/makeModel')(React);
const styles = require('../../../node_modules/react-native-menu/src/menu/makeStyles')(ReactNative);

const config = { model, styles };

const MenuContext = require('./menuContext')(React, ReactNative, config);


export default class PopoverRoot extends React.Component {
  render() {
    const style = this.props.style || { height: '100%', backgroundColor: '#fff' };
    return (
      <MenuContext style={style}>{this.props.children}</MenuContext>
    );
  }
}
