import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';


class Navigation extends Component {
    render() {
            if (this.props.location.pathname === '/consultorevents') {
              return null
            }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to='/'>
                        geo
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <Link className="nav-link" to="/geoevents">geoevents</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/geo">geo</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/loaddata">Cargar data</Link>

                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}


export default withRouter(Navigation);
