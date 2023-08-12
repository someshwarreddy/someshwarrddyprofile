import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projects = [
    {
      id: 1,
      title: 'Countries',
      summary: 'The project scope is to show all countries and each country details on an individual webpage and provide a search result to users searching by country name or region.',
      image: './assets/images/p1.png',
      pl: '  Angualr , Css , Html , Ngrx',
      URL: 'https://countriesall.netlify.app/countries'

    },
    /*...*/
    {
      id: 2,
      title: 'Justcart',
      summary: 'The project scope is to show all products and each product details on an individual webpage and add each product to a cart in cart increments decrement the quantity of each product and provide a search result to users searching by product title or categories. Note: the project was developed with a fake API store.',
      image: './assets/images/p2.png',
      pl: ' Angualr , Css , Html , Ngrx',
      URL: 'https://justkart.netlify.app/'

    },
    /*...*/
    {
      id: 3,
      title: 'Someshwar reddy ',
      summary: 'The scope of the project is my portfolio.',
      image: './assets/images/p-3.png',
      pl: '  Angualr , Css , Html , Ngrx',
      URL: 'https://someshwarreddy.com'
    }
  ]
  id!: number;
  project: any;
  constructor(private route: ActivatedRoute,
  ) {

  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.id = id;
    for (let project of this.projects) {
      if (project.id === id) {
        this.project = project;
        return this.project;
      }
    }
  }
}