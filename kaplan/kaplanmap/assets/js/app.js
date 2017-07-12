var map, featureList, artifactsSearch = [], documentsSearch = [], photographicimagesSearch = [], printedworksSearch = [], tradecardsSearch = [];

$(document).ready(function() {
  getViewport();
});
$(document).on("click", ".feature-row", function(e) {
  $(document).off("mouseout", ".feature-row", clearHighlight);
  sidebarClick(parseInt($(this).attr("id"), 10));
});

if ( !("ontouchstart" in window) ) {
  $(document).on("mouseover", ".feature-row", function(e) {
    highlight.clearLayers().addLayer(L.circleMarker([$(this).attr("lat"), $(this).attr("lng")], highlightStyle));
  });
}

$(document).on("mouseout", ".feature-row", clearHighlight);
$(document).on("mouseout", ".feature-row", clearHighlight);

$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#full-extent-btn").click(function() {
  map.fitBounds(artifacts.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#legend-btn").click(function() {
  $("#legendModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#login-btn").click(function() {
  $("#loginModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#list-btn").click(function() {
  animateSidebar();
  return false;
});

$("#nav-btn").click(function() {
  $(".navbar-collapse").collapse("toggle");
  return false;
});

$("#sidebar-toggle-btn").click(function() {
  animateSidebar();
  return false;
});

$("#sidebar-hide-btn").click(function() {
  animateSidebar();
  return false;
});

function animateSidebar() {
  $("#sidebar").animate({
    width: "toggle"
  }, 350, function() {
    map.invalidateSize();
  });
}

function sizeLayerControl() {
  $(".leaflet-control-layers").css("max-height", $("#map").height() - 50);
}

function clearHighlight() {
  highlight.clearLayers();
}



function getViewport() {
  if (sidebar.isVisible()) {
    map.setActiveArea({
      position: "absolute",
      top: "0px",
      left: $(".leaflet-sidebar").css("width"),
      right: "0px",
      height: $("#map").css("height")
    });
  } else {
    map.setActiveArea({
      position: "absolute",
      top: "0px",
      left: "0px",
      right: "0px",
      height: $("#map").css("height")
    });
  }
  if (document.body.clientWidth <= 767) {
    $(".leaflet-sidebar .close").css("top", "8px");
  } else {
    $(".leaflet-sidebar .close").css("top", "15px");
  }
}

function animateSidebar() {
  $("#sidebar").animate({
    width: "toggle"
  }, 350, function() {
    map.invalidateSize();
  });
}

function sizeLayerControl() {
  $(".leaflet-control-layers").css("max-height", $("#map").height() - 50);
}

function clearHighlight() {
  highlight.clearLayers();
}
function sidebarClick(id) {
  var layer = markerClusters.getLayer(id);
  map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 17);
  layer.fire("click");
  /* Hide sidebar and go to the map on small screens */
  if (document.body.clientWidth <= 767) {
    $("#sidebar").hide();
    map.invalidateSize();
  }
}

  function syncSidebar() {
  /* Empty sidebar features */
  $("#feature-table tbody").empty();
  /* Loop through theaters layer and add only features which are in the map bounds */
  artifacts.eachLayer(function (layer) {
    if (map.hasLayer(artifactsLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
      $("#feature-table tbody").append('<tr style="cursor: pointer;" onclick="sidebarClick('+L.stamp(layer)+'); return false;"><td class="feature-name">'+layer.feature.properties.name+'<i class="fa fa-chevron-right pull-right"></td></tr>');
    
}}});

    documents.eachLayer(function (layer) {
    if (map.hasLayer(documentsLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
      $("#feature-table tbody").append('<tr style="cursor: pointer;" onclick="sidebarClick('+L.stamp(layer)+'); return false;"><td class="feature-name">'+layer.feature.properties.name+'<i class="fa fa-chevron-right pull-right"></td></tr>');
    
}}});

  /* Loop through museums layer and add only features which are in the map bounds */
  photographicimages.eachLayer(function (layer) {
    if (map.hasLayer(photographicimagesLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-table tbody").append('<tr style="cursor: pointer;" onclick="sidebarClick('+L.stamp(layer)+'); return false;"><td class="feature-name">'+layer.feature.properties.name+'<i class="fa fa-chevron-right pull-right"></td></tr>');
    
}}});
  printedworks.eachLayer(function (layer) {
    if (map.hasLayer(printedworksLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
      $("#feature-table tbody").append('<tr style="cursor: pointer;" onclick="sidebarClick('+L.stamp(layer)+'); return false;"><td class="feature-name">'+layer.feature.properties.name+'<i class="fa fa-chevron-right pull-right"></td></tr>');
    
}}});
    tradecards.eachLayer(function (layer) {
    if (map.hasLayer(tradecardsLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
      $("#feature-table tbody").append('<tr style="cursor: pointer;" onclick="sidebarClick('+L.stamp(layer)+'); return false;"><td class="feature-name">'+layer.feature.properties.name+'<i class="fa fa-chevron-right pull-right"></td></tr>');
    
}}});

  featureList = new List("features", {
    valueNames: ["feature-name", "feature-address"]
  });
  featureList.sort("feature-name", {
    order: "asc"
  });
}

  

/* Basemap Layers */
var cartoLight = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.svg", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
});
var usgsImagery = L.layerGroup([L.tileLayer("http://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}", {
  maxZoom: 15,
}), L.tileLayer.wms("http://raster.nationalmap.gov/arcgis/services/Orthoimagery/USGS_EROS_Ortho_SCALE/ImageServer/WMSServer?", {
  maxZoom: 19,
  layers: "0",
  format: 'image/jpeg',
  transparent: true,
  attribution: "Aerial Imagery courtesy USGS"
})]);

