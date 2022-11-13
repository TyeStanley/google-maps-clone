const MAPBOX_ACCESS_TOKEN = 'hidden';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true });

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: 'mapbox://styles/mapbox/streets-v11',
    center: centerPosition,
    zoom: 15
  })
  map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
  });
  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(
    new MapboxDirections({
      accessToken: MAPBOX_ACCESS_TOKEN
    }),
    'top-left'
  );
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([29.74, -95.35])
}