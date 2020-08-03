import React from 'react';
import Header from '../components/Header'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DIYFuncItem from './DIYFuncItem';

export default class DIY extends React.Component<IDIYProps, IDIYState> {
  render() {
    return <div>
      <Header title="Do It Yourself" subtitle="subtitle" hasLogin hasMenu hasProfile hasSearch />
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* MENU */}
        <div style={{ flex: "1", paddingTop: "10px", backgroundColor: "#f5f5f5" }}>
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${this.props.diyURL}/tire`}>Tires</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${this.props.diyURL}/oilandfilter`}>Oil and Filter</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${this.props.diyURL}/waxing`}>Waxing</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${this.props.diyURL}/fluids`}>Fluids</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${this.props.diyURL}/sparkplugs`}>Spark Plugs</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${this.props.diyURL}/battery`}>Battery</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${this.props.diyURL}/lights`}>Lights</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${this.props.diyURL}/shocksandstruts`}>Shocks and Struts</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${this.props.diyURL}/windshieldwipers`}>Wind Shield Wipers</Link></div>
          <hr style={{ marginBottom: "0px" }} />
        </div>
        <div style={{ flex: "5" }}>
          <Router>
            <Switch>
              <Route exact path={this.props.diyPath}>
                <div>Default</div>
              </Route>
              <Route path={`${this.props.diyPath}/:diyID`}>
                <DIYFuncItem/>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
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
  diyPath: string;
  diyURL: string;
}

interface IDIYState {
  userInfo: {
    name: string;
  };
}