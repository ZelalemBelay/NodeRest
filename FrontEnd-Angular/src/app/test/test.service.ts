
import { Injectable } from "@angular/core";
import { Http, Response, Headers, Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TestService
{
    
   constructor(private _http: Http, private jsonp: Jsonp){}


    public getRestData(): Observable<string[]>{

       let headers: Headers = new Headers();
        return this._http.get('http://localhost:8081/test')
        .map(res => res.json());


    }
    
       private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}