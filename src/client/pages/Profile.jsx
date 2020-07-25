import React from 'react';
import Header from '../components/Header'

export default class Profile extends React.Component {
    render() {
        return <div>
            <Header title="Your Profile" hasMenu hasProfile hasSearch/>
        </div>
    }
}