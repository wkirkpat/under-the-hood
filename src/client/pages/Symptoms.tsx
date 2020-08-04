import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { json } from "../utils/api";
import SymptomsAlert from "../components/SymptomsAlert";

const Symptoms: React.FC<ISymptomsProps> = (props) => {
  const [maintenanceInfo, setMaintenanceInfo] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [userDtc, setDtc] = useState("");
  const [showAlert, setShowAlert] = useState(false);

//If it gets a result, it displays the info the screen, if it doesn't, it displays an alert
  const handleSubmit = async () => {
    try {
      let info = await json(`/api/vehicles/dtc/${userDtc}`);
      setMaintenanceInfo(info);
      if (info[0]) {
        setShowResults(true);
      } else {
        setShowAlert(true);
      }
    } catch (e) {
      throw e;
    }
  };

  return (
    <>
      <Header
        hasLogin={false}
        subtitle=""
        title="Diagnosis"
        hasMenu
        hasProfile
        hasSearch
      />
      <div className="form-row align-items-center mt-5 ml-3 mb-5">
        <div className="col-sm-3 my-1">
          <input
            type="text"
            className="form-control"
            id="inlineFormInputName"
            placeholder="Input your DTC* here"
            onChange={(event) => setDtc(event.target.value)}
          />
        </div>
        <div className="col-auto my-1">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      {(() => {
        if (showResults) {
          return (
            <>
              <div className="col-12 ml-3">
                <p>{maintenanceInfo[0].problemName}</p>
              </div>
              <div className="container-fluid d-flex">
                <div className="card col-4 shadow">
                  <div className="card-body">
                    {maintenanceInfo[0].problemDesc}
                  </div>
                </div>
                <div className="card col-4 shadow">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Urgency - {maintenanceInfo[0].urgencyLevel}
                    </li>
                    <li className="list-group-item">
                      Difficulty - {maintenanceInfo[0].difficulty}
                    </li>
                    <li className="list-group-item">
                      Hours - {maintenanceInfo[0].hours}
                    </li>
                  </ul>
                </div>
                <div className="card col-4 shadow">
                  <div className="card-body">
                    {maintenanceInfo[0].parts} - ${maintenanceInfo[0].partCost}
                    .00
                  </div>
                </div>
              </div>
            </>
          );
        } else if (showAlert) {
          return <SymptomsAlert />;
        }
        {
          return <></>;
        }
      })()}
      <div
        className="alert alert-info shadow border border-dark rounded m-4"
        role="alert"
      >
        *Your DTC, also known as a fault code, is the code that references your
        check engine light issues. If you need this code, head to your local
        autozone where you can run a free check on your vehicle to get the code.
      </div>
    </>
  );
};

interface ISymptomsProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

export default Symptoms;
