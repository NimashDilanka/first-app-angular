import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
  clickCount = 0;
  countArray: number[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.clickCount++;
    this.countArray.push(this.clickCount);
  }

  getColor(count: number) {
    if (count > 4) {
      return 'blue';
    }
    return 'white';
  }
}
