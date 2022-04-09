import {Request, Response} from "express";
import {formatJSONPResponse} from "./HelperController";
import axios from "axios";
import config from "../config.json"

export const GetAllImages = async (req: Request, res: Response) => {
    const resp = await axios.get(config.url)
    if (resp.status < 300) {
        return res.send(formatJSONPResponse(resp.data));
    }
    return res.status(503).send("Service not available");
}