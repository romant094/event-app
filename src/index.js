/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/scss/bootstrap.scss';
import {CookiesProvider} from 'react-cookie';
import App from "./componens/app";

const EventApp = () => {
    return (
        <Router>
            <CookiesProvider>
                <App/>
            </CookiesProvider>
        </Router>
    )
};

ReactDOM.render(
    <EventApp/>,
    document.getElementById('root')
);
