import { Component } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { DataController } from '../datacontroller.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router, private data:DataController) { }

  ngInit() {
    var app_database = this.data.load();
    this.generate_cheese(app_database);
  };

  generate_cheese(database:Array<any>) {
    // Define where the cheese will be inserted into document
    const body = document.getElementById('body');
    // Iterate through each cheese of the database
    for (let cheese of database) {
      const container = document.createElement('div');
      const sub_container = document.createElement('div');
      
      // Extract all the elements of the cheese

      const name = document.createElement('h4');
      name.textContent = cheese.name;
      
      const img = document.createElement('img');
      img.src = cheese.img;

      const price = document.createElement('p');
      price.textContent = `Price: $${cheese.price} / kg`;

      const colour = document.createElement('p');
      colour.textContent = "Colour: "+cheese.colour;
      
      // Place the name, price and colour in the sub container
      sub_container.append(name, price, colour)
      // Place the image and sub container into final container
      container.append(img, sub_container);
      // Append container of cheeses to html body.
      body?.appendChild(container);
    };
  };
}
