import React from "react";
import ContainerCircleIconsBody from './ModalComponents/CircleIconsBody.js'
import ContainerEventDetail from './ModalComponents/EventDetail.js'

export const ModalBody = (props) => {
  switch (props.modal.toJSON().component) {
    case 'ContainerCircleIconsBody':
        return (<ContainerCircleIconsBody />)
    case 'ContainerEventDetail':
        return (<ContainerEventDetail />)
default:
      return (<div></div>)
  }
}