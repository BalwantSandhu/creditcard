import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';
import { ɵEmptyOutletComponent } from "@angular/router";
import { InputComponent } from "../input/input.component";
import { DateFormControl } from '../date-form-control';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-card-form',
  imports: [ReactiveFormsModule, JsonPipe, NgIf, ɵEmptyOutletComponent, InputComponent, CardComponent],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {

  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    expiration: new DateFormControl('',[Validators.required, Validators.pattern(/^([1-9]|1[0-2])\/\d{2}$/)]),
    securityCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  });
  
  constructor(){}

  onSubmit(){
    console.log('forms subitted');
  }

  onClickReset(){
    this.cardForm.reset();

    Object.values(this.cardForm.controls).forEach(control => {
      control.markAsPristine();
      control.markAsUntouched();
      control.updateValueAndValidity({ emitEvent: false });
    });
  }
}
