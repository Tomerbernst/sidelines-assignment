import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as data from "../../assets/db.json";


@Injectable({
    providedIn: 'root'
  })

export class LoginService {

    constructor(private httpClient:HttpClient) {}
    api =  'http://localhost:3000';


    checkEmail(email:string){
        let isExist = false;
         return this.httpClient.get("../../assets/db.json");
    }

    addEmail(email:string) {
        return this.httpClient.post(`${this.api}/users`,{"email":email});

    }



}