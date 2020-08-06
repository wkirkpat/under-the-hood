import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Header from "../components/Header";
import { TextField } from "@material-ui/core";
import { json } from "../utils/api";
import moment, { months } from "moment";
import { RouteComponentProps } from "react-router-dom";

const Maintance: React.FC<IMaintenanceProps> = (props) => {
  const [carInfo, setCarInfo] = useState([]);

  const handleUpdate = (e: any) => {
    let data = {
      column: e.target.id,
      value: e.target.value,
    };
    let result = json("/api/vehicles/update/1", "PUT", data);
    getCarInfo();
  };

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
  });

  useEffect(() => {
    getCarInfo();
  }, []);
  let getCarInfo = async () => {
    try {
      let info = await json(`/api/vehicles/info/1`);
      setCarInfo(info);
    } catch (e) {
      throw e;
    }
  };

  return (
    <>
      <div>
        <Header
          hasLogin={false}
          subtitle=""
          title="Maintenance"
          hasMenu
          hasProfile
          hasSearch
        />
      </div>
      <div className="carInformation">
        <h2 className="user">Will Kirkpatrick</h2>
        <p className="make">{carInfo[0]?.make}</p>
        <p className="model">{carInfo[0]?.model}</p>
        <p className="year">{carInfo[0]?._year}</p>
      </div>
      <img
        src="https://www.vehiclehistory.com/evox_color_compressed/chevrolet/equinox/2006/3230/chevrolet-equinox-2006-001-3230-15U-768.jpg"
        height="200px"
        width="350px"
      ></img>
      <div className="container d-flex border rounded justify-content-between">
        <div className="previousOilChange mt-2 mx-5">
          <h2 className="card-title">Previous Oil Change: </h2>
          <p className="card-text">Oil Type: {carInfo[0]?.oilType}</p>
          <p className="card-text">Oil Filter:</p>
          <p className="card-text">
            Date:{" "}
            {moment(carInfo[0] && carInfo[0].lastOilChange).format(
              "MM/DD/YYYY"
            )}
          </p>
          <div className="form-group row">
            <label htmlFor="lastOilChange" className="col-form-label ml-3 mr-1">
              Date:
            </label>
            <div className="">
              <input
                className="form-control"
                type="date"
                id="lastOilChange"
                onChange={handleUpdate}
              />
            </div>
          </div>
        </div>
        <div className="nextOilChange mt-2 ml-5">
          <h2 className="card-title">Next Oil Change:</h2>
          <p className="card-text">Oil Type: {carInfo[0]?.oilType}</p>
          <p className="card-text">Oil Filter:</p>
          <p className="card-text">
            Date:{" "}
            {moment(carInfo[0]?.lastOilChange).add(6, "months").calendar()}
          </p>
        </div>
      </div>
      <div className="previousBrakeChange">
        <h2 className="card-title">Previous Brake Change:</h2>
        <p className="card-text">
          Brake Pads Front:{carInfo[0]?.brakePadsFront}
        </p>
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
        <p className="card-text">Brake Pads Rear:{carInfo[0]?.brakePadRear}</p>
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
        <p className="card-text">
          Brake Routers Front:{carInfo[0]?.brakeRouterFront}
        </p>
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
        <p className="card-text">
          Brake Routers Rear:{carInfo[0]?.brakeRouterRear}
        </p>
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
        <p className="card-text">Brake Calipers:{carInfo[0]?.BrakeCalipers}</p>
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
        <p className="card-text">Brake Drums:{carInfo[0]?.brakeDrum}</p>
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
        <p className="card-text">Brake Hoses:{carInfo[0]?.brakeHoses}</p>
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
        <p className="card-text">Brake Line:{carInfo[0]?.brakeLines}</p>
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
        <p className="card-text">Battery Size:{carInfo[0]?.batterySize}</p>
        <p className="card-text">Cold Cranking Amps:</p>
        <p className="card-text">Date:{carInfo[0]?.batterySwap}</p>
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
        <p className="card-text">Battery Size:</p>
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
        <p className="card-text">Tires Rotated:{carInfo[0]?.tireRotation}</p>
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
        <p className="card-text">Tires Size:{carInfo[0]?.tireSize}</p>
        <p className="card-text">
          Tires Air Pressure:{carInfo[0]?.tirePressure}
        </p>
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
};

interface IMaintenanceProps extends RouteComponentProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

export default Maintance;
