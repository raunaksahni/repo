import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ed76429cf1bd492cb4ce17bb4ccb42f7"

//topheadding()
topHeading():Observable<any>
{
  return this._http.get(this.newsApiUrl);
}

}