var us1859 = L.tileLayer("http://maps.georeferencer.com/georeferences/46827090911/2017-06-26T11:43:17.994838Z/map/{z}/{x}/{y}.svg?key=hmpAOeUBKMlwNo4fmiyl", {
  maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'});


var us1880 = L.tileLayer("http://maps.georeferencer.com/georeferences/769587602490/2017-06-16T16:11:55.286870Z/map/{z}/{x}/{y}.svg?key=hmpAOeUBKMlwNo4fmiyl", {
  maxZoom: 19,
  attribution: '<a href="http://davidrumsey.georeferencer.com/maps/400938382023">Map Showing Geographical Divisions of the U.S. Geological Survey, 1880 by Clarence King, Created with the David Rumsey Georeferencer</a>'});


/* Overlay Layers */
var highlight = L.geoJson(null);
var highlightStyle = {
  stroke: false,
  fillColor: "#00FFFF",
  fillOpacity: 0.7,
  radius: 10
};
/* Single marker cluster layer to hold all clusters */
var markerClusters = new L.MarkerClusterGroup({
  spiderfyonMaxZoom: false,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true,
spiderLegPolylineOptions: {weight: 0},
  clockHelpingCircleOptions: {weight: .7, opacity: 1, color: 'black', fillOpacity: 0, dashArray: '10 5'},

  elementsPlacementStrategy: 'clock',
  helpingCircles: true,

  spiderfyDistanceSurplus: 25,
  spiderfyDistanceMultiplier: 1,

  elementsMultiplier: 1.4,
  firstCircleElements: 8

});




/* Empty layer placeholder to add to layer control for listening when to add/remove beers to markerClusters layer */
var artifactsLayer = L.geoJson(null);
var artifacts = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/artifacts.svg",
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.name,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.name + "</td></tr>" + "<tr><th>People/Businesses Affliated</th><td>" + feature.properties.merger + "</td></tr>" + "<tr><th>Location</th><td>" + feature.properties.address + "</td></tr>" + "<tr><th>Date</th><td>" + feature.properties.date + "</td></tr>" + "<tr><th>Sub Genre</th><td>" + feature.properties.genre_subl + "</td></tr><table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.name);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
            stroke: false,
            fillColor: "#00FFFF",
            fillOpacity: 0.7,
            radius: 10
          }));
        }
      });
      $("#artifacts-table tbody").append('<tr style="cursor: pointer;" onclick="sidebarClick('+L.stamp(layer)+'); return false;"><td class="feature-name">'+layer.feature.properties.name+'<i class="fa fa-chevron-right pull-right"></td></tr>');
      artifactsSearch.push({
        name: layer.feature.properties.name,
        address: layer.feature.properties.address,
        source: "artifacts",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/artifacts.geojson", function (data) {
  artifacts.addData(data);
  map.addLayer(artifactsLayer);
});

