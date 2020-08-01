import React from 'react';
import Header from '../components/Header'

export default class DIY extends React.Component<IDIYProps, IDIYState> {
    render() {
        return <div>
            <Header title="Do It Yourself" subtitle="subtitle" hasLogin hasMenu hasProfile hasSearch/>
        </div>
    }
}
<ul class="list-group">
  <li class="list-group-item"> Tires</li>
  <li class="list-group-item">Oil and Filter</li>
  <li class="list-group-item">Waxing</li>
  <li class="list-group-item">Fluids</li>
  <li class="list-group-item">Spark Plugs</li>
  <li class="list-group-item">Battery</li>
  <li class="list-group-item">Lights</li>
  <li class="list-group-item">Shocks and Struts</li>
  <li class="list-group-item">Wind Shield Wipers</li>
</ul>

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