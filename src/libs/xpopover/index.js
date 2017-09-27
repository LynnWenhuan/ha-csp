import React from 'react';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import PopoverRoot from '../popover-root-page'

 class Popover extends React.Component {
  static defaultProps = {
    onSelect: () => { },
  };
  static Item = MenuOption;
  render() {
    const {
      children, onSelect, overlay, disabled, contextStyle,
      name, style, triggerStyle, overlayStyle, renderOverlayComponent,
    } = this.props;
    const menuOptionsProp = {
      optionsContainerStyle: overlayStyle,
      renderOptionsContainer: renderOverlayComponent,
    };
    return (
      <Menu name={name} onSelect={onSelect} style={style}>
              <MenuTrigger disabled={disabled} style={triggerStyle}>
                {children}
              </MenuTrigger>
              <MenuOptions {...menuOptionsProp}>
                {overlay}
              </MenuOptions>
            </Menu>
    );
  }
}

export {
  Popover,
  PopoverRoot
}