var documentsLayer = L.geoJson(null);
var documents = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/documents.svg",
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.name,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.name + "</td></tr>" + "<tr><th>People/Businesses Affliated</th><td>" + feature.properties.merger + "</td></tr>" + "<tr><th>Location</th><td>" + feature.properties.address + "</td></tr>" + "<tr><th>Date</th><td>" + feature.properties.date + "</td></tr>" + "<tr><th>Sub Genre</th><td>" + feature.properties.genre_subl + "</td></tr><table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.name);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
            stroke: false,
            fillColor: "#00FFFF",
            fillOpacity: 0.7,
            radius: 10
          }));
        }
      });
      $("#documents-table tbody").append('<tr style="cursor: pointer;" onclick="sidebarClick('+L.stamp(layer)+'); return false;"><td class="feature-name">'+layer.feature.properties.name+'<i class="fa fa-chevron-right pull-right"></td></tr>');
      documentsSearch.push({
        name: layer.feature.properties.name,
        address: layer.feature.properties.address,
        source: "documents",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/documents.geojson", function (data) {
  documents.addData(data);
  map.addLayer(documentsLayer);
});

var photographicimagesLayer = L.geoJson(null);
var photographicimages = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/photographicimages.svg",
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.name,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.name + "</td></tr>" + "<tr><th>People/Businesses Affliated</th><td>" + feature.properties.merger + "</td></tr>" + "<tr><th>Location</th><td>" + feature.properties.address + "</td></tr>" + "<tr><th>Date</th><td>" + feature.properties.date + "</td></tr>" + "<tr><th>Sub Genre</th><td>" + feature.properties.genre_subl + "</td></tr><table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.name);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
            stroke: false,
            fillColor: "#00FFFF",
            fillOpacity: 0.7,
            radius: 10
          }));
        }
      });
      $("#photographicimages-table tbody").append('<tr style="cursor: pointer;" onclick="sidebarClick('+L.stamp(layer)+'); return false;"><td class="feature-name">'+layer.feature.properties.name+'<i class="fa fa-chevron-right pull-right"></td></tr>');
      photographicimagesSearch.push({
        name: layer.feature.properties.name,
        address: layer.feature.properties.address,
        source: "photographicimages",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/photographicimages.geojson", function (data) {
  photographicimages.addData(data);
  map.addLayer(photographicimagesLayer);
});

var printedworksLayer = L.geoJson(null);
var printedworks = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/printedworks.svg",
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.name,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.name + "</td></tr>" + "<tr><th>People/Businesses Affliated</th><td>" + feature.properties.merger + "</td></tr>" + "<tr><th>Location</th><td>" + feature.properties.address + "</td></tr>" + "<tr><th>Date</th><td>" + feature.properties.date + "</td></tr>" + "<tr><th>Sub Genre</th><td>" + feature.properties.genre_subl + "</td></tr><table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.name);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
            stroke: false,
            fillColor: "#00FFFF",
            fillOpacity: 0.7,
            radius: 10
          }));
        }
      });
      $("#printedworks-table tbody").append('<tr style="cursor: pointer;" onclick="sidebarClick('+L.stamp(layer)+'); return false;"><td class="feature-name">'+layer.feature.properties.name+'<i class="fa fa-chevron-right pull-right"></td></tr>');
      printedworksSearch.push({
        name: layer.feature.properties.name,
        address: layer.feature.properties.address,
        source: "printedworks",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/printedworks.geojson", function (data) {
  printedworks.addData(data);
  map.addLayer(printedworksLayer);
});

