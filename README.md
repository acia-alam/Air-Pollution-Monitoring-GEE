# Carbon Monoxide (CO) Analysis Using Google Earth Engine

## Overview

This project demonstrates the analysis of atmospheric Carbon Monoxide (CO) concentrations using Sentinel-5P OFFL Level-3 data in Google Earth Engine (GEE). The workflow computes annual mean CO concentration, visualizes spatial distribution, generates descriptive statistics, and exports both raster and tabular outputs.

---

## Study Area

- Area of Interest (AOI): User-defined study area
- Example: Dhaka Metropolitan Area, Bangladesh

---

## Dataset

**Satellite:** Sentinel-5P

**Product:** OFFL Level-3 Carbon Monoxide

**Band Used:**

- CO_column_number_density

---

## Time Period

1 January 2025 – 31 December 2025
1 January 2020 - 31 Decemder 2021
---

## Workflow

1. Load Area of Interest (AOI)
2. Load Sentinel-5P CO dataset
3. Filter images by date
4. Calculate annual mean CO concentration
5. Clip to study area
6. Calculate descriptive statistics
7. Visualize CO concentration
8. Export GeoTIFF map
9. Export statistics as CSV

---

## Outputs

- Annual Mean CO Concentration Map
- Carbon Monoxide Statistics (CSV)
- GeoTIFF Raster

---

## Software

- Google Earth Engine
- JavaScript API
- QGIS / ArcGIS Pro

---

## Repository Structure

```
scripts/
data/
figures/
results/
docs/
```

---

## Author

Acia Alam

M.Sc. in Geography and Environment

Bangladesh

---

## License

This project is licensed under the MIT License.
