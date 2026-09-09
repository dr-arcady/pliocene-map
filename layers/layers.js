// REPLACE ENTIRE CONTENTS OF layers/layers.js WITH THIS:

var wms_layers = [];

// 1. Permanent Base Map (Green/Blue Bathymetry & Topography)
var lyr_BaseMap = new ol.layer.Image({
    opacity: 1,
    title: 'Base Map',
    source: new ol.source.ImageStatic({
        url: "./layers/Map03_PALEOMAP_6min_Pliocene_5Ma_0.png",
        projection: 'EPSG:4326',
        alwaysInRange: true,
        imageExtent: [-180.050000, -90.050000, 180.050000, 90.050000]
    })
});

// 2. Grey Land-Sea Mask Overlay
var lyr_LSM = new ol.layer.Image({
    opacity: 1,
    title: 'Land Sea Mask',
    source: new ol.source.ImageStatic({
        url: "./layers/land_sea_mask.png", // Ensure this matches your actual mask filename in the layers folder
        projection: 'EPSG:4326',
        alwaysInRange: true,
        imageExtent: [-180.050000, -90.050000, 180.050000, 90.050000]
    })
});

// Set Initial Visibilities
lyr_BaseMap.setVisible(true);  // Base map stays ON permanently
lyr_LSM.setVisible(false);     // Mask starts OFF (or set to true if preferred)

// Register layers into OpenLayers map array
var layersList = [lyr_BaseMap, lyr_LSM];
