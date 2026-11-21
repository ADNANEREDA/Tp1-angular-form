import { Component } from '@angular/core';
import { TemplateDriven } from './template-driven/template-driven';
import { Reactive } from './reactive/reactive';

@Component({
  selector: 'app-root',
  imports: [TemplateDriven, Reactive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}