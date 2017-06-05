import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import axios from "axios";
import styles from './scss/Header.scss';

export class Header extends React.Component {
    render() {
        return (
            <h1 className="header">
              ヘッダー
            </h1>
        )
    }
}

const mapStateToProps = (state) => {
    const { works } = state;
    return {
        works: works
    };
};

const ContainerHeader = connect(
    mapStateToProps,
)(Header);

export default ContainerHeader;
