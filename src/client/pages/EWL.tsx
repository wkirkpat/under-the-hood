import React from 'react';
import Header from '../components/Header'

export default class EWL extends React.Component<IEWLProps, IEWLState> {
    render() {
        return <div>
            <Header title="Engine Warning Light" subtitle="subtitle" hasLogin hasMenu hasProfile hasSearch/>
        </div>
    }
}

interface IEWLProps {
    subtitle: string;
    hasSearch: boolean;
    hasLogin: boolean;
    hasProfile: boolean;
    hasMenu: boolean;
    title: string;
  }
  
  interface IEWLState {
    userInfo: {
      name: string;
    };
  }