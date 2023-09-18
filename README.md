# leafy_home

## Development Documentation

The opening question for thsi project is: \' How much park area are in my surronding area to enjoy the nature in the city? \'
Requierements that the project should fullfill are:
* Show all park area of the city Hamburg on a map
* Users can input a address and a radius
* Circle will drawn on the map to show the included calculated area 
* Map zoom onto to the circle with the given radius around the given address
* Calculate and display the relative area of park areas with two digits after the comma

The data of the official park areas of the city Hamburg is provided by 'Freie und Hansestadt Hamburg, Behörde für Umwelt und Energie'.

## Usage

For now, it's only working properly for the city Hamburg, Germany. 
Type the address and the radius into the input fields and after clicking the `Geocode` button within a few
seconds the realtive area of public park area inside the circle will be calculated. 
The green yields are the public park area, the blue circle show the area with the radius around the adress.

This picture show the default site after starting/opening the webiste
![Alt text](./docs/images/Living-Leafy-Default.png?raw=true "Default Site")

An example how this webiste work, the esample address is Rathausmarkt 1 in Hamburg the radius is given with 1000 meter
![Alt text](./docs/images/Living-Leafy-Rathausmarkt.png??raw=true "Example with Rathausmarkt 1, Hamburg")

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
