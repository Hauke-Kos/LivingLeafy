<template>
	<div id="map" style="width: 100%; height: 100%"></div>
</template>

<script>
import View from "ol/View";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Feature from "ol/Feature";
import Style from "ol/style/Style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON.js";
import { circular } from "ol/geom/Polygon";
import { transform } from "ol/proj";
import { Stroke, Fill } from "ol/style";
import { coordinatesStore } from "../lib/coordinatesStore.js";
import { addressAndRadiusStore } from "../lib/addressAndRadiusStore.js";
import { parkAreaStore } from "../lib/parkAreaStore.js";
import { areaCalculation } from "../lib/calculations.js"; 
import FeatureCollection from "../assets/transformed_geojson_data_hamburg.json"
// Purpose: If the data change, this function is to transform the coordinates of the new FeatureCollection from EPSG:4326 to EPSG:3857
// import { formatData } from "../lib/transformGeoJSONFormatData.js";


const center = transform([10.01534, 53.57532], "EPSG:4326", "EPSG:3857");

export default {
	name: "TheMap",
	components: {},
	data() {
		return {
			coordinatesStore,
			addressAndRadiusStore,
			parkAreaStore,
			map: null,
			view: null,
			features: null,
		};
	},
	mounted() {
		//formatData(); // Uncomment to download the transformed Feature Collection
		const geo = new GeoJSON();
		this.features = geo.readFeatures(FeatureCollection);
		// Create the map
		this.view = new View({
			zoom: 11,
			center: center,
			constrainResolution: true,
		}),

		this.map = new Map({
			target: "map",
			layers: [
				// Background layer by openstreet map
				new TileLayer({
					source: new OSM(),
				}),
				new VectorLayer({
					source: new VectorSource({
						projection: "EPSG:3857",
						features: this.features,
						format: new GeoJSON(),
					}),
					style: [
						new Style({
							stroke: new Stroke({
								color: "green",
								width: 3,
							}),
							fill: new Fill({
								color: "rgba(0, 255, 0, 0.3)",
							}),
						}),
					],
				}),
			],
			// The map is locked on Hamburg initially
			view: this.view
		});
	},
	methods: {
		/**
		 * 
		 * @param {number} lat 
		 * @param {number} lon 
		 */
		zoomToInputAddress(circleFeature) {
			this.view.fit(circleFeature.getGeometry(), {padding: [50, 50, 50, 50]});
		},
		/**
		 * Draw a circle with radius is the passed radius argeument
		 * @param {number} radius 
		 */
		drawCircle(radius) {
			const projection = this.map.getView().getProjection();
			const newCenter = transform([coordinatesStore.lon, coordinatesStore.lat], "EPSG:4326", "EPSG:3857");
			this.view.setCenter(newCenter);
			// Set the center of the circle as adress point, which is zoomed in
			const circle = circular(
				transform(this.map.getView().getCenter(), projection, "EPSG:4326"),
				radius,
				128
			);
			// Calculate area before transform coordinates
			parkAreaStore.relativeArea = areaCalculation(circle, radius);
			circle.transform("EPSG:4326", projection);
			const circleFeature = new Feature({
				geometry: circle,
			});
			let layer = new VectorLayer({
				source: new VectorSource({
					projection: projection,
					features: [circleFeature],
				}),
				style: [
					new Style({
						stroke: new Stroke({
							color: "blue",
							width: 3,
						}),
						fill: new Fill({
							color: "rgba(0, 0, 255, 0.1)",
						}),
					}),
				],
			})
			// Add layer to map
			this.map.addLayer(layer);
			// Zoom to circle
			this.zoomToInputAddress(circleFeature);
		},
	},
	watch: {
		coordinatesStore: {
			handler(newValue, oldValue) {
				this.drawCircle( addressAndRadiusStore.radius );
				console.log(newValue, oldValue);
			},
			deep: true,
		},
	},
};
</script>
