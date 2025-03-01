import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Server } from '../server.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {


  @Input() server!:Server;
  @Output()  statusChanged =  new EventEmitter<string>();

  onServerStartOrDown(){
    console.log(this.server.id);
    this.statusChanged.emit(this.server.id);
  }

}
