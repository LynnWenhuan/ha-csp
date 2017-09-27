import React from 'react';
import AntPopover from './antPopover'
import PopoverRoot from '../popover-root-page'

 class Popover extends React.Component {
  static Item = AntPopover.Item;
  render() {
    return (
       <AntPopover {...this.props}/>
    );
  }
}

export {
  Popover,
  PopoverRoot
};
