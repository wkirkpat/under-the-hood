import React from 'react';
import Header from '../components/Header'

export default class Home extends React.Component {
    render() {
        return <div><Header title="Under the Hood" hasMenu hasProfile hasSearch/></div>
    }
}