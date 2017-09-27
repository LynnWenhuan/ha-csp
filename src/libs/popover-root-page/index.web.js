
import React from 'react';

export default class PopoverRoot extends React.Component {
  render() {
    const style = this.props.style || { height: '100%' };
    return (
      <div style={style}>{this.props.children}</div>
    );
  }
}
