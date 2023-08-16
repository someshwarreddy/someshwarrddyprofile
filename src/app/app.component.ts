import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core'
import { DownloadService } from './download.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private renderer: Renderer2,private downloads: DownloadService) {}
   url='/assets/someshwarreddybhimireddy.pdf'
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
