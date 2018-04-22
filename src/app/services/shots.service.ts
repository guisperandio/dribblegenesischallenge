import { Shot } from './../interfaces/shot.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { API_URL_SHOTS, API_URL_USER } from '../../environments/global.var';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShotsService {

  constructor(
    private http: HttpClient
  ) { }

  getShots(): Observable<any> {
    return this.http.get(API_URL_SHOTS)
      .map((res: Shot) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  }

  getUser(): Observable<any> {
    return this.http.get(API_URL_USER)
      .map((res: Shot) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  }
}
