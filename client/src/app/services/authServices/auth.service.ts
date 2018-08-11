import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService{
  constructor(private http: Http){ }
  headers = new Headers({'Content-Type':'application/json'});
  signup(user){
    return this.http.post('/userSignup', JSON.stringify(user), {headers:this.headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  login(user){
    return this.http.post('/userLogin',  JSON.stringify(user), {headers:this.headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  logout(user){
    return this.http.post('/userLogout',  JSON.stringify(user), {headers:this.headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
