import express from 'express'
import {routes} from "./routes"
import dotenv from 'dotenv'
import config from "./config.json"
import cors from "cors"

dotenv.config();

const port = config.port;

export const app = express();
app.use(cors());

routes(app);

app.listen(port, () => {
    console.log(`listening to port ${port}`)
});

app.get('/api', (req, res) => {
  res.send({message: 'Hello world'});
});

