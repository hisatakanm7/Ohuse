import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { RouteWithSubRoutes } from '../RouteWithSubRoutes.js';
import { filterCreators, getCreators } from '../action';
import { CircleIcon } from './ModalComponents/CircleIcon';
import { PullToRefresh } from '/Users/onikiyuuki/Downloads/pulltorefresh.js-master//dist/pulltorefresh.js';

export class Search extends React.Component {
    constructor() {
      super();
    }
    componentWillMount() {
      this.props.getCreators();
    }
    componentDidMount() {
      PullToRefresh.init({
        mainElement: '#main', // above which element?
        onRefresh: function(){
          var promise = new Promise(
            function(resolve, reject){
              setTimeout(()=>{
                resolve();
                alert('refresh');
              }, 1500);
            }
          );
          return promise;
        }
      });
    }
    render() {
      const { user, creators } = this.props;
      const info = user.toJSON().info;
      console.log(creators.get('all'));
      const creatorsDom = creators.get('filtered').toJS().map((key, value) => {
        console.log(value);
        return (
          <CircleIcon key={key} image_url={value.image_url} />
        )
      })
        return (
          <div className="my_page">
            <div id="header">
              ヘッダ
            </div>
            <div id="main">
              コンテンツ
            </div>
            <div id="footer">
              フッタ
            </div>
              <div>
                <input type="text" onChange={(e) => this.props.filterCreators(e.target.value)} />
              </div>
              {creatorsDom}
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  const { user, creators } = state;
  return {
    user: user,
    creators: creators,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterCreators: screen_name =>  dispatch(filterCreators(screen_name)),
    getCreators: () =>  dispatch(getCreators()),
  };
};


const ContainerSearch = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);

export default ContainerSearch;
