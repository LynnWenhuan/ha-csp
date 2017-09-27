import React from 'react';

export default class Image extends React.Component {
  render() {
    const { source, alt, ...restProps } = this.props;
    const _url = source.uri || source;
    return (
      <img src={_url} {...restProps} alt={alt} />
    );
  }
}
