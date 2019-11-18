// import { User } from './User';
// import { Company } from './Company'
import GoogleMapsLoader from 'google-maps'

// const user = new User();
// const company = new Company();

// console.log(user)
// console.log(company)

const mapDiv = document.getElementById('map');
GoogleMapsLoader.KEY = process.env.GOOGLE_MAPS_KEY;
GoogleMapsLoader.load(function(google) {
  new google.maps.Map(mapDiv, {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0
    }
  });
});
