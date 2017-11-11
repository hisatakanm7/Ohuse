import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { RouteWithSubRoutes } from '../../../RouteWithSubRoutes';
import { filterCreators, getCreators } from '../../../Redux/Action/action';
import { CircleIcon } from '../../../Common/Components/ModalComponents/CircleIcon';
// import { PullToRefresh } from '/Users/onikiyuuki/Downloads/pulltorefresh-master//dist/pulltorefresh';

export interface Props {
  user: any,
  creators: any,
  filterCreators: any,
  getCreators: any,

}
export class Search extends React.Component <Props, any> {
    constructor() {
      super()
      this.state = {
        hasReceived: false,
        creators: '',
      }
      this.handleFilterCreators = this.handleFilterCreators.bind(this);
    }
    componentWillMount() {
      this.props.getCreators((creators: any) => this.setState({
        hasReceived: true,
        creators: creators,
      }));
    }
    handleFilterCreators(searchValue: any) {
      const creators = this.props.creators.get('all').filter((creator: any) => 
        creator.get('screen_name').startsWith('@' + searchValue)
      )
      this.setState({
        creators: creators,
      })
    }
    render() {
      console.log(this.state);
      const { user, creators } = this.props;
      const info = user.toJSON().info;
      const creatorsDom = (this.state.hasReceived) 
      ? this.state.creators.toJS().map((value: any, key: any) => {
        return (
          <CircleIcon id={value.id} key={key} name={value.screen_name} image_url={value.image_url} />
        )
      })
      : '';
        return (
          <div className="my_page">
              <div>
                クリエイターを探そう！！
              </div>
              <div>
                <input type="text" onChange={(e) => this.handleFilterCreators(e.target.value)} />
              </div>
              {(this.state.hasReceived) && creatorsDom}
          </div>
        )
    }
}

const mapStateToProps = (state: {user: any, creators: any}) => {
  const { user, creators } = state;
  return {
    user: user,
    creators: creators,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    filterCreators: (screen_name: string) =>  dispatch(filterCreators(screen_name)),
    getCreators: (successAction: any) =>  dispatch(getCreators(successAction)),
  };
};


const ContainerSearch = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);

export default ContainerSearch;
