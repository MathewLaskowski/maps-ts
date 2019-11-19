import GoogleMapsLoader from 'google-maps'
import { User } from './User';
import { Company } from './Company'

interface Mappable {
  location: {
    lat: number,
    lng: number
  }
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    GoogleMapsLoader.KEY = process.env.GOOGLE_MAPS_KEY;
    GoogleMapsLoader.load(google => {
      this.googleMap = new google.maps.Map(document.getElementById(divId), {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        }
      });
    });
  }

  addMarker(mappable: Mappable): void {
    GoogleMapsLoader.load(google => {
      new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: mappable.location.lat,
          lng: mappable.location.lng
        }
      })
    })
  }
}