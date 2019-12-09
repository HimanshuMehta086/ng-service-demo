import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-venus',
  templateUrl: './venus.component.html',
  styleUrls: ['./venus.component.css']
})
export class VenusComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
