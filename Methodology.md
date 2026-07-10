# Methodology

## Carbon Monoxide (CO) Analysis Using Sentinel-5P and Google Earth Engine

### 1. Objective

The objective of this project is to analyze the spatial distribution of atmospheric Carbon Monoxide (CO) concentration over the selected Area of Interest (AOI) using Sentinel-5P OFFL Level-3 data in Google Earth Engine (GEE). The analysis produces an annual mean CO concentration map along with descriptive statistics for the study area.

---

## 2. Study Area

The analysis was conducted over a user-defined Area of Interest (AOI). All satellite images were clipped to the AOI before visualization and statistical analysis.

---

## 3. Dataset

**Satellite:** Sentinel-5P

**Product:** OFFL Level-3 Carbon Monoxide (CO)

**Dataset ID:**

`COPERNICUS/S5P/OFFL/L3_CO`

**Band Used:**

`CO_column_number_density`

**Spatial Resolution:** Approximately 1 km

**Platform:** Google Earth Engine

---

## 4. Study Period

Start Date: **1 January 2025**

End Date: **31 December 2025**

An annual mean composite was generated from all available observations during this period.

---

## 5. Methodology

### Step 1: Load the Area of Interest

The Area of Interest (AOI) was imported into Google Earth Engine and displayed on the map.

### Step 2: Load Sentinel-5P CO Dataset

The Sentinel-5P OFFL Level-3 Carbon Monoxide Image Collection was loaded using the Google Earth Engine data catalog.

### Step 3: Filter Images

The image collection was filtered according to:

* Study area (AOI)
* Study period (2025)

### Step 4: Generate Annual Mean Composite

The mean() reducer was applied to create a single annual average CO concentration image representing the study period.

### Step 5: Clip to Study Area

The annual mean image was clipped to the AOI to limit the analysis to the selected study region.

### Step 6: Visualization

The CO concentration map was visualized using a color palette ranging from low to high concentration values.

### Step 7: Statistical Analysis

Descriptive statistics were calculated using the `reduceRegion()` function.

The following statistics were derived:

* Mean
* Minimum
* Maximum

(Optional extensions include Median and Standard Deviation.)

### Step 8: Export Results

The following outputs were exported:

* Annual Mean CO Map (GeoTIFF)
* Descriptive Statistics (CSV)

---

## 6. Software and Tools

* Google Earth Engine
* JavaScript API
* QGIS / ArcGIS Pro (optional for visualization)

---

## 7. Output Products

* Annual Mean Carbon Monoxide Map (.tif)
* Carbon Monoxide Statistics (.csv)

---

## 8. Workflow Summary

1. Import AOI
2. Load Sentinel-5P CO dataset
3. Filter by date and location
4. Compute annual mean
5. Clip to AOI
6. Visualize CO concentration
7. Calculate descriptive statistics
8. Export GeoTIFF and CSV outputs

---

## 9. Notes

* CO concentration is represented as column number density.
* Annual averaging reduces the effect of short-term atmospheric variability and highlights long-term spatial patterns.
* The methodology can be adapted for monthly, seasonal, or multi-year analyses by modifying the date range.
