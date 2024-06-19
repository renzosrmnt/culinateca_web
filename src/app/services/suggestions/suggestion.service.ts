import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  
  private apiUrl = 'https://culinateca.onrender.com/api/suggestions'; // Ajusta la URL según sea necesario

  constructor(private http: HttpClient) { }

  createSuggestion(suggestion: any): Observable<any> {
    return this.http.post(this.apiUrl, suggestion);
  }
  
}
