import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPolly } from './polly';
import { Observable } from 'rxjs';

@Injectable()
export class PollyService {
  private _url = 'https://oi3ez5i7m2.execute-api.us-east-1.amazonaws.com/prod';
  public res;
  public postid;
  constructor(private http: HttpClient) { }
  getData(postId): Observable<IPolly[]> {
    this.res = this.http.get<IPolly[]>(this._url + '?postId=' + postId);
    return this.res;
  }

  getColumns(): string[] {
    return ['id', 'voice', 'text', 'status', 'url'];
  }

  postData(resBody): Observable<string> {
    this.postid = this.http.post<string>(this._url, resBody);
    return this.postid;
  }
}
