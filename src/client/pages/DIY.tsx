import React from 'react';
import Header from '../components/Header'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import Tire from './diy/Tire';
import Battery from './diy/Battery';
import Fluids from './diy/Fluids';
import Lights from './diy/Lights';
import OilAndFilter from './diy/OilAndFilter';
import ShocksAndStruts from './diy/ShocksAndStruts';
import SparkPlugs from './diy/SparkPlugs';
import Waxing from './diy/Waxing';
import WindshieldWipers from './diy/WindshieldWipers';

const DIY: React.SFC<IDIYProps> = (props) => {
  let { path, url } = useRouteMatch();
    return <div>
      <Header title="Do It Yourself" subtitle="" hasLogin={false} hasMenu hasProfile hasSearch />
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* MENU */}
        <div style={{ flex: "1", paddingTop: "10px", backgroundColor: "#f5f5f5" }}>
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${url}/tire`}>Tires</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${url}/oilandfilter`}>Oil and Filter</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${url}/waxing`}>Waxing</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${url}/fluids`}>Fluids</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${url}/sparkplugs`}>Spark Plugs</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${url}/battery`}>Battery</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${url}/lights`}>Lights</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${url}/shocksandstruts`}>Shocks and Struts</Link></div>
          <hr />
          <div style={{ paddingLeft: "20px" }}><Link style={{color:"black"}} to={`${url}/windshieldwipers`}>Wind Shield Wipers</Link></div>
          <hr style={{ marginBottom: "0px" }} />
        </div>
        <div style={{ flex: "5" }}>
            <Switch>
              <Route exact path={path}>
                <h3 className="mx-auto mt-3" style={{width: "700px"}}>Choose a Topic to Learn About!</h3>
              </Route>
              <Route path={`${path}/:diyID`}>
                <DIYFuncItem/>
              </Route>
            </Switch>
        </div>
      </div>
    </div>
  }

  function DIYFuncItem() {
    let { diyID } = useParams();

    switch (diyID) {
        case 'tire':
            return <Tire/>;
        case 'battery':
            return <Battery />;
        case 'fluids':
            return <Fluids />;
        case 'lights':
            return <Lights />;
        case 'oilandfilter':
            return <OilAndFilter />;
        case 'shocksandstruts':
            return <ShocksAndStruts />;
        case 'sparkplugs':
            return <SparkPlugs />;
        case 'waxing':
            return <Waxing />;
        case 'windshieldwipers':
            return <WindshieldWipers />
    }
}

interface IDIYProps {}

export default DIY;