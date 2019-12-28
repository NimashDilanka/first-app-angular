import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  fieldName = 'userName';
  age = 23;
  status = 'COMPLETED';
  setDisable = false;

  getStatus() {
    return this.status;
  }

  constructor() {
    setTimeout(() => {
        this.setDisable = true;
      },
      2000);
  }

  ngOnInit(): void {
  }
}
