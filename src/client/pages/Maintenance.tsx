import React from "react";
import Header from "../components/Header";
import { TextField } from "@material-ui/core";

export default class Maintenance extends React.Component<IMaintenanceProps, IMaintenanceState> {
  render() {
    return (
      <>
        <div>
          <Header
            hasLogin
            subtitle="subtitle"
            title="Maintenance"
            hasMenu
            hasProfile
            hasSearch
          />
        </div>
        <div className="carInfo">
          <h2 className="user">Will Kirkpatrick</h2>
          <p className="make">Chevrolet</p>
          <p className="model">Equinox</p>
          <p className="year">2015</p>
        </div>
        <img
          src="https://www.vehiclehistory.com/evox_color_compressed/chevrolet/equinox/2006/3230/chevrolet-equinox-2006-001-3230-15U-768.jpg"
          height="200px"
          width="350px"
        ></img>
          <div className="previousOilChange mt-2">
            <h2 className="card-title">Previous Oil Change:</h2>
            <p className="card-text">Oil Type:</p>
            <p className="card-text">Oil Filter:</p>
            <p className="card-text">Date:</p>
            <TextField
              id="datetime-local"
              label="Previous appointment"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className="container"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        <div className="nextOilChange mt-2">
          <h2 className="card-title">Next Oil Change:</h2>
          <p className="card-text">Oil Type:</p>
          <p className="card-text">Oil Filter:</p>
          <p className="card-text">Date:</p>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="previousBrakeChange">
          <h2 className="card-title">Previous Brake Change:</h2>
          <p className="card-text">Brake Pads Front:</p>
          <TextField
            id="datetime-local"
            label="Previous appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Brake Pads Rear:</p>
          <TextField
            id="datetime-local"
            label="Previous appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Brake Routers Front:</p>
          <TextField
            id="datetime-local"
            label="Previous appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Brake Routers Rear:</p>
          <TextField
            id="datetime-local"
            label="Previous appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Brake Calipers:</p>
          <TextField
            id="datetime-local"
            label="Previous appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Brake Drums:</p>
          <TextField
            id="datetime-local"
            label="Previous appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Brake Hoses:</p>
          <TextField
            id="datetime-local"
            label="Previous appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Brake Line:</p>
        </div>
        <div className="nextBrakeChange">
          <h2 className="card-title">Next Brake Change:</h2>
          <p className="card-text">Brake Pads Front:</p>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Brake Pads Rear:</p>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Brake Routers Front:</p>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Brake Routers Rear:</p>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Brake Calipers:</p>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Brake Drums:</p>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Brake Hoses:</p>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Brake Line:</p>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="previousBatterySwap">
          <h2 className="card-title">Previous Battery Swap:</h2>
          <p className="card-text">Group Size:</p>
          <p className="card-text">Cold Cranking Amps:</p>
          <p className="card-text">Date:</p>
          <TextField
            id="datetime-local"
            label="Previous appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="nextBatterySwap">
          <h2 className="card-title">Next Battery Swap:</h2>
          <p className="card-text">Group Size:</p>
          <p className="card-text">Cold Cranking Amps:</p>
          <p className="card-text">Date:</p>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="previousTireMaintenance">
          <h2 className="card-title">Previous Tire Maintenance</h2>
          <p className="card-text">Tires Rotated:</p>
          <TextField
            id="datetime-local"
            label="Previous appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Tires Swapped:</p>
          <TextField
            id="datetime-local"
            label="Previous appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Tires Size:</p>
          <p className="card-text">Tires Air Pressure:</p>
        </div>
        <div className="nextTireMaintenance">
          <h2 className="card-title">Next Tire Maintenance</h2>
          <p className="card-text">Tires Rotated:</p>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Tires Swapped:</p>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className="container"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p className="card-text">Tires Size:</p>
          <p className="card-text">Tires Air Pressure:</p>
        </div>
      </>
    );
  }
}

interface IMaintenanceProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

interface IMaintenanceState {
  userInfo: {
    name: string;
  };
}
