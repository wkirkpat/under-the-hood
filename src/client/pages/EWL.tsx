import React from 'react';
import Header from '../components/Header';
import WarningLight from '../components/WarningLight';
import data from '../data/ewl.json';

export default class EWL extends React.Component<IEWLProps> {
  render() {
    console.log(data);
    return <div>
      <Header title="Dashboard Warning Light" subtitle="" hasLogin={false} hasMenu hasProfile hasSearch />
      <img src="" />
      <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "x-large", marginTop: "30px" }}>UNDERSTANDING WHAT EACH WARNING LIGHT MEANS</div>
      <div style={{ textAlign: "center" }}>This guide is intended to give insight into each car warning light, symbols, and indicators.</div>
      <div style={{margin:"25px", backgroundColor: "#F2F3F4", borderRadius:"20px"}}>
        {
          data.map((group: any) => <div style={{ padding: "50px" }}>
            <div style={{ marginBottom: "50px" }}>
              <span style={{ fontSize:"x-large", padding:"15px 80px", backgroundColor:"#15c1dc4d", border:"1px solid black", fontWeight:"bold", borderRadius:"12px" }}>{group.groupTitle}</span>
            </div>
            <div style={{ display: "grid", gridGap: "50px", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
              {
                group.groupItems.map((item: any) => <WarningLight icon={item.icon} title={item.title} description={item.description} />)
              }
            </div>
          </div>)
        }
      </div>
    </div>
  }
}

interface IEWLProps { }
