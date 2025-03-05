import { Component } from '@angular/core';
import { LifecycleComponent } from "../lifecycle/lifecycle.component";

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  imports: [LifecycleComponent],
  templateUrl: './lifecycle-demo.component.html',
  styleUrl: './lifecycle-demo.component.css'
})
export class LifecycleDemoComponent {

   count = 0;

  constructor() {
    
    console.log('constructor called..')
  }
  

  incrementValue(){
    this.count ++;
  }
}
