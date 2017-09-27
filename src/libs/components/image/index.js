

/**
 * Created by LynnLin on 2017/06/30.
 */

import React from 'react';
import { Image as RNImage, TouchableOpacity } from 'react-native';

function Image(props) {
  const { onClick, ...restProps } = props;
  if (onClick) {
    return (
      <TouchableOpacity onPress={onClick}>
        <RNImage {...restProps} />
      </TouchableOpacity>
    );
  } else {
    return (
      <RNImage {...restProps} />
    );
  }
}

export default Image;
