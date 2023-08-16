import { Component, OnInit, Renderer2 } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { DownloadService } from 'src/app/download.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  url='/assets/someshwarreddybhimireddy.pdf';

  constructor(private renderer: Renderer2, private downloads: DownloadService) {}

   downloadFile() {
    this.downloads
      .download(this.url)
      .subscribe(blob => {
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        a.download = 'someshwarreddybhimireddy.pdf';
        a.click();
        URL.revokeObjectURL(objectUrl);
      })
   }
}
