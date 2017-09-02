import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Main from './Main';

class App extends Component {
    render() {
        return(
            <div className="container-fluid">
                <Header />
                <Main />
                <h1>Root Component</h1>
                {this.props.children}
            </div>
        );
    }
}

App.PropTypes = {
    children: PropTypes.object.isRequired
};

export default App;