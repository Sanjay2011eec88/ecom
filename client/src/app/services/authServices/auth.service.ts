import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService{
  constructor(private http: Http){ }

  signup(user){
    const body = JSON.stringify(user);
    var headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('/userSignup', body, {headers:headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
