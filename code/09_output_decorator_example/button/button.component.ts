import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
    btnCount:number =0;
    @Output() btnClick = new EventEmitter<number>();


    counter(){
      this.btnCount = this.btnCount +1;
      this.btnClick.emit(this.btnCount);
    }
}
