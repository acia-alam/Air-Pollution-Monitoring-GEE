// Convert the imported shapefile into a FeatureCollection
var aoiFc = ee.FeatureCollection(aoi);

var aoiBounds = aoiFc.bounds(10000);

// Center the map at an appropriate zoom level for Canada
Map.centerObject(aoiBounds, 3);

// Style the original boundary as an outline
var aoiOutline = aoiFc.style({
  color: '808080',
  fillColor: '00000000',
  width: 2
});

Map.addLayer(
  aoiOutline,
  {},
  'Canada AOI Outline'
);


var o3Collection = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_O3')
  .filterDate('2025-01-01', '2026-01-01')
  .filterBounds(aoiBounds)
  .select('O3_column_number_density');

// Print the number of images used in the analysis
print('Number of Sentinel-5P O3 images:', o3Collection.size());

// Calculate the annual mean 

// Calculate the annual mean before clipping
var o3Mean = o3Collection.mean();

// Clip the final mean image to the FeatureCollection
// clipToCollection is recommended for complex shapefiles
var o3Canada = o3Mean.clipToCollection(aoiFc);

// Define visualization parameters

var bandViz = {
  min: 0.11271077113039901,
  max: 0.13759576688213726,
  palette: [
    'black',
    'blue',
    'purple',
    'cyan',
    'green',
    'yellow',
    'red'
  ]
};

// Add the ozone layer to the map

Map.addLayer(
  o3Canada,
  bandViz,
  'Canada S5P O3 Density 2025'
);

// Calculate minimum, maximum, and mean values

// Combine the mean, minimum, and maximum reducers
var reducers = ee.Reducer.mean().combine({
  reducer2: ee.Reducer.minMax(),
  sharedInputs: true
});

var stats = o3Canada.reduceRegion({
  reducer: reducers,
  geometry: aoiBounds,
  scale: 1000,
  bestEffort: true,
  maxPixels: 1e13,
  tileScale: 4
});

// Print the statistics
print(
  'Ozone Statistics for Canada:',
  stats
);

//  Export the ozone raster to Google Drive


Export.image.toDrive({
  image: o3Canada,
  description: 'Canada_O3_2025_Export',
  folder: 'GEE',
  fileNamePrefix: 'Canada_O3_Density_2025',
  region: aoiBounds,
  scale: 1000,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF',
  fileDimensions: 4096,
  skipEmptyTiles: true
});

// Export the statistics as a CSV file

// Convert the statistics dictionary into a Feature
var statsFeature = ee.Feature(null, stats);

// Convert the Feature into a FeatureCollection
var statsCollection = ee.FeatureCollection([
  statsFeature
]);

// Export the statistics table to Google Drive
Export.table.toDrive({
  collection: statsCollection,
  description: 'Canada_O3_Statistics_2025',
  folder: 'GEE',
  fileNamePrefix: 'Canada_O3_Statistics_2025',
  fileFormat: 'CSV'
});
