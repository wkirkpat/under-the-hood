import * as express from "express";
import apiRouter from "./routes";
import * as path from "path";
import * as cors from "cors";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors);
app.use(apiRouter);

//This is a fix for being unable to refresh pages. It basically reroutes the user to the index so that the react router can take over
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
