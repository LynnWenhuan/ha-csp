/**
  * Created on 2017/4/27.
  * @author JarkimZhu
  *
  */

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from '../sinosafe-icon-svg/index';
import styles from './style';


export default class NavBar extends React.Component {
  static defaultProps = {
    mode: 'dark',
    iconName: 'chevron-left',
    onLeftClick() {
    },
  };

  render() {
    const {
      children, iconName, leftContent, rightContent, onLeftClick,
      ...restProps
    } = this.props;

    return (
      <View {...restProps} style={styles.container}>
        <TouchableOpacity onPress={onLeftClick} style={styles.left}>
          {iconName ? <Icon type={iconName} icon={iconName} style={{ fill: '#fff' }} /> : null}
          <Text>{leftContent}</Text>
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.titleText}>{children}</Text>
        </View>
        <View style={styles.right}>
          {rightContent}
        </View>
      </View>
    );
  }
}
