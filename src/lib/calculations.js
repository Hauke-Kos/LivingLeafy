import FeatureCollection from "../assets/de_hh_up_verzeichnis_oeffentlicher_gruenanlagen_EPSG_4326.json"
import GeoJSON from "ol/format/GeoJSON.js";
import turf from "turf";

/**
 * Transform Polygon properties to unify the circle-Polygon and feature-MultiPolygon
 * @param {Polygon} circle 
 * @returns Polygon
 */
function createCirclePolygon(circle){
    return {
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates" : circle.getCoordinates()
        }
    }
}

/**
 * Transform Polygon properties to unify the circle-Polygon and feature-MultiPolygon 
 * @param {MultiPolygon} feature 
 * @returns MultiPolygon
 */
function createFeaturePolygon(feature){
    return {
        "type": "Feature",
        "geometry": {
            "type" : "MultiPolygon",
            "coordinates": feature.getGeometry().getCoordinates()
        }
    }
}

/**
 * Calculate and create the intersection areas of the circle and the features
 * @param {Polygon} circle 
 * @returns <Features>
 */
function intersectionArea(circle){
    const circlePoly = createCirclePolygon(circle);
    let intersections = [];
    const geo = new GeoJSON();
    let features = geo.readFeatures(FeatureCollection);
    for (const feature of features) {
        const featurePoly = createFeaturePolygon(feature);
        const intersect = turf.intersect(circlePoly, featurePoly);
        if (intersect !== undefined) {
            intersections.push(intersect);
        }
    }
    return intersections;
}

/**
 * Calculate the area of the intersections in square meters
 * @param {Polygon} circle 
 * @returns number
 */
function areaIntersectCalculation(circle) {
    const intersectionsFeatures = intersectionArea(circle);
    let area = 0;
    for (const feature of intersectionsFeatures) {
        area += turf.area(feature);
    }
    return area;
}

/**
 * Calculate the ratio of the intersections area to the circle area
 * @param {Polygon} circle 
 * @param {number} radius 
 * @returns number
 */
function areaCalculation(circle, radius){
    const intersectArea = areaIntersectCalculation(circle);
    const circleArea = radius*radius * Math.PI;
    return ((intersectArea / circleArea) * 100).toFixed(2);
}

export { areaCalculation };
