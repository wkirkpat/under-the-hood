import React from 'react';
import DIY from './DIY';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

export default function FuncDIY() {
    let { path, url } = useRouteMatch();
    return <DIY
    title="title"
    hasMenu
    hasLogin
    hasProfile
    hasSearch
    subtitle="subtitle"
    diyPath={path}
    diyURL={url}/>
 }