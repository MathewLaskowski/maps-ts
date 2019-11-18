// import { User } from './User';
// import { Company } from './Company'

// const user = new User();
// const company = new Company();

// console.log(user)
// console.log(company)

const mapDiv = document.getElementById('map');
window.onload = function() {
  new google.maps.Map(mapDiv, {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0
    }
  });
}