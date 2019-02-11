import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UserInfoData } from '../shared/userinfo.data';
import { ServiceData } from '../shared/service.data';


@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  messageOutput: string;
  apiServiceUrl: string;
  constructor(private http: HttpClient) { }
  result: any;

  getUserInfoData(): Observable<UserInfoData[]> {
    this.apiServiceUrl = 'api/userinfo';
    return this.http.get<ServiceData>(this.apiServiceUrl).
    pipe(map(result => this.result = result.data),
      tap( _ => this.log('Fetched successfully', this.result)),
      catchError(this.handleError<any>('userinfodata', []))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`, this.result);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string, result: any) {
    // TODO: better job of transforming error for user consumption and log in DB
    this.messageOutput = message;
    console.log(result);
  }
}



