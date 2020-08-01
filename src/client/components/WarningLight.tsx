import React from "react";

export default class WarningLight extends React.Component<
  IHeaderProps
> {
  constructor(props: IHeaderProps) {
    super(props);
  }
  render() {
    return (
      <div style={{ padding:"20px", textAlign:"center" }}>
            <img src={this.props.icon} style={{height:"100px"}}/>
            <div style={{padding:"10px", backgroundColor:"white", border:"1px solid black", textAlign:"center", marginTop:"15px", marginBottom:"15px", fontWeight:"bold"}}>{this.props.title}</div>
            <div style={{textAlign:"left"}}>{this.props.description}</div>
      </div>
    );
  }
}

interface IHeaderProps {
  icon: string;
  title: string;
  description: string;
}