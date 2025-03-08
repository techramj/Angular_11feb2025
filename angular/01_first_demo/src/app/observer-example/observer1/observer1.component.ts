import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observer1',
  standalone: true,
  imports: [],
  templateUrl: './observer1.component.html',
  styleUrl: './observer1.component.css'
})
export class Observer1Component {

  data:any[] = [];

  ngOnInit(): void {
    console.log('init method called');
    setTimeout(()=>{
        console.log('time over!!!!');
    }, 3000);
    
  }

  myObservable = new Observable((observer)=> {
    observer.next([11,22,33,44,55]);
  });


  getAsyncData1(){
    this.myObservable.subscribe((data:any)=>{
      this.data = data;
    }
   );
  }


  myObservable2 = new Observable((observer)=> {
    setTimeout(()=>{
      observer.next(1);
    }, 3000);

    setTimeout(()=>{
      observer.next(2);
    }, 1000);

    setTimeout(()=>{
      observer.complete();
    }, 3000);

    setTimeout(()=>{
      observer.next(4);
    }, 10000);

    setTimeout(()=>{
      observer.next(4);
    }, 5000);

    observer.next(5);
  });

  getAsyncData2(){
    this.myObservable2.subscribe(
      (data) => {console.log('data =', data)},
      (error) => {console.log('error =', error)
      }
    );
  }


}
