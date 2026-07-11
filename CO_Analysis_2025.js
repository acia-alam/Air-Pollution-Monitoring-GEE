Map.centerObject(aoi, 7);
Map.addLayer(aoi, {color: 'red'}, 'study area' ,false);
 
var collection = ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_CO")
  .select('CO_column_number_density') 
  .filterDate('2025-01-01', '2026-01-01')
  .mean()
  .clip(aoi);


var band_viz = {
  min: 0.04256700748314659,
  max: 0.04378972162904293,
  palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']
};


// Add the clipped image to the map
Map.addLayer(collection, band_viz, 'CO Density 2025'); 


// Calculate Min, max, mean value using reducer
var reducers = ee.Reducer.mean().combine({
  reducer2: ee.Reducer.minMax(),
  sharedInputs: true
});


var stats = collection.reduceRegion({
  reducer: reducers,
  geometry: aoi.geometry(), 
  scale: 1000, 
  maxPixels: 1e13
});


print('Ozone Statistics (Min, Max, Mean) for AOI:', stats);


// Map Export code

Export.image.toDrive({
  image: collection,
  description: 'O3_Density_2025_Map_Export',
  fileNamePrefix: 'O3_Map_2025',
  region: aoi.geometry(),
  scale: 1000,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF' 
});

// CSV file export code

var statsFeature = ee.Feature(null, stats);
var statsCollection = ee.FeatureCollection([statsFeature]);
Export.table.toDrive({
  collection: statsCollection,
  description: 'O3_Statistics_2020_CSV_Export',
  fileFormat: 'CSV'
});
