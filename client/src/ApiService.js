const BASE_URL = 'http://localhost:3001';

// import ApiKey from './ApiKey';

function mapRequest(path) {
  return fetch(path)
    .then((res) => (res.status < 400 ? res : Promise.reject()))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => {
      console.error('Map Request Error:', err);
    });
}

function fetchRequest(path, options) {
  return fetch(BASE_URL + path, options)
    .then((res) => (res.status < 400 ? res : Promise.reject()))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => {
      console.error('Error: ', err);
    });
}

function getGeolocatedGyms(lat, lng) {
  return mapRequest(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/gym.json?bbox=${(lng -= 0.05)}%2C${(lat -= 0.05)}%2C${(lng += 0.05)}%2C${(lat += 0.05)}&limit=10&proximity=${lng}%2C${lat}&access_token=${
      process.env.REACT_APP_MAP_KEY
    }`
  );
}

function getWorkouts() {
  return fetchRequest('/dashboard');
}

function postWorkout(body) {
  return fetchRequest('/exercise', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

function addInfo(body, id) {
  return fetchRequest('/addinfo/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

function getUser(id) {
  return fetchRequest('/user/' + id);
}

function getWorkoutInfo() {
  return fetchRequest('/workoutinfo');
}

const ApiService = {
  getGeolocatedGyms,
  getWorkouts,
  postWorkout,
  addInfo,
  getUser,
  getWorkoutInfo,
};

export default ApiService;
