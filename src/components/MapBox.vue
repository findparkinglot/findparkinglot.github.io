<script setup>
import { onMounted, ref,watch } from 'vue'
import axios from 'axios';

import mapboxgl from 'mapbox-gl';


const props = defineProps({
  parkingTypeKeyArray: Array,
  degreeOfFriendlinessKeyArray: Array,
  mapDataList: Array,
  getLngLat: Boolean,
  mapStylesSelected: String,
  goToParkingPlaceData: Object,
  routeData: Object,
})
const emits = defineEmits(["parkingInfo","update:goToParkingPlaceData","update:routeData"]);


const map = ref(null)
const mapData = ref({
  map: null,
  accessToken: 'pk.eyJ1IjoiamFtZXN0aW05MjE1IiwiYSI6ImNrdmo2Y2I4aDVmejEzMm1zbThsdGdoajAifQ.UfBJAI7fFsv2wcAEBo6WUA',
  bounds: [
    [119.3620389067818, 21.83282743468497],
    [122.07013958372167, 25.34391086143183],
  ],
  center: [121.5173399, 25.0475613],
  zoom: 14,
  userCoordinates: [null, null],
})

const lngLatMaker = ref(null)

const currentMarkers = ref([])

const isShowMarker = (icon) => {
  let isShow = true;

  //判斷 icon 同時出現在 parkingTypeKeyArray 與 degreeOfFriendlinessKeyArray
  if (icon) {
    if (
      props.parkingTypeKeyArray.indexOf(icon) == -1 ||
      props.degreeOfFriendlinessKeyArray.indexOf(icon) == -1
    ) {
      isShow = false;
    }
  } else {
    isShow = false;
  }
  
  return isShow;
}

const isMatchLngLat = (coordinates) => {
  // console.log("["+map.value.getBounds()._sw.lng+" , "+coordinates[0]+" , "+map.value.getBounds()._ne.lng+"]");
  // console.log("["+map.value.getBounds()._sw.lat+" , "+coordinates[1]+" , "+map.value.getBounds()._ne.lat+"]");
  var isMatch = false;
  if (map.value.transform) {
    if (
      map.value.getBounds()._sw.lng < coordinates[0] &&
      map.value.getBounds()._ne.lng > coordinates[0] &&
      map.value.getBounds()._sw.lat < coordinates[1] &&
      map.value.getBounds()._ne.lat > coordinates[1]
    ) {
      isMatch = true;
    }
  }
  return isMatch;
}



const getIconImgUrl = (url) => {
  if(url.match('http')){
    return url;
  }else{
    return new URL(`/src/assets/MapData/My Maps/PackingMarkerList/images/${url}`, import.meta.url).href
  }
}

const setMaker = () => {
  if (currentMarkers.value !== null) {
    for (var i = currentMarkers.value.length - 1; i >= 0; i--) {
      currentMarkers.value[i].remove();
    }
  }

  for(const MapGroup of props.mapDataList){
    
    // Add markers to the map.
    for (const marker of MapGroup.features) {
      if (
        isMatchLngLat(marker.geometry.coordinates) &&
        isShowMarker(marker.properties.icon)
      ) {
        // Create a DOM element for each marker.
        const el = document.createElement("div");
        // const width = marker.properties.iconSize[0];
        // const height = marker.properties.iconSize[1];
        el.className = "marker";
        // el.style.width = `${width}px`;
        // el.style.height = `${height}px`;
        // el.style.visibility = '';

        const tag = document.createElement("div");
        tag.className = "tag";
        const img = document.createElement("div");
        img.className = "img";
        if(marker.properties.icon){
          img.style.backgroundImage = `url(${getIconImgUrl(marker.properties.icon)})`;
          img.style.backgroundSize = 'cover';
          img.style.backgroundPosition = 'center center';
        }
        
        el.append(tag);
        el.append(img);
        

        el.addEventListener("click", () => {
          map.value.flyTo({
            // These options control the ending camera position: centered at
            // the target, at zoom level 9, and north up.
            center: marker.geometry.coordinates,
            zoom: 17,
            bearing: 0,

            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            speed: 1.5, // make the flying slow
            curve: 1.5, // change the speed at which it zooms out

            // This can be any easing function: it takes a number between
            // 0 and 1 and returns another number between 0 and 1.
            easing: (t) => t,

            // this animation is considered essential with respect to prefers-reduced-motion
            essential: true,
          });
          var data = {
            name: MapGroup.name,
            properties: marker.properties,
            geometry: marker.geometry.coordinates,
          }

          emits("parkingInfo", data);

          // window.alert(marker.properties.info);
        });

        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
          marker.properties.name
        );

        // Add markers to the map.
        var oneMarker = new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(popup) // sets a popup on this marker
          .addTo(map.value);
        currentMarkers.value.push(oneMarker);
      }
    }

  }

}

const setMakerInit = () => {
  map.value.on("dragend", () => {
    if(props.goToParkingPlaceData == null) setMaker();
  });
  map.value.on("zoomend", () => {
    if(props.goToParkingPlaceData == null) setMaker();
  });

  setMaker();

  console.log("Map Init!!");
  document.getElementById("loading-cover").classList.add("active");
  setTimeout(() => {
    document.getElementById("loading-cover").remove();
  }, 1000);
}

