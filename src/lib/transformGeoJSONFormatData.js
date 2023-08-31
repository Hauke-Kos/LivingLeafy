import FeatureCollection from "../assets/de_hh_up_verzeichnis_oeffentlicher_gruenanlagen_EPSG_4326.json"
import GeoJSON from "ol/format/GeoJSON.js";
//import * as fs from 'node:fs';
//import { writeFile } from 'node:fs';
//const FileSystem = require("fs");
//import FileSystem from "fs";

function formatData() {
    const geo = new GeoJSON();
    let features = geo.readFeatures(FeatureCollection);
    for (const feature of features) {
        feature.getGeometry().transform("EPSG:4326", "EPSG:3857");
    }
    console.log(JSON.stringify(features));
    localStorage.setItem('test.json', JSON.stringify(features));
    //FileSystem.writeFileSync("test.json", JSON.stringify(features), (error) => {
    //fs.writeFile("test.json", JSON.stringify(features), (error) => {
        //if (error) throw error;
    //});
    
}

export{ formatData };