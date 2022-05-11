import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient: HttpClient) { }


  get(url: string) {
    return new Promise<any>(resolve => {
      this.httpClient.get(url, {params: {},headers: {}}).subscribe(data => {
          resolve(data);
        }, err => {
          resolve(err);
        });
    });
  }
}
