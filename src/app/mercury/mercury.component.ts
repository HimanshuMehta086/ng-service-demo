import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mercury',
  templateUrl: './mercury.component.html',
  styleUrls: ['./mercury.component.css']
})
export class MercuryComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
