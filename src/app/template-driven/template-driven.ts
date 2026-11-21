import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-driven',
  imports: [
    FormsModule, JsonPipe,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatCardModule,
  ],
  styleUrl: './template-driven.css',
  templateUrl: './template-driven.html',
})
export class TemplateDriven {
  countries = [
    { value: 'fr', label: 'France' },
    { value: 'be', label: 'Belgique' },
    { value: 'ch', label: 'Suisse' },
    { value: 'ca', label: 'Canada' },
  ];

  model = { fullname: '', age: null as number | null, country: '', email: '' };
  submitted = false;
  result: any = null;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
      this.result = { ...form.value };
      console.log(this.result);
    }
  }
}