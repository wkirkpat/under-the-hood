import React from 'react';
import Header from '../components/Header';
import WarningLight from '../components/WarningLight';
import data from '../data/ewl.json';

export default class EWL extends React.Component<IEWLProps, IEWLState> {
  render() {
    console.log(data);
    return <div style={{backgroundColor:"#F2F3F4"}}>
      <Header title="Dashboard Warning Light" subtitle="" hasLogin={false} hasMenu hasProfile hasSearch />
      <img src="" />
      <div style={{textAlign:"center", fontWeight:"bold", fontSize:"x-large"}}>UNDERSTANDING WHAT EACH WARNING LIGHT MEANS</div>
      <div style={{textAlign:"center"}}>This guide is intended to give insight into each car warning light, symbols, and indicators.</div>
      {
        data.map((group:any) => <div style={{padding:"50px"}}>
          <div style={{textAlign:"center", marginBottom:"50px"}}>
            <span style={{padding:"15px 80px", backgroundColor:"white", border:"1px solid black", fontWeight:"bold"}}>{group.groupTitle}</span>
          </div>
          <div style={{ display: "grid", gridGap: "100px", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
            {
              group.groupItems.map((item:any) => <WarningLight icon={item.icon} title={item.title} description={item.description} />)
            }
          </div>
        </div>)
      }
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