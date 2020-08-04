import * as express from "express";
import DB from "../../db";

const router = express.Router();

//This allows us to block ourselves off from routes for testing purposes. We could
//also use this on a route to prevent a user who is not logged in from using it,
//but there are other, better ways to do that as well. In order to use this,
//Just put it as the second argument in a route
const isUser: express.RequestHandler = (req: any, res, next) => {
  if (!req.user) {
    return res.sendStatus(401);
  } else {
    return next();
  }
};

//Route for getting a users vehicles based on their user id
router.get("/info/:id", isUser, async (req, res, next) => {
  try {
    let vehicles = await DB.Vehicles.getUserVehicles(req.params.id);
    res.json(vehicles);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route for getting info on a specific vehicle based on its make, model, and year
router.get("/info", async (req, res) => {
  try {
    let data = await DB.Vehicles.getVehicleInfo(
      req.body.make,
      req.body.model,
      req.body.year
    );
    res.json(data);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route for getting the maintenance info for a specific vehicle based on its id
router.get("/maintenance/:id", async (req, res) => {
  try {
    let data = await DB.Vehicles.getMaintenanceInfo(req.params.id);
    res.json(data);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route for getting maintenance info of a vehicle based on its dtc(Check engine code)
router.get("/dtc/:id", async (req, res) => {
  try {
    let data = await DB.Vehicles.getEngineLightInfo(req.params.id);
    res.json(data);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route for updating dates in reference to a users vehicle
router.put("/update/:id", async (req, res) => {
  try {
    res.json(
      await DB.Vehicles.updateUserVehicleDate(
        req.params.id,
        req.body.column,
        req.body.value
      )
    );
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route for updating a user vehicles mileage
router.put("/mileage/:id", async (req, res) => {
  try {
    res.json(await DB.Vehicles.updateMileage(req.body.mileage, req.params.id));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route for adding a new vehicle to a user profile.
// ** NOTE This only adds a userid and vin to the table, in production the api will handle taking the vin
// and getting all the data for that specific car. **
router.post("/add/:id", async (req, res) => {
  try {
    res.json(await DB.Vehicles.addNewVehicle(req.body.vin, req.params.id));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
