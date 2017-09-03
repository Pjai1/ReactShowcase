import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Main from './Main';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const children = this.props.children;
        console.log(children)
        return(
            <div className="container-fluid">
                <Header />
                <Main />
                <h1>Root Component</h1>
                {children}
            </div>
        );
    }
}

App.PropTypes = {
    children: PropTypes.object.isRequired
};
