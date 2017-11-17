import { Component, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmailComponent  {
  email = new FormControl('', [Validators.required, Validators.email]);

   getErrorMessage() {
     return this.email.hasError('required') ? 'You must enter a value' :
         this.email.hasError('email') ? 'Not a valid email' :
             '';
   }
   // The FormGroup object as you may remember from the simple form example exposes various API’s for dealing with forms. Here we are creating a new object and setting its type to FormGroup
 complexForm : FormGroup;

 // We are passing an instance of the FormBuilder to our constructor
 constructor(fb: FormBuilder){
   // Here we are using the FormBuilder to build out our form.
   this.complexForm = fb.group({
     // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
     'firstName' : '',
     'lastName': ''

   })
 }

 // Again we’ll implement our form submit function that will just console.log the results of our form
 submitForm(value: any):void{
   console.log('Reactive Form Data: ')
   console.log(value);
 }


}
