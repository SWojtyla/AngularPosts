import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../user/user.model";
import { UserDataService } from "../user/user.data.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

declare var H: any;

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  private platform: any;

  @ViewChild("map")
  public mapElement: ElementRef;

  private appId: string;
  private appCode: string;

  public weather: any;

  public loadingError$ = this._userDataService.loadingError$;
  private _fetchUsers$: Observable<User[]> = this._userDataService.users$;

  public constructor(
    private _userDataService: UserDataService,
    private http: HttpClient
  ) {
    this.platform = new H.service.Platform({
      app_id: "4NR12Z3b2QiGCy2Y5jyG",
      app_code: "QZ3TbXEvwbFplBPXsJPHwg"
    });
    this.appId = "GLxqbgPJ8TlnCnbwx3yK";
    this.appCode = "p4gsZNZ7S_CzPvNmUVYOiw";
    this.weather = [];
  }

  public getWeather(coordinates: any) {
    this.http
      .jsonp(
        "https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude=" +
          coordinates.latitude +
          "&longitude=" +
          coordinates.longitude +
          "&app_id=" +
          this.appId +
          "&app_code=" +
          this.appCode,
        "jsonpCallback"
      )
      .pipe(map(result => (<any>result).dailyForecasts.forecastLocation))
      .subscribe(
        result => {
          this.weather = result.forecast;
        },
        error => {
          console.error(error);
        }
      );
  }
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.getWeather(position.coords);
      });
    } else {
      console.error("The browser does not support geolocation...");
    }
  }
  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 10
      }
    );
  }
  get users$(): Observable<User[]> {
    return this._fetchUsers$;
  }
  addnewPost(post) {
    this._userDataService.addNewPost(post).subscribe();
  }
}
