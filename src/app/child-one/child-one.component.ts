import { Component, OnInit } from '@angular/core';
import { SAMPLE_DATA } from './mock-data';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
  sampleData = SAMPLE_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
