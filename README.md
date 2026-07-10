# CO_Analysis_2025.js

## Description

This Google Earth Engine (GEE) script analyzes annual atmospheric Carbon Monoxide (CO) concentration using Sentinel-5P OFFL Level-3 data. The script calculates the annual mean CO column number density, visualizes the spatial distribution, computes descriptive statistics for the study area, and exports both the raster map and statistics for further analysis.

## Dataset

* **Satellite:** Sentinel-5P
* **Product:** COPERNICUS/S5P/OFFL/L3_CO
* **Band:** CO_column_number_density

## Time Period

* **Start Date:** 2025-01-01
* **End Date:** 2026-01-01

## Workflow

1. Load the Area of Interest (AOI).
2. Load the Sentinel-5P CO image collection.
3. Filter the collection by date.
4. Calculate the annual mean CO concentration.
5. Clip the image to the AOI.
6. Visualize the CO concentration map.
7. Compute descriptive statistics (Mean, Minimum, and Maximum).
8. Export the CO map as a GeoTIFF.
9. Export statistics as a CSV file (optional).

## Outputs

* Annual Mean CO Concentration Map
* CO Statistics (Mean, Minimum, Maximum)
* GeoTIFF (.tif)
* CSV Statistics (.csv)

## Requirements

* Google Earth Engine Account
* JavaScript Code Editor
* Area of Interest (AOI) uploaded as an Earth Engine asset

## How to Run

1. Open the Google Earth Engine Code Editor.
2. Import your AOI asset.
3. Copy and paste the script into the editor.
4. Click **Run**.
5. Start the export tasks from the **Tasks** panel.

## Author

**Acia Alam**

M.Sc. in Geography and Environment

## License

MIT License

