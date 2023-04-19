import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private httpclient: HttpClient) {
  }

  getAlbum() {
    return this.httpclient.get<any>('https://jsonplaceholder.typicode.com/albums')
  }
}