var tradecardsLayer = L.geoJson(null);
var tradecards = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/tradecards.svg",
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.name,
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.name + "</td></tr>" + "<tr><th>People/Businesses Affliated</th><td>" + feature.properties.merger + "</td></tr>" + "<tr><th>Location</th><td>" + feature.properties.address + "</td></tr>" + "<tr><th>Date</th><td>" + feature.properties.date + "</td></tr>" + "<tr><th>Sub Genre</th><td>" + feature.properties.genre_subl + "</td></tr>" + "<tr><th>Image (if available)</th><td><a class='url-break' href='" + feature.properties.homepage + "' target='_blank'>" + feature.properties.homepage + "</a></td></tr>" + "<tr><th>BA Page</th><td><a class='url-break' href='" + feature.properties.beersadvocatepage + "' target='_blank'>" + feature.properties.beersadvocatepage + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.name);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
            stroke: false,
            fillColor: "#00FFFF",
            fillOpacity: 0.7,
            radius: 10
          }));
        }
      });
      $("#feature-table tbody").append('<tr style="cursor: pointer;" onclick="sidebarClick('+L.stamp(layer)+'); return false;"><td class="feature-name">'+layer.feature.properties.name+'<i class="fa fa-chevron-right pull-right"></td></tr>');
      tradecardsSearch.push({
        name: layer.feature.properties.name,
        address: layer.feature.properties.address,
        source: "tradecards",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
    }
  }
});
$.getJSON("data/tradecards.geojson", function (data) {
  tradecards.addData(data);
  map.addLayer(tradecardsLayer);
});

map = L.map("map", {
  zoom: 10,
  center: [42.48814, -71.25861],
  layers: [cartoLight, markerClusters, highlight],
  zoomControl: false,
  attributionControl: false
});

/* Layer control listeners that allow for a single markerClusters layer */

map.on("overlayadd", function(e) {
  if (e.layer === artifactsLayer) {
    markerClusters.addLayer(artifacts);
  }
});
map.on("overlayremove", function(e) {
  if (e.layer === artifactsLayer) {
    markerClusters.removeLayer(artifacts);
  }
});


map.on("overlayadd", function(e) {
  if (e.layer === documentsLayer) {
    markerClusters.addLayer(documents);
  }
});
map.on("overlayremove", function(e) {
  if (e.layer === documentsLayer) {
    markerClusters.removeLayer(documents);
  }
});

map.on("overlayadd", function(e) {
  if (e.layer === photographicimagesLayer) {
    markerClusters.addLayer(photographicimages);
  }
});
map.on("overlayremove", function(e) {
  if (e.layer === photographicimagesLayer) {
    markerClusters.removeLayer(photographicimages);
  }
});

map.on("overlayadd", function(e) {
  if (e.layer === printedworksLayer) {
    markerClusters.addLayer(printedworks);
  }
});
map.on("overlayremove", function(e) {
  if (e.layer === printedworksLayer) {
    markerClusters.removeLayer(printedworks);
  }
});

map.on("overlayadd", function(e) {
  if (e.layer === tradecardsLayer) {
    markerClusters.addLayer(tradecards);
  }
});
map.on("overlayremove", function(e) {
  if (e.layer === tradecardsLayer) {
    markerClusters.removeLayer(tradecards);
  }
});


map.on("moveend", function (e) {
  syncSidebar();
});

/* Clear feature highlight when map is clicked */
map.on("click", function(e) {
  highlight.clearLayers();
});

/* Attribution control */
function updateAttribution(e) {
  $.each(map._layers, function(index, layer) {
    if (layer.getAttribution) {
      $("#attribution").html((layer.getAttribution()));
    }
  });
}
map.on("layeradd", updateAttribution);
map.on("layerremove", updateAttribution);

