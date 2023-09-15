import FeatureCollection from "../assets/de_hh_up_verzeichnis_oeffentlicher_gruenanlagen_EPSG_4326.json"
import GeoJSON from "ol/format/GeoJSON.js";


/**
 * Transform the Feature Collection data from EPSG:4326 to EPSG:3857
 */
function formatData() {
    const geo = new GeoJSON();
    let features = geo.readFeatures(FeatureCollection);
    for (const feature of features) {
        feature.getGeometry().transform("EPSG:4326", "EPSG:3857");
    }
    let formattedFeatureCollection = geo.writeFeaturesObject(features)
    formattedFeatureCollection = JSON.stringify(formattedFeatureCollection);
    downloadFormatData(formattedFeatureCollection);
}

/**
 * Create a blob which contain the FeatureCollection data, create a link in the background which will 
 * download the json-file named: 'transformed_geojson_data_hamburg.json'
 * Store this file in the asset folder to use it on the map
 * @param {FeatureCollection} formattedData 
 */
async function downloadFormatData(formattedData) {
    const blob = new Blob([formattedData], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `transformed_geojson_data_hamburg.json`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export{ formatData };