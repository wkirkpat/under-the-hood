import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Header from '../components/Header'

export default class Login extends React.Component {
    render() {
        return <div>
            <Header title="Under the Hood" subtitle="Login"/>
            <div style={{top: "75%", left: "50%", position: "absolute"}}>
                <button>
                <Link to="/home">Sign In</Link>
            </button>
            </div>
        </div>
    }
}