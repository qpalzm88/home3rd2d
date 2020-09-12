import { Component } from '@angular/core';
import { AppDirective } from './app.directive';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home3rd2d';

  onFormSubmit() {
    console.log('You clicked');
  }


}
