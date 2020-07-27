import React from 'react';
import Header from '../components/Header'

export default class DIY extends React.Component<IDIYProps, IDIYState> {
    render() {
        return <div>
            <Header title="Do It Yourself" subtitle="subtitle" hasLogin hasMenu hasProfile hasSearch/>
        </div>
    }
}

interface IDIYProps {
    subtitle: string;
    hasSearch: boolean;
    hasLogin: boolean;
    hasProfile: boolean;
    hasMenu: boolean;
    title: string;
  }
  
  interface IDIYState {
    userInfo: {
      name: string;
    };
  }