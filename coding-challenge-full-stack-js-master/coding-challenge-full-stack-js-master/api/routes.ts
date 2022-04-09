import {Router} from "express";
import { GetAllImages} from "./controllers/FlickrController";

export const routes = (router: Router) =>{
    router.get('/api/search', GetAllImages);
}
