import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";

@Injectable()
export class CartService{
  constructor(private http: Http){ }
  headers = new Headers({'Content-Type':'application/json'});

  noOfitemsInCart(){
    return this.http.get('/cart/cartlength', {headers:this.headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  addProductToCart(cartDetails){
    return this.http.post('/cart/'+cartDetails.product_id, JSON.stringify(cartDetails),{headers:this.headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getCartDetails(){
    return this.http.get('/cart/cartdetails', {headers:this.headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
