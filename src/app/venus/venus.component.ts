import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-venus',
  templateUrl: './venus.component.html',
  styleUrls: ['./venus.component.css']
})
export class VenusComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit() {}

  handler() {
    this.dataService.counter = 2;
  }
}
