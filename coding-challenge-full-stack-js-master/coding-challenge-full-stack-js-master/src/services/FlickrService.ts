import axios from "axios";
import {FlickrModel} from "../models/FlickrModel";

export default class FlickrService {

    public static async getData(): Promise<FlickrModel> {
        const res = await axios.get<FlickrModel>(
            "http://localhost:7001/api/search"
        );
        if (res.status === 200 && res.data !== null) {
            return res.data;
        }

        return Promise.reject("Error message: " + res.statusText);
    }
}