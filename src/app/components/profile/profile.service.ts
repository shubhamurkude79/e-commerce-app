import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = '/api/profile'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  updateProfile(profileData: any): Observable<any> {
    return this.http.put(this.apiUrl, profileData);
  }
}
