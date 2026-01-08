import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() control: FormControl;
  @Input() label: string;

  showErrors(){
    const {dirty, touched, errors} = this.control;
    return dirty && touched && errors;
  }
}
