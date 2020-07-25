import React from 'react';
import Header from '../components/Header'

export default class EWL extends React.Component {
    render() {
        return <div>
            <Header title="Engine Warning Light" hasMenu hasProfile hasSearch/>
        </div>
    }
}