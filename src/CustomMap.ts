import GoogleMapsLoader from 'google-maps'

export interface Mappable {
  location: {
    lat: number,
    lng: number
  };
  markerContent(): string;
  color: string;
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
      const marker = new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: mappable.location.lat,
          lng: mappable.location.lng
        }
      })

      marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
          content: mappable.markerContent()
        })

        infoWindow.open(this.googleMap, marker)
      })
    })
  }
}