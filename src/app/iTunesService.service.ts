import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ItunesService {
  constructor (
    private http: Http
  ) {}

  getUser(artistName) {
    const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin','https://itunes.apple.com');
const options = new RequestOptions({ headers: headers });

    return this.http.get(`https://itunes.apple.com/search?entity=album&term=${artistName}`, options)
    .map((res:Response) => res.json());
  }
}
