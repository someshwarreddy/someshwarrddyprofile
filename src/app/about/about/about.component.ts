import { Component, OnInit } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  constructor(faConfig: FaConfig) {
    faConfig.defaultPrefix = 'fas';
  }
  ngOnInit(): void {
 
  }

}
