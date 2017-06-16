import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  authenticate(data: any) {
    var dt = "grant_type=password&username=" + data.username + "&password=" + data.password;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(environment.serviceUrl + 'v1/account/login', dt, options).map((res: Response) => res.json());
  }
}
