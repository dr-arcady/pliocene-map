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

// --- Paleoclimate GeoTIFF Layers ---

var lsmLayer = new ol.layer.WebGLTile({
  visible: true,
  opacity: 1.0,
  source: new ol.source.GeoTIFF({ sources: [{ url: 'layers/lsm.tif' }] })
});

var topoLayer = new ol.layer.WebGLTile({
  visible: false,
  opacity: 0.8,
  source: new ol.source.GeoTIFF({ sources: [{ url: 'layers/topo.tif' }] })
});

var sstLayer = new ol.layer.WebGLTile({
  visible: false,
  opacity: 0.8,
  source: new ol.source.GeoTIFF({ sources: [{ url: 'layers/sst.tif' }] })
});

var biomeLayer = new ol.layer.WebGLTile({
  visible: false,
  opacity: 0.8,
  source: new ol.source.GeoTIFF({ sources: [{ url: 'layers/mbiome.tif' }] })
});

var soilLayer = new ol.layer.WebGLTile({
  visible: false,
  opacity: 0.8,
  source: new ol.source.GeoTIFF({ sources: [{ url: 'layers/soil.tif' }] })
});

var iceLayer = new ol.layer.WebGLTile({
  visible: false,
  opacity: 0.9,
  source: new ol.source.GeoTIFF({ sources: [{ url: 'layers/icemask.tif' }] })
});

var lakeLayer = new ol.layer.WebGLTile({
  visible: false,
  opacity: 0.9,
  source: new ol.source.GeoTIFF({ sources: [{ url: 'layers/lake.tif' }] })
});

// Add layers to map
map.addLayer(lsmLayer);
map.addLayer(topoLayer);
map.addLayer(sstLayer);
map.addLayer(biomeLayer);
map.addLayer(soilLayer);
map.addLayer(iceLayer);
map.addLayer(lakeLayer);

// Bind Layer Control Panel UI
function setupLayerControl(chkId, opId, layer) {
  var checkbox = document.getElementById(chkId);
  var slider = document.getElementById(opId);

  if (checkbox) {
    checkbox.addEventListener('change', function(e) {
      layer.setVisible(e.target.checked);
    });
  }

  if (slider) {
    slider.addEventListener('input', function(e) {
      layer.setOpacity(parseFloat(e.target.value));
    });
  }
}

setupLayerControl('chk-lsm', 'op-lsm', lsmLayer);
setupLayerControl('chk-topo', 'op-topo', topoLayer);
setupLayerControl('chk-sst', 'op-sst', sstLayer);
setupLayerControl('chk-biome', 'op-biome', biomeLayer);
setupLayerControl('chk-soil', 'op-soil', soilLayer);
setupLayerControl('chk-ice', 'op-ice', iceLayer);
setupLayerControl('chk-lake', 'op-lake', lakeLayer);
