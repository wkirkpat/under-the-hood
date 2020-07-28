import { Query } from "../index";

//This will return an array of all vehicles assigned to a user
export const getUserVehicles = async (id: string) =>
  Query("SELECT * FROM userVehicles WHERE userid = ?", [id]);

//This will get all the recall and factory information about a particular type of vehicle
//Requires make, model, and year to properly find the information
export const getVehicleInfo = async (
  make: string,
  model: string,
  year: number
) =>
  Query("SELECT * FROM vehicleData WHERE make = ? AND model = ? AND year = ?", [
    make,
    model,
    year,
  ]);

//This selects everything from the Maintenance table based on the vehicleId passed in. This will be used in testing mostly as the API requires a VIN number
//And a check engine code(dtc) to get the same info.
export const getMaintenanceInfo = async (id: string) =>
  Query("SELECT * FROM maintenanceInfo WHERE vehicleId = ?", [id]);

//This is intended to help test the diagnosis page, it will need to be modified slightly to better fit the API when we are passed the testing phase.
//Pass in the dtc, which is the check engine code, and it will find the correct diagnosis information
//When we get to using the actual api, we will also need to pass in the vin number and mileage
export const getEngineLightInfo = async (dtc: string) =>
  Query("SELECT * FROM maintenanceInfo WHERE dtc = ?", [dtc]);

//This is used to update any dates stored in reference to a user vehicle. It requires the name of the column to be updated to be
//passed in as well as the new date and the id of the vehicle in question. The spUpdateUserVehicle procedure creates a
//sql statement from the passed in values that updates whichever column you designate with the value you give it
//**NOTE it is important here to make sure "column" exactly matches the column name in the DB you wish to update
export const updateUserVehicleDate = async (
  id: string,
  column: string,
  value: string
) => Query("CALL spUpdateUserVehicle(?, ?, ?)", [id, column, value]);

//The query above specifically can only do timestamps, so this is the query you use to update the mileage on a user vehicle
export const updateMileage = async (mileage: number, id: string) =>
  Query("UPDATE userVehicles SET mileage = ? WHERE id = ?", [mileage, id]);

//This adds a new vehicle to a profile. Presently, we are not using the full API, but when we do implement it, all we have to do is
//Get their vin number and use that to make a request to the API which will send back all of the vehicle information that we can then store in
//The database. This is the one query we can't easily test without the api. We can get the userid from the current users token
//Which will make sure we set the correct vehicle to the correct user.
export const addNewVehicle = async (vin: string, userid: string) =>
  Query("INSERT INTO userVehicles(vin, userid) VALUES(?, ?)", [vin, userid]);

export default {
  getUserVehicles,
  getVehicleInfo,
  getMaintenanceInfo,
  getEngineLightInfo,
  updateUserVehicleDate,
  updateMileage,
  addNewVehicle,
};
