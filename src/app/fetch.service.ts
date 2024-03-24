import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private http: HttpClient) {}

  public fetch() {
    return this.http.get<UnsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization: `Client-ID ${environment.unsplashAccessKey}`,
        },
      }
    );
  }
}
