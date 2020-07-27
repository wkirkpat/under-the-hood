import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Header from '../components/Header'

export default class Landing extends React.Component {
    render() {
        return <div><Header title="Under the Hood" hasLogin/></div>
    }
}