var attributionControl = L.control({
  position: "bottomright"
});
attributionControl.onAdd = function (map) {
  var div = L.DomUtil.create("div", "leaflet-control-attribution");
  div.innerHTML = "<span class='hidden-xs'>Developed by <a href='http://bryanmcbride.com'>bryanmcbride.com</a> | </span><a href='#' onclick='$(\"#attributionModal\").modal(\"show\"); return false;'>Attribution</a>";
  return div;
};
map.addControl(attributionControl);





var zoomControl = L.control.zoom({
  position: "bottomright"
}).addTo(map);

/* GPS enabled geolocation control set to follow the user's location */
var locateControl = L.control.locate({
  position: "bottomright",
  drawCircle: true,
  follow: true,
  setView: true,
  keepCurrentZoomLevel: false,
  markerStyle: {
    weight: 1,
    opacity: 0.8,
    fillOpacity: 0.8
  },
  circleStyle: {
    weight: 1,
    clickable: false
  },
  icon: "icon-direction",
  metric: false,
  strings: {
    title: "My location",
    popup: "You are within {distance} {unit} from this point",
    outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
  },
  locateOptions: {
    maxZoom: 17,
    watch: true,
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 10000
  }
}).addTo(map);

var sidebar = L.control.sidebar("sidebar", {
  closeButton: true,
  position: "left"
}).on("shown", function () {
  getViewport();
}).on("hidden", function () {
  getViewport();
}).addTo(map);

/* Larger screens get expanded layer control and visible sidebar */
if (document.body.clientWidth <= 767) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
  sidebar.show();
}

var baseLayers = {
  "Street Map": cartoLight,
  "Satellite": usgsImagery,
  
};

var groupedOverlays = {
"Historic Maps": {
	"US 1859": us1859,
	"US 1880": us1880
},
  "Points of Interest": {
    "<img src='assets/img/artifacts.svg' width='28' height='28'>&nbsp;Artifacts": artifactsLayer, 
   "<img src='assets/img/documents.svg' width='28' height='28'>&nbsp;Documents": documentsLayer,
   "<img src='assets/img/photographicimages.svg' width='28' height='28'>&nbsp;Photographic Images": photographicimagesLayer, 
   "<img src='assets/img/printedworks.svg' width='28' height='28'>&nbsp;Printed Works": printedworksLayer,
   "<img src='assets/img/tradecards.svg' width='28' height='28'>&nbsp;Trade Cards": tradecardsLayer
    
  }
};

var layerControl = L.control.groupedLayers(baseLayers, groupedOverlays, {
  collapsed: isCollapsed
}).addTo(map);

/* Highlight search box text on click */
$("#searchbox").click(function () {
  $(this).select();
});

