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
      Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nemo sunt, inventore,quae natus in porro rerum deleniti quaerat eaque placeat itaque blanditiis nam alias tempora eum unde? Aliquid, officia!',
      image: './assets/images/p1.png',
      pl: ' angualr , css , html , ngrx',
      URL: 'https://countriesall.netlify.app/countries'

    },
    /*...*/
    {
      id: 2,
      title: 'Justcart',
      Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nemo sunt, inventore, quae natus in porro rerum deleniti quaerat eaque placeat itaque blanditiis nam alias tempora eum unde? Aliquid, officia!',
      image: './assets/images/p2.png',
      pl: ' angualr , css , html , ngrx',
      URL: 'https://justkart.netlify.app/'

    },
    /*...*/
    {
      id: 3,
      title: 'Someshwar reddy ',
      Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nemo sunt, inventore, quae natus in porro rerum deleniti quaerat eaque placeat itaque blanditiis nam alias tempora eum unde? Aliquid, officia!',
      image: './assets/images/p-3.png',
      pl: ' angualr , css , html , ngrx',
      URL: ''
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