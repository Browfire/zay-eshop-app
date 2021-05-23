import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomePrincipalInterface } from '../interfaces/home-principal.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  homePrincipalInfo?: HomePrincipalInterface;

  constructor(public http: HttpClient) { }

  public getHomePrincipalInfo() {
    this.http.get<HomePrincipalInterface>('https://zay-shop-base-default-rtdb.firebaseio.com/home/principal.json')
      .subscribe(resp => {
        this.homePrincipalInfo = resp;
      })
  }
}
