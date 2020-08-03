import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Tire from './diy/Tire';
import Battery from './diy/Battery';
import Fluids from './diy/Fluids';
import Lights from './diy/Lights';
import OilAndFilter from './diy/OilAndFilter';
import ShocksAndStruts from './diy/ShocksAndStruts';
import SparkPlugs from './diy/SparkPlugs';
import Waxing from './diy/Waxing';
import WindshieldWipers from './diy/WindshieldWipers';

export default function DIYFuncItem() {
    let { diyID } = useParams();

    switch (diyID) {
        case 'tire':
            return <Tire />
        case 'battery':
            return <Battery />
        case 'fluids':
            return <Fluids />
        case 'lights':
            return <Lights />
        case 'oilandfilter':
            return <OilAndFilter />
        case 'shocksandstruts':
            return <ShocksAndStruts />
        case 'sparkplugs':
            return <SparkPlugs />
        case 'waxing':
            return <Waxing />
        case 'windshieldwipers':
            return <WindshieldWipers />
    }
}