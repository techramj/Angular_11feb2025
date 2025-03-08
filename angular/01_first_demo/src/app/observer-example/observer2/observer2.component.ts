import { Component } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-observer2',
  standalone: true,
  imports: [],
  templateUrl: './observer2.component.html',
  styleUrl: './observer2.component.css'
})
export class Observer2Component {

  ngOnInit(): void {
    let obv1 = new Observable<string>(subscribe => {
      subscribe.next('one');
      subscribe.next('twenty-one');
      subscribe.next('fourty');
      subscribe.next('one hundred');
      subscribe.next('three');
    });

    obv1
    .pipe<string>(filter((str) => str.includes('one')))
    .pipe<string>(map(data => data + "."))
    .pipe<string>(map(data =>data.toUpperCase()))
    .subscribe(
      (data) => {
        console.log(data);
      }
    );

    
  }

}
