import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div className="jumbotron">
                <h1>Showcase App Home Page</h1>
                <Link to="about" className="btn btn-primary btn-lg">About me</Link>
            </div>
        );
    }
}

export default Home;