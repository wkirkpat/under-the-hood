import * as React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class Profile extends React.Component<
  IProfileProps,
  IProfileState
> {
  render() {
    return (
      <div>
        <Header
          hasLogin={false}
          subtitle=""
          title="Your Profile"
          hasMenu
          hasProfile
          hasSearch
        />
        <div className="container d-flex justify-content-between">
        <div className="card col-4 mt-5 ml-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Make: </li>
            <li className="list-group-item">Model: </li>
            <li className="list-group-item">Year: </li>
            <li className="list-group-item">Mileage: </li>
            <Link to="/maintenance/:vin">
              <li className="list-group-item">Maintenance</li>
            </Link>
          </ul>
        </div>
        <div className="col-4 mt-5 d-flex flex-column">
        <img
          src="https://www.vehiclehistory.com/evox_color_compressed/chevrolet/equinox/2006/3230/chevrolet-equinox-2006-001-3230-15U-768.jpg"
          height="200px"
          width="350px"
        ></img>
        <p>VIN: </p>
        </div>
        </div>
      </div>
    );
  }
}

interface IProfileProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

interface IProfileState {
  userInfo: {
    name: string;
  };
}
