import { Injectable } from '@angular/core';
import { Activity } from '../Activity';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private apiurl = 'http://www.boredapi.com/api/activity/';
  constructor(private http: HttpClient) {}

  getActivitys(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.apiurl);
  }
}
