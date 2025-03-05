import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, OnDestroy, OnChanges {
  @Input() num!:number;



  constructor() { 
    console.log('constructor called..')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called", changes);
  }

  ngOnInit(){
    console.log("init method called")
  }

  ngOnDestroy(){
    console.log("destroy method called....")
  }

  resetNumber(){
    this.num = 0;
  }

}
