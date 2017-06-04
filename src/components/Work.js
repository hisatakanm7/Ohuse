import React from "react";

export default class Work extends React.Component {
    render() {
      const { work, num } = this.props;
      console.log('work');
        return (
            <div>
                { work.title }
            </div>
        )

    }
}
