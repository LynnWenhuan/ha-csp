
/**
 * Created on 2017/8/23.
 * @author LynnLin
 *
 */

import React from 'react';
import SvgUri from '../../react-native-svg-uri/index';
import svgs from '../../../assets/svgs';

export default class Icon extends React.Component {
  render() {
    const {
      style,
      color,
    } = this.props;
    const svgXmlData = svgs[this.props.icon];
    const { width, height, fill, ...restStyle } = style || { width: 22, height: 22 };

    if (!svgXmlData) {
      const errMsg = `没有"${this.props.icon}"这个icon，请下载最新的icomoo并 npm run build-js`;
      throw new Error(errMsg);
    }
    return (
      <SvgUri
        style={{ ...restStyle }}
        width={width || 22}
        height={height || 22}
        svgXmlData={svgXmlData}
        fill={fill}
      />
    );
  }
}
