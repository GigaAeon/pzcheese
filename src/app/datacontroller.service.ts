import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
const data_loc = "../../back-end/database"


@Injectable({
  providedIn: 'root'
})
export class DataController { 
  constructor(private http: HttpClient) { }
    load () {
      
      // Service that grabs the cheese database from backend api
      // Essentially the view all call to the backend

      return this.http.get("http://localhost:8000/cheeses")

    };

    /*
    create (cheese:CheeseObject) {
      // saves a cheese to the database
      // post cheese to exposed '/newcheese' backend
    };

    read_one (cheese:CheeseObject):
      // return a singular cheese object based on input cheese
      // get cheeses/cheese.name
    
    update (cheese:CheeseObject)
      // update values of an existing cheese in the database with new values
      // pass on cheese object to updatecheese/name

    delete (name:String) {
      // pass on a string to the backend api to delete a matching cheese
      // deletecheese/name
    }
    
    */


  }
