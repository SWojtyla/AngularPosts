import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

@Component({
    selector: 'here-map',
    templateUrl: './here-map.component.html',
    styleUrls: ['./here-map.component.css']
})
export class HereMapComponent implements OnInit {

    @ViewChild("map")
    public mapElement: ElementRef;

    @Input()
    public appId: any;

    @Input()
    public appCode: any;

    
    public lat: any;

    
    public lng: any;

    @Input()
    public width: any;

    @Input()
    public height: any;

    public constructor() {
        this.getPosition().then(pos=>
            {
               console.log(`Position: ${pos.lng} ${pos.lat}`);
               this.lat = pos.lat;
               this.lng = pos.lng;
            });
     }

    public ngOnInit() { }

    public ngAfterViewInit() {

        this.getPosition().then(pos=>
            {
               console.log(`Position: ${pos.lng} ${pos.lat}`);
               this.lat = pos.lat;
               this.lng = pos.lng;
               let platform = new H.service.Platform({
                "app_id": this.appId,
                "app_code": this.appCode
            });
            let defaultLayers = platform.createDefaultLayers();
            let map = new H.Map(
                this.mapElement.nativeElement,
                defaultLayers.normal.map,
                {
                    zoom: 10,
                    center: { lat: this.lat, lng: this.lng }
                }
            );
            });
        
    }

    getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }
}