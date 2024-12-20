import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

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
      title: 'uicontainer',
      summary: 'The scope of the project is angular devlope ui components like tabs , accordian .',
      image: './assets/images/p4.png',
      pl: '  Angualr , Css , Html , Ngrx',
      URL: 'https://uicontainer.netlify.app/'
    },
    /*...*/
    {
      id: 4,
      title: 'Someshwar reddy ',
      summary: 'The scope of the project is my portfolio.',
      image: './assets/images/p-3.png',
      pl: '  Angualr , Css , Html , Ngrx',
      URL: 'https://someshwarreddy.netlify.app/'
    }
  ]
}


