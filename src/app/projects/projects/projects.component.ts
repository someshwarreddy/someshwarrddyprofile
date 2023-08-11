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
      summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nemo sunt, inventore,quae natus in porro rerum deleniti quaerat eaque placeat itaque blanditiis nam alias tempora eum unde? Aliquid, officia!',
      image: './assets/images/p1.png'
    },
    /*...*/
    {
      id: 2,
      title: 'Justcart',
      summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nemo sunt, inventore, quae natus in porro rerum deleniti quaerat eaque placeat itaque blanditiis nam alias tempora eum unde? Aliquid, officia!',
      image: './assets/images/p2.png'
    },
    /*...*/
    {
      id: 3,
      title: 'Someshwar reddy ',
      summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nemo sunt, inventore, quae natus in porro rerum deleniti quaerat eaque placeat itaque blanditiis nam alias tempora eum unde? Aliquid, officia!',
      image: './assets/images/p-3.png'
    }
  ]
}


