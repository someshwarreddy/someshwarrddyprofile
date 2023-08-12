import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}
   url='/src/assets/someshwarresume.docx'
   downloadFile() {
      const link = this.renderer.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.url);
      link.setAttribute('download', `someshwarresume.docx`);
      link.click();
      link.remove();
   }
}
