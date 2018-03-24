import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

/**
 * Generated class for the HomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {

  constructor(public http: Http) 
  {
  	let path = 'https://hack.kunderlabs.com/exam/telecom/api/products/new';
    let encodedPath = encodeURI(path);
    let timeoutMS = 10000;

    this.http.get(encodedPath)
        .timeout(timeoutMS)
        .map(res => res.json()).subscribe(data => {
        	console.log("qq");
            let responseData = data;
            console.log(responseData);
        },
        err => {
            console.log('error in ETPhoneHome');
        });
  }


}
