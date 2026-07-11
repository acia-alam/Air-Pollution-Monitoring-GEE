# AOI (Area of Interest)

## Overview

This folder contains the Area of Interest (AOI) used for the Carbon Monoxide (CO) analysis in Google Earth Engine. The AOI defines the spatial boundary for image processing, statistical analysis, and map generation.

## Contents

- `Study_Area.shp` – Shapefile of the study area
- `Study_Area.shx`
- `Study_Area.dbf`
- `Study_Area.prj`

*(Include all required shapefile components if using a shapefile.)*

## Usage

The AOI is imported into Google Earth Engine as an asset and referenced in the analysis script:

```javascript
Map.centerObject(aoi, 7);
```

The AOI is used for:

- Clipping Sentinel-5P imagery
- Calculating descriptive statistics
- Exporting raster outputs
- Visualizing the study area

## Coordinate Reference System (CRS)

WGS 84 (EPSG:4326)

## Study Area

Replace this section with your study area's details, for example:

- **Location:** Canada 
- **Geometry Type:** Polygon
- **Projection:** WGS 84 (EPSG:4326)

## Notes

Ensure that the AOI boundary is accurate and covers the entire study region before running the analysis.
