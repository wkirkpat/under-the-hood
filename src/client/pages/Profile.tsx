import * as React from "react";
import Header from "../components/Header";
import { Link, RouteComponentProps } from "react-router-dom";
import { useState, useEffect } from "react";
import { json } from "../utils/api";

const Profile: React.FC<IProfileProps> = () => {
  const [carInfo, setCarInfo] = useState([]);
  const [showAddBar, setShowAddBar] = useState(false);
  const [vin, setVin] = useState("");

  const getCarInfo = async () => {
    try {
      let data = await json("/api/vehicles/info/1");
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
          let result = json("/api/vehicles/add/1", "POST", newCar);
          getCarInfo();
        }
      });
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
      <button onClick={handleAdd} className="btn btn-success btn-sm m-3">
        New Vehicle
      </button>
      {(() => {
        if (showAddBar) {
          return (
            <>
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="text"
                  className="form-control col-4"
                  id="inputVin"
                  placeholder="Enter VIN..."
                  onChange={(event) => setVin(event.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-2 ml-3"
                onClick={handleNewVehicle}
              >
                Add Vehicle
              </button>
            </>
          );
        }
      })()}
      {carInfo.map((info) => {
        return (
          <div
            key={info.id}
            className="container d-flex justify-content-between"
          >
            <div className="card col-4 mt-5 ml-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Make: {info.make} </li>
                <li className="list-group-item">Model: {info.model} </li>
                <li className="list-group-item">Year: {info._year} </li>
                <li className="list-group-item">Mileage: {info.mileage} </li>
                <Link to={`/maintenance/${info.vin}`}>
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
              <p>VIN: {info.vin} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface IProfileProps extends RouteComponentProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}
export default Profile;
