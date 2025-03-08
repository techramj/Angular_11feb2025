import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observer3',
  standalone: true,
  imports: [],
  templateUrl: './observer3.component.html',
  styleUrl: './observer3.component.css'
})
export class Observer3Component {

  subsciption: Subscription = new Subscription();

  ngOnInit(): void {
    
    let observable1 = new Observable((subscribe) =>{
      let count = 0;
      setInterval(()=>{
         subscribe.next(count);
         count = count +1;
      }, 1000);
    });

    this.subsciption = observable1.subscribe((data)=> {
      console.log(data);
    })
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('destroy method called...');
    this.subsciption.unsubscribe();
    
  }

}
