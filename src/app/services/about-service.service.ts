import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AboutUsInterface } from 'src/app/interfaces/about-us.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {

  aboutInfo?: AboutUsInterface;

  constructor(public http: HttpClient) { }

  public getAboutInfo() {
    this.http.get<AboutUsInterface>('https://zay-shop-base-default-rtdb.firebaseio.com/about.json')
      .subscribe( resp => {
        this.aboutInfo = resp;
      });
  }

}
