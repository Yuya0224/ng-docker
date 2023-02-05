import { Component } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

// import { User } from './User';

import { environment } from '../environments/environment';

// @NgModule({
//   imports: [HttpClientModule],
//   providers: [HttpClientModule],
//   // ...
// })
@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-docker';
  data?: {
    name: string;
    email: string;
  };
  // apiGetTodos = 'todos';

  constructor(private http: HttpClient) {}

  req = this.get().subscribe((res) => {
    let response: any = res;

    this.data = response;

    console.log(response.name);
  });

  // public fetchArticleCategory(): Observable<any> {
  //   const self = this;
  //   const url = 'blog-category';
  //   return self._dataService.getRequest(url, {});
  // }

  public get(): Observable<any> {
    console.log('aa');
    console.log(environment.apiUrl + '/users');
    const user = this.http.get<any>(environment.apiUrl + '/users', {});

    return user;
  }

  // public get(): Observable<any> {
  //   console.log('aa');
  //   console.log(environment.apiUrl + '/users');
  //   const user = this.http
  //     .get<any>(environment.apiUrl + 'users', {
  //       withCredentials: true,
  //     })
  //     .subscribe(
  //       (res) => {
  //         let response: any = res; // <<<<< 違いはココ <<<<<
  //         response.data;
  //       },
  //       (err) => {
  //         if (err.status === 401) {
  //           console.log('取れてない');
  //         }
  //       }
  //     );

  //   console.log(user);

  //   return user;
  // }
}
