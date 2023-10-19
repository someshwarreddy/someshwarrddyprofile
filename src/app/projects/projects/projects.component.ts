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
      image: './assets/images/p1.png'
    },
    /*...*/
    {
      id: 2,
      title: 'Justcart',
      image: './assets/images/p2.png'
    },
     /*...*/
     {
      id: 3,
      title: 'uicontainer',
      image: './assets/images/p4.png',
    },
    /*...*/
    {
      id: 4,
      title: 'Someshwar reddy ',
      image: './assets/images/p-3.png'
    }
  ]
}


