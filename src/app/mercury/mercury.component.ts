import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mercury',
  templateUrl: './mercury.component.html',
  styleUrls: ['./mercury.component.css']
})
export class MercuryComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit() {}

  handler() {
    this.dataService.counter = 1;
  }
}
