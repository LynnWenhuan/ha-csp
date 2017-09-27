import React from 'react';
import { List, Text } from 'antd-mobile';

import { style } from '../../../theme/styles';

export default class HighlightItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== this.state.checked) {
      this.setState({
        checked: nextProps.checked,
      });
    }
  }
  _onClick = () => {
    this.setState({ checked: !this.state.checked });
    if (this.props.onChange) {
      this.props.onChange(!this.state.checked);
    }
  }

  render() {
    // eslint-disable-next-line
    const { onChange, disabled, ...restProps } = this.props;
    return (
      <List.Item
        style={this.state.checked ? _style : null}
        activeStyle={{ backgroundColor: 'transparent' }}
        onClick={disabled ? null : this._onClick}
        {...restProps}
        extra={<Text onClick={(e) => { e.stopPropagation(); }}>{this.props.extra}</Text>}
      >
        <Text style={style.FONT_MID}>{this.props.children}</Text>
      </List.Item>);
  }
}

const _style = {
  backgroundColor: '#ddd',
};
