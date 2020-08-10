import * as React from "react";
import Header from "../components/Header";
import { Link, RouteComponentProps } from "react-router-dom";
import { useState, useEffect } from "react";
import { json, User } from "../utils/api";
import MileageModal from "../components/MileageModal";

const Profile: React.FC<IProfileProps> = (props) => {
  const [carInfo, setCarInfo] = useState([]);
  const [showAddBar, setShowAddBar] = useState(false);
  const [vin, setVin] = useState("");
  const [mileage, setMileage] = useState("");

  const getCarInfo = async () => {
    try {
      let data = await json(`/api/vehicles/info/${User.userid}`);
      setCarInfo(data);
    } catch (e) {
      throw e;
    }
  };

  const handleAdd = () => {
    setShowAddBar(!showAddBar);
  };

  const handleNewVehicle = () => {
    fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json&model`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.Results[0].Make) {
          let newCar = {
            vin: data.Results[0].VIN,
            make: data.Results[0].Make,
            model: data.Results[0].Model,
            year: data.Results[0].ModelYear,
          };
          let result = json(`/api/vehicles/add/${User.userid}`, "POST", newCar);
          getCarInfo();
        }
      });
  };

  const handleMileage = (id: string) => {
    let newMileage = parseInt(mileage);
    let data = {
      mileage: newMileage,
    };
    try {
      let results = json(`/api/vehicles/mileage/${id}`, "PUT", data);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getCarInfo();
  }, []);

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
      <div className="d-flex container justify-content-center mt-4">
        <h3>Your Vehicles</h3>
        <button onClick={handleAdd} className="btn btn-secondary btn-sm ml-5">
          New Vehicle
        </button>
      </div>
      {(() => {
        if (showAddBar) {
          return (
            <>
              <div className="d-flex form-group mx-sm-3 mb-2 mt-3 justify-content-center">
                <input
                  type="text"
                  className="form-control col-4"
                  id="inputVin"
                  placeholder="Enter VIN..."
                  onChange={(event) => setVin(event.target.value)}
                />

                <button
                  type="submit"
                  className="btn btn-secondary mb-2 ml-3"
                  onClick={handleNewVehicle}
                >
                  Add Vehicle
                </button>
              </div>
            </>
          );
        }
      })()}
      {carInfo.map((info) => {
        return (
          <>
            <hr className="mt-5" />
            <div
              key={info.id}
              className="container d-flex justify-content-between"
            >
              <div className="card col-4 mt-5 ml-3 p-2 border border-dark shadow rounded">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Make: {info.make} </li>
                  <li className="list-group-item">Model: {info.model} </li>
                  <li className="list-group-item">Year: {info._year} </li>
                  <li className="list-group-item mb-3">
                    Mileage: {info.mileage}
                    <span className="ml-5">
                      <MileageModal carId={info.id} handler={handleMileage} />
                    </span>
                  </li>
                  <Link className="ml-3" to={`/maintenance/${info.vin}`}>Maintenance</Link>
                </ul>
              </div>
              <div className="col-4 mt-5 d-flex flex-column">
                <img
                  src="https://www.vehiclehistory.com/evox_color_compressed/chevrolet/equinox/2006/3230/chevrolet-equinox-2006-001-3230-15U-768.jpg"
                  height="200px"
                  width="350px"
                ></img>
                <p>VIN: {info.vin} </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

interface IProfileProps extends RouteComponentProps {}

export default Profile;
