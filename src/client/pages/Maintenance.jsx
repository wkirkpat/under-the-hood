import React from 'react';
import Header from '../components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Maintenance extends React.Component {
    render() {
        return <div>
            <Header title="Maintenance" hasMenu hasProfile hasSearch/>
        </div>
    }
}