import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "../environment/environment";

@Injectable({
    providedIn:'root'
})
export class SingleService {
    url1:any
    url2:any
    constructor(private http:HttpClient){
      this.url1=environment.getDeltaDetails
 this.url2=environment.saveDeltaDetails
    }

    getDetails(data1:any){
        return this.http.post(this.url1,data1)
    }

  }