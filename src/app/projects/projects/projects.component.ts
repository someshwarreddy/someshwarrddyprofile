import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
projects  =  [
  {
      id:1,
      title:'Countries',
      image:'./assets/images/p1.png'
  },
  /*...*/
  {
      id:2,
      title:'Justcart',
      description:'...',
      image:'./assets/images/p2.png'
  },
   /*...*/
   {
    id:3,
    title:'Someshwar reddy ',
    description:'...',
    image:'./assets/images/p-3.png'
}
] 
}
