import json
import pyproj
import geojson

def transform_geojson(geojson_data, source_epsg, target_epsg):
  """Transforms a GeoJSON multipolygon from the specified source EPSG to the specified target EPSG.

  Args:
    geojson_data: The GeoJSON multipolygon data to transform.
    source_epsg: The source EPSG code.
    target_epsg: The target EPSG code.

  Returns:
    The transformed GeoJSON multipolygon data.
  """
  f = geojson.loads(geojson_data)
  print(f['features'][0])

  # Get the features from the GeoJSON data.
  features = json.loads(geojson_data)['features']

  # Create a Proj object.
  proj = pyproj.Proj(init=f'epsg:{source_epsg}')
  inv_proj = pyproj.Proj(init=f'epsg:{target_epsg}')

  # Transform each feature.
  for feature in features:
    #print(feature['geometry']['coordinates'])
    coordinates = feature['geometry']['coordinates']
    print(coordinates)
    for coordinate in coordinates:
      print(coordinate)
      pyproj.transform(proj, inv_proj, coordinate[0], coordinate[1])

      #feature['geometry']['coordinates'] = [
        #list(pyproj.transform(proj, inv_proj, coordinate))
        #for coordinate in feature['geometry']['coordinates']
      #]

  # Return the transformed GeoJSON data.
  return json.dumps(features)

if __name__ == '__main__':
  # Read the GeoJSON data from a file.
  with open('../assets/de_hh_up_verzeichnis_oeffentlicher_gruenanlagen_EPSG_4326.json', 'r') as f:
    geojson_data = f.read()

  # Transform the GeoJSON data.
  transformed_geojson_data = transform_geojson(geojson_data, 4326, 3857)

  # Write the transformed GeoJSON data to a file.
  with open('transformed_geojson_data.json', 'w') as f:
    f.write(transformed_geojson_data)