const setUserArea = () => {

  var lngLat = mapData.value.center[0] + ',' + mapData.value.center[1];

  axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/'+lngLat+'.json?access_token='+mapData.value.accessToken)
  .then(function (response) {
    console.log("test: ",response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

}

const setMap = () => {
  map.value = new mapboxgl.Map({
    container: 'map', // container ID
    style: props.mapStylesSelected, // style URL
    center: mapData.value.center, // starting position [lng, lat]
    zoom: 16, // starting zoom
    trackResize: true,
    maxBounds: mapData.value.bounds,
  });

  setMakerInit();
  setUserArea();

  map.value.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    })
  );

  map.value.on('geolocate', function (e) {
    var bearing = e.coords.heading;
    // 依據使用者的方向旋轉地圖
    map.value.easeTo({
      bearing: bearing,
      duration: 1000,
      offset: [0, 0],
    });
  });
}


const successCallback = (position) => {
  mapData.value.userCoordinates[0] = position.coords.longitude;
  mapData.value.userCoordinates[1] = position.coords.latitude;
  mapData.value.center[0] = position.coords.longitude;
  mapData.value.center[1] = position.coords.latitude;
  setMap();
}

const errorCallback = (error) => {
  var errorTypes={
        0:"不明原因錯誤",
        1:"請提供您的定位資訊", //使用者拒絕提供位置資訊
        2:"無法取得位置資訊",
        3:"位置查詢逾時"
  };
  console.log(errorTypes[error.code]);
  setMap();
}
const onDragEnd = () => {
  const coordinates = document.getElementById("coordinates");
  const lngLat = lngLatMaker.value.getLngLat();
  coordinates.style.display = "block";
  coordinates.innerHTML = `[Longitude, Latitude]<br />[${lngLat.lng}, ${lngLat.lat}]`;
}
const setLngLatMaker = () => {
  lngLatMaker.value = new mapboxgl.Marker({
    draggable: true,
    color: "#2ee7d6",
  })
    .setLngLat(map.value.getCenter())
    .addTo(map.value);

  onDragEnd();

  lngLatMaker.value.on("dragend", onDragEnd);
}

async function getRoute(start,end) {

  map.value.addLayer({
    id: 'point',
    type: 'circle',
    source: {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: start
            }
          }
        ]
      }
    },
    paint: {
      'circle-radius': 10,
      'circle-color': '#2ee7d6'
    }
  });


  // make a directions request using cycling profile
  // an arbitrary start will always be the same
  // only the end or destination will change
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?alternatives=false&language=en&overview=full&steps=true&exclude=toll,motorway,ferry,cash_only_tolls&geometries=geojson&access_token=${mapData.value.accessToken}`,
    { method: 'GET' }
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: route
    }
  };
  emits("update:routeData", data);
  // if the route already exists on the map, we'll reset it using setData
  if (map.value.getSource('route')) {
    map.value.getSource('route').setData(geojson);
  }
  // otherwise, we'll make a new request
  else {
    map.value.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#2ee7d6',
        'line-width': 5,
        'line-opacity': 0.75
      }
    });

  }
  // add turn instructions here at the end
}


const getUserLocation = (target) => {
  if (mapData.value.userCoordinates[0] !== null) {

    //判斷 source 是否有 id 為 point 的圖層，有的話就移除
    if (map.value.getSource('point')) {
      map.value.removeLayer('point');
      map.value.removeSource('point');
    }

    //清除 target 以外的 marker
    if (currentMarkers.value !== null) {
      for (var i = currentMarkers.value.length - 1; i >= 0; i--) {
        if(currentMarkers.value[i].getLngLat().lng != target[0] && currentMarkers.value[i].getLngLat().lat != target[1]){
          currentMarkers.value[i].remove();
        }
        // currentMarkers.value[i].remove();
      }
    }

    // zoom beteween user and target
    var bounds = [
      [mapData.value.userCoordinates[0], mapData.value.userCoordinates[1]],
      [target[0], target[1]]
    ];
    map.value.fitBounds(bounds, {
      padding: { top: 100, bottom: 100, left: 100, right: 100 }
    });


    getRoute(mapData.value.userCoordinates,target);
  }else{
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
    }else{
      console.log("NONE");
    }
  }
}

const removeRoutes = () => {
  if (map.value.getSource('route')) {
    map.value.removeLayer('route');
    map.value.removeSource('route');
  }
  if (map.value.getSource('point')) {
    map.value.removeLayer('point');
    map.value.removeSource('point');
  }

  setMaker();

  emits("update:goToParkingPlaceData", null);
  // setMap();
}




onMounted(()=>{
  mapboxgl.accessToken = mapData.value.accessToken;
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
  }else{
    console.log("NONE");
  }


})

watch(() => props.goToParkingPlaceData, (newVal, oldVal) => {
  if (newVal !== null) {
    getUserLocation(newVal);
  }else{
    removeRoutes();
  }
})

watch(() => props.mapStylesSelected, (newVal, oldVal) => {
  if(oldVal != newVal) map.value.setStyle(props.mapStylesSelected);
})

watch(() => props.getLngLat, (newVal, oldVal) => {
  if (lngLatMaker.value !== null) {
    lngLatMaker.value.remove();
    const coordinates = document.getElementById("coordinates");
    coordinates.style.display = "none";
  }
  if (props.getLngLat == true) {
    setLngLatMaker();
  }
})

watch(() => props.parkingTypeKeyArray, (newVal, oldVal) => {
  setMaker();
})

watch(() => props.degreeOfFriendlinessKeyArray, (newVal, oldVal) => {
  setMaker();
})

</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
</style>
