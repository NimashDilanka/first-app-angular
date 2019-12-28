import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  fieldName = 'userName';
  age = 23;
  status = 'COMPLETED';

  getStatus() {
    return this.status;
  }
}
