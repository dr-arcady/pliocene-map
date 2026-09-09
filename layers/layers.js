var wms_layers = [];

var lyr_Map03_PALEOMAP_6min_Pliocene_5Ma_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Map03_PALEOMAP_6min_Pliocene_5Ma<br />\
    <img src="styles/legend/Map03_PALEOMAP_6min_Pliocene_5Ma_0_0.png" /> -7000.0000<br />\
    <img src="styles/legend/Map03_PALEOMAP_6min_Pliocene_5Ma_0_1.png" /> -2625.0000<br />\
    <img src="styles/legend/Map03_PALEOMAP_6min_Pliocene_5Ma_0_2.png" /> 1750.0000<br />\
    <img src="styles/legend/Map03_PALEOMAP_6min_Pliocene_5Ma_0_3.png" /> 6125.0000<br />\
    <img src="styles/legend/Map03_PALEOMAP_6min_Pliocene_5Ma_0_4.png" /> 10500.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Map03_PALEOMAP_6min_Pliocene_5Ma_0.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [-180.050000, -90.050000, 180.050000, 90.050000]
        })
    });

lyr_Map03_PALEOMAP_6min_Pliocene_5Ma_0.setVisible(true);
var layersList = [lyr_Map03_PALEOMAP_6min_Pliocene_5Ma_0];
