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
  enableClick = false;
  saveMsg = 'not yet saved';

  getStatus() {
    return this.status;
  }

  onSaveClick() {
    this.saveMsg = 'Application Saved';
  }

  constructor() {
    setTimeout(() => {
        this.enableClick = true;
      },
      2000);
  }

  ngOnInit(): void {
  }
}
