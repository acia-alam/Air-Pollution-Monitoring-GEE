# Results

This folder contains the outputs generated from the **Sentinel-5P Carbon Monoxide (CO) Analysis** using Google Earth Engine.

## Contents

### CO_Map_2025.tif

Annual mean Carbon Monoxide (CO) concentration map for the study area, exported in GeoTIFF format.

**Properties**

* Dataset: Sentinel-5P OFFL Level-3
* Band: `CO_column_number_density`
* Time Period: 1 January 2025 – 31 December 2025
* Spatial Resolution: 1000 m
* Format: GeoTIFF

---

### CO_Statistics_2025.csv

Descriptive statistics of annual mean Carbon Monoxide (CO) concentration within the Area of Interest (AOI).

The CSV file may include the following statistics:

* Mean
* Minimum
* Maximum
* Standard Deviation (if exported)
* Median (if exported)

---

## File Descriptions

| File                   | Description                                   |
| ---------------------- | --------------------------------------------- |
| CO_Map_2025.tif        | Annual mean Carbon Monoxide concentration map |
| CO_Statistics_2025.csv | Descriptive statistics for the study area     |

---

## Notes

* Results were generated using Google Earth Engine.
* CO concentration values represent the annual mean of Sentinel-5P observations for the selected study period.
* All outputs are clipped to the Area of Interest (AOI).
