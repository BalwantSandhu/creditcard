import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, NgIf, NgClass, NgxMaskDirective],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() mask: string;

  showErrors(){
    const {dirty, touched, errors} = this.control;
    return dirty && touched && errors;
  }
}
