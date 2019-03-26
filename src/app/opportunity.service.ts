import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  apiUrl = 'http://localhost:8081/opportunities'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get(this.apiUrl);
  }

  save(opportunity: any){
    return this.httpClient.post(this.apiUrl, opportunity);
  }

}
