
import React from 'react';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import NavBar from '../components/nav-bar';

export default class Popover extends React.Component {
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
      <MenuContext style={contextStyle}>
        <NavBar
          style={{ backgroundColor: 'blue', height: 20 }}
          rightContent={
            <Menu name={name} onSelect={onSelect} style={style}>
              <MenuTrigger disabled={disabled} style={triggerStyle}>
                {children}
              </MenuTrigger>
              <MenuOptions {...menuOptionsProp}>
                {overlay}
              </MenuOptions>
            </Menu>
          }
        >
          title
        </NavBar>
      </MenuContext>
    );
  }
}
