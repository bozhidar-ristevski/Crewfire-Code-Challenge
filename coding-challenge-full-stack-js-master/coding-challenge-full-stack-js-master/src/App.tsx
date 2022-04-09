import { FC, useEffect, useState } from "react";
import  flickrService  from "./services/FlickrService";
import  {FlickrModel}  from "./models/FlickrModel";
import { ImageBlock } from "./uiComponents/Image";
import './App.css';

const App: FC = () => {

    const [flickrData, setFlickrData] = useState({} as FlickrModel);
    const [filteredflickrData, setFilteredflickrData] = useState({} as FlickrModel);
    const [strSearch, setStrSearch] = useState("");
    useEffect(() =>  {
        (async () => {
            const data = await flickrService.getData();
            setFlickrData(data);
            setFilteredflickrData(data);
        })()
    }, []);

    const filterImages = () => {
        if(strSearch){
            setFilteredflickrData({
                title: flickrData.title,
                description: flickrData.description,
                generator: flickrData.generator,
                link: flickrData.link,
                modified: flickrData.modified,
                items: flickrData.items.filter(x => x.tags.includes(strSearch))
            });
        }
        else{
            setFilteredflickrData(flickrData);
        }
    };
    return (
        <>
        <div className="page">
         <h2>{flickrData.title}</h2>
         <div className="search">
            <h4>Search by tag</h4>
            <input type="text" id="input" onChange={e => setStrSearch(e.target.value)}/>
            <button onClick={() => filterImages()}>Search</button>
         </div>
         <div className="row">
         {filteredflickrData.items?.map((item) => {
             return(
                 <>
                 <ImageBlock author={item.author} link={item.media.m} />
                </>)
         })} </div></div>
        </>
    )
}

export default App;
