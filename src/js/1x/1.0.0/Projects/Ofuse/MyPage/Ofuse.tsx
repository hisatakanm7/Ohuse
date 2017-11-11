import * as React from 'react';
import { connect } from 'react-redux';

export interface Props {
    image_url: any,
    comment: any,
    date: any
}
export class Ofuse extends React.Component <Props> {
    render() {
        const { image_url, comment, date } = this.props;
          return (
            <div>
                <div>
                    <img src={image_url}/>
                </div>
                <div>
                    {comment}
                </div>
                <div>
                    {date}
                </div>
            </div>
          )
      }
  }

const mapStateToProps = () => {
    return {
    };
};
const ContainerOfuse: any = connect<any>(
    mapStateToProps,
)(Ofuse);

export default ContainerOfuse;
