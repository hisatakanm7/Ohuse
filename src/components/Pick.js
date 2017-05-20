import React from 'react';
import { Calendar } from 'antd';

export default class Pick extends React.Component {

    render() {
      function onPanelChange(value, mode) {
        console.log(value, mode);
      }
        return (
          <Calendar onPanelChange={onPanelChange} />
        )
    }
}
