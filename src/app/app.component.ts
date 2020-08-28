import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training-material';
  sampleNewData;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.sampleNewData = this.appService.getData();
  }
}
