import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Header from "../components/Header";
import { json } from "../utils/api";
import moment, { months } from "moment";
import { RouteComponentProps } from "react-router-dom";
import "../scss/app"

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
      <div className="container d-flex justify-content-between mt-3">
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
      </div>
      <div className="container d-flex justify-content-between oilChange">
        <div className="previousOilChange mt-2 mr-4">
          <h2 className="card-title pr-5">Previous Oil Change: </h2>
          <p className="card-text">Oil Type: {carInfo[0]?.oilType}</p>
          <p className="card-text">Oil Filter:</p>
          <p className="card-text">
            Date:{" "}
            {moment(carInfo[0]?.lastOilChange).format(
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
        <div className="nextOilChange mt-2 ">
          <h2 className="card-title pr-5">Next Oil Change:</h2>
          <p className="card-text">Oil Type: {carInfo[0]?.oilType}</p>
          <p className="card-text">Oil Filter:</p>
          <p className="card-text">
            Date:{" "}
            {moment(carInfo[0]?.lastOilChange).add(6, "months").calendar()}
          </p>
        </div>
      </div>
      <div className="container d-flex justify-content-between brakesChange">
      <div className="previousBrakeChange">
        <h2 className="card-title pr-5">Previous Brake Change:</h2>
        <h4 className="card-text">
          Brake Pads Front:
        </h4>
        <p> Date: {moment(carInfo[0]?.previousBrakeChange).format(
              "MM/DD/YYYY"
            )} </p>
        <div className="form-group row">
            <label htmlFor="brakePadsFront" className="col-form-label ml-3 mr-1">
              Date:
            </label>
            <div className="">
              <input
                className="form-control"
                type="date"
                id="brakePadsFront"
                onChange={handleUpdate}
              />
            </div>
          </div>
        <h4 className="card-text">Brake Pads Rear:</h4>
        <p> Date: {moment(carInfo[0]?.brakePadsRear).format(
              "MM/DD/YYYY"
            )} </p>
        <div className="form-group row">
            <label htmlFor="brakePadsRear" className="col-form-label ml-3 mr-1">
              Date: 
            </label>
            <div className="">
              <input
                className="form-control"
                type="date"
                id="brakePadsRear"
                onChange={handleUpdate}
              />
            </div>
          </div>
        <p className="card-text">
          Brake Routers Front:
        </p>
        <p> Date: {moment(carInfo[0]?.brakeRouterFront).format(
              "MM/DD/YYYY"
            )} </p>
        <div className="form-group row">
            <label htmlFor="brakeRouterFront" className="col-form-label ml-3 mr-1">
              Date:
            </label>
            <div className="">
              <input
                className="form-control"
                type="date"
                id="brakeRouterFront"
                onChange={handleUpdate}
              />
            </div>
          </div>
        <h4 className="card-text">
          Brake Routers Rear:
        </h4>
        <p> Date: {moment(carInfo[0]?.brakeRouterRear).format(
              "MM/DD/YYYY"
            )}</p>
        <div className="form-group row">
            <label htmlFor="brakeRouterRear" className="col-form-label ml-3 mr-1">
              Date:
            </label>
            <div className="">
              <input
                className="form-control"
                type="date"
                id="brakeRouterRear"
                onChange={handleUpdate}
              />
            </div>
          </div>
        <h4 className="card-text">Brake Calipers:</h4>
        <p> Date: {moment(carInfo[0]?.brakeCalipers).format(
              "MM/DD/YYYY"
            )}</p>
        <div className="form-group row">
            <label htmlFor="brakeCalipers" className="col-form-label ml-3 mr-1">
              Date:
            </label>
            <div className="">
              <input
                className="form-control"
                type="date"
                id="brakeCalipers"
                onChange={handleUpdate}
              />
            </div>
          </div>
        <h4 className="card-text">Brake Drums:</h4>
        <p> Date: {moment(carInfo[0]?.brakeDrums).format(
              "MM/DD/YYYY"
            )} </p>
        <div className="form-group row">
            <label htmlFor="brakeDrums" className="col-form-label ml-3 mr-1">
              Date:
            </label>
            <div className="">
              <input
                className="form-control"
                type="date"
                id="brakeDrums"
                onChange={handleUpdate}
              />
            </div>
          </div>
        <h4 className="card-text">Brake Hoses:</h4>
        <p> Date: {moment(carInfo[0]?.brakeHoses).format(
              "MM/DD/YYYY"
            )} </p>
        <div className="form-group row">
            <label htmlFor="brakeHoses" className="col-form-label ml-3 mr-1">
              Date:
            </label>
            <div className="">
              <input
                className="form-control"
                type="date"
                id="brakeHoses"
                onChange={handleUpdate}
              />
            </div>
          </div>
        <h4 className="card-text">Brake Line:</h4>
        <p> Date: {moment(carInfo[0]?.brakeLines).format(
              "MM/DD/YYYY"
            )}</p>
        <div className="form-group row">
            <label htmlFor="brakeHoses" className="col-form-label ml-3 mr-1">
              Date:
            </label>
            <div className="">
              <input
                className="form-control"
                type="date"
                id="brakeHoses"
                onChange={handleUpdate}
              />
            </div>
          </div>
      </div>
      <div className="nextBrakeChange">
        <h2 className="card-title pr-5">Next Brake Change:</h2>
        <h4 className="card-text brakePadsFront">Brake Pads Front:</h4>
        <p>Date: {moment(carInfo[0]?.brakePadsFront).add(6, "months").calendar()} </p>
        <h4 className="card-text brakePadsRear ">Brake Pads Rear:</h4>
        <p>Date: {moment(carInfo[0]?.brakePadsRear).add(6, "months").calendar()} </p>
        <h4 className="card-text brakeRoutersFront ">Brake Routers Front:</h4>
        <p>Date: {moment(carInfo[0]?.brakeRouterFront).add(12, "months").calendar()} </p>
        <h4 className="card-text brakeRoutersRear">Brake Routers Rear:</h4>
        <p>Date: {moment(carInfo[0]?.brakeRouterRear).add(12, "months").calendar()} </p>
        <h4 className="card-text brakeCalipers">Brake Calipers:</h4>
        <p>Date: {moment(carInfo[0]?.brakeCalipers).add(12, "months").calendar()} </p>
        <h4 className="card-text brakeDrums">Brake Drums:</h4>
        <p>Date: {moment(carInfo[0]?.brakeDrum).add(18, "months").calendar()} </p>
        <h4 className="card-text brakeHoses">Brake Hoses:</h4>
        <p>Date: {moment(carInfo[0]?.brakeHose).add(24, "months").calendar()} </p>
        <h4 className="card-text brakeLine">Brake Line:</h4>
        <p>Date: {moment(carInfo[0]?.brakeLines).add(24, "months").calendar()} </p>
      </div>
      </div>
      <div className="container d-flex justify-content-between batteryChange">
      <div className="previousBatterySwap">
        <h2 className="card-title pr-5">Previous Battery Swap:</h2>
        <p className="card-text">Battery Size: {carInfo[0]?.batterySize}</p>
        <p className="card-text">Date: {moment(carInfo[0]?.batterySwap).format(
              "MM/DD/YYYY"
            )}</p>
        <div className="form-group row">
            <label htmlFor="batterySwap" className="col-form-label ml-3 mr-1">
              Date:
            </label>
            <div className="">
              <input
                className="form-control"
                type="date"
                id="batterySwap"
                onChange={handleUpdate}
              />
            </div>
          </div>
      </div>
      <div className="nextBatterySwap">
        <h2 className="card-title pr-5">Next Battery Swap:</h2>
        <p className="card-text">Battery Size:</p>
        <p className="card-text">Date: {moment(carInfo[0]?.batterySwap).add(48, "months").calendar()} </p>
      </div>
      </div>
      <div className="container d-flex justify-content-between tireChange">
      <div className="previousTireMaintenance">
        <h2 className="card-title pr-5">Previous Tire Maintenance</h2>
        <p className="card-text">Tires Rotated: {moment(carInfo[0]?.tireRotation).format(
              "MM/DD/YYYY"
            )}</p>
        <div className="form-group row">
            <label htmlFor="tireRotation" className="col-form-label ml-3 mr-1">
              Date:
            </label>
            <div className="">
              <input
                className="form-control"
                type="date"
                id="tireRotation"
                onChange={handleUpdate}
              />
            </div>
          </div>
        <p className="card-text">Tires Size:{carInfo[0]?.tireSize}</p>
        <p className="card-text">
          Tires Air Pressure: {carInfo[0]?.tirePressure}
        </p>
      </div>
      <div className="nextTireMaintenance">
        <h2 className="card-title pr-5">Next Tire Maintenance</h2>
        <p className="card-text">Tires Rotated:</p>
        <p> Date:  {moment(carInfo[0]?.tireRotation).add(12, "months").calendar()}  </p>
        <p className="card-text">Tires Size: {carInfo[0]?.tireSize} </p>
        <p className="card-text">Tires Air Pressure: {carInfo[0]?.tirePressure} </p>
      </div>
      </div>
    </>
  );
};

interface IMaintenanceProps extends RouteComponentProps {}

export default Maintance;