/* Typeahead search functionality */
$(document).one("ajaxStop", function () {
  /* Fit map to brews bounds */
  map.fitBounds(artifacts.getBounds());
  $("#loading").hide();

  var artifactsBH = new Bloodhound({
    name: "artifacts",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: artifactsSearch,
    limit: 10
  });
  
   var documentsBH = new Bloodhound({
    name: "documents",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: documentsSearch,
    limit: 10
  });
    var photographicimagesBH = new Bloodhound({
    name: "photographicimages",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: photographicimagesSearch,
    limit: 10
  });
     var printedworksBH = new Bloodhound({
    name: "printedworks",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: printedworksSearch,
    limit: 10
  });

  var tradecardsBH = new Bloodhound({
    name: "tradecards",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: tradecardsSearch,
    limit: 10
  });
	

    var geonamesBH = new Bloodhound({
    name: "GeoNames",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      url: "http://api.geonames.org/searchJSON?username=dmofot&featureClass=P&maxRows=5&countryCode=US&name_startsWith=%QUERY",
      filter: function (data) {
        return $.map(data.geonames, function (result) {
          return {
            name: result.name + ", " + result.adminCode1,
            lat: result.lat,
            lng: result.lng,
            source: "GeoNames"
          };
        });
      },
      ajax: {
        beforeSend: function (jqXhr, settings) {
          settings.url += "&east=" + map.getBounds().getEast() + "&west=" + map.getBounds().getWest() + "&north=" + map.getBounds().getNorth() + "&south=" + map.getBounds().getSouth();
          $("#searchicon").removeClass("fa-search").addClass("fa-refresh fa-spin");
        },
        complete: function (jqXHR, status) {
          $('#searchicon').removeClass("fa-refresh fa-spin").addClass("fa-search");
        }
      }
    },
    limit: 10
  });
  artifactsBH.initialize();
  documentsBH.initialize();
  photographicimagesBH.initialize();
  printedworksBH.initialize();
  tradecardsBH.initialize();
  geonamesBH.initialize();

  /* instantiate the typeahead UI */
  $("#searchbox").typeahead({
    minLength: 3,
    highlight: true,
    hint: false
  }, {
    name: "artifacts",
    displayKey: "name",
    source: artifactsBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/artifacts.svg' width='28' height='28'>&nbsp;artifacts</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {
	  name: "documents",
    displayKey: "name",
    source: documentsBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/documents.svg' width='28' height='28'>&nbsp;documents</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
    }, {
	  name: "photographicimages",
    displayKey: "name",
    source: photographicimagesBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/photographicimages.svg' width='28' height='28'>&nbsp;photographicimages</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
    }, {
	  name: "printedworks",
    displayKey: "name",
    source: printedworksBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/printedworks.svg' width='28' height='28'>&nbsp;printedworks</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
    }, {
	  name: "tradecards",
    displayKey: "name",
    source: tradecardsBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/tradecards.svg' width='28' height='28'>&nbsp;tradecards</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }


    },{
    name: "GeoNames",
    displayKey: "name",
    source: geonamesBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/globe.svg' width='25' height='25'>&nbsp;GeoNames</h4>"
    }
  }).on("typeahead:selected", function (obj, datum) {
    if (datum.source === "artifacts") {
      if (!map.hasLayer(artifactsLayer)) {
        map.addLayer(artifactsLayer);
      }
      
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
      if (datum.source === "documents") {
      if (!map.hasLayer(documentsLayer)) {
        map.addLayer(documentsLayer);
      }
      
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
    
    if (datum.source === "photographicimages") {
      if (!map.hasLayer(photographicimagesLayer)) {
        map.addLayer(photographicimagesLayer);
      }
      
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
    if (datum.source === "printedworks") {
      if (!map.hasLayer(printedworksLayer)) {
        map.addLayer(printedworksLayer);
      }
      
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
    if (datum.source === "tradecards") {
      if (!map.hasLayer(tradecardsLayer)) {
        map.addLayer(tradcardsLayer);
      }
      
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
    
    if (datum.source === "GeoNames") {
      map.setView([datum.lat, datum.lng], 14);
    }
    if ($(".navbar-collapse").height() > 50) {
      $(".navbar-collapse").collapse("hide");
    }
  }).on("typeahead:opened", function () {
    $(".navbar-collapse.in").css("max-height", $(document).height() - $(".navbar-header").height());
    $(".navbar-collapse.in").css("height", $(document).height() - $(".navbar-header").height());
  }).on("typeahead:closed", function () {
    $(".navbar-collapse.in").css("max-height", "");
    $(".navbar-collapse.in").css("height", "");
  });
  $(".twitter-typeahead").css("position", "static");
  $(".twitter-typeahead").css("display", "block");
});

/* Placeholder hack for IE */
if (navigator.appName == "Microsoft Internet Explorer") {
  $("input").each(function () {
    if ($(this).val() === "" && $(this).attr("placeholder") !== "") {
      $(this).val($(this).attr("placeholder"));
      $(this).focus(function () {
        if ($(this).val() === $(this).attr("placeholder")) $(this).val("");
      });
      $(this).blur(function () {
        if ($(this).val() === "") $(this).val($(this).attr("placeholder"));
      });
    }
  });
}
