import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reactive',
  imports: [
    ReactiveFormsModule, JsonPipe,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatCardModule,
  ],
  templateUrl: './reactive.html',
  styleUrl: './reactive.css',
})
export class Reactive {
  private fb = inject(FormBuilder);

  countries = [
    { value: 'fr', label: 'France' },
    { value: 'be', label: 'Belgique' },
    { value: 'ch', label: 'Suisse' },
    { value: 'ca', label: 'Canada' },
  ];

  form = this.fb.group({
    fullname: ['', [Validators.required, Validators.minLength(3)]],
    age: [null as number | null, [Validators.required, Validators.min(18)]],
    country: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  submitted = false;
  result: any = null;

  get fullname() { return this.form.controls.fullname; }
  get age() { return this.form.controls.age; }
  get country() { return this.form.controls.country; }
  get email() { return this.form.controls.email; }

  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      this.result = this.form.value;
      console.log(this.result);
    } else {
      this.form.markAllAsTouched();
    }
  }
}