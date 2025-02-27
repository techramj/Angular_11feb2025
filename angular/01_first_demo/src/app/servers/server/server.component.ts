import { Component, Input } from '@angular/core';
import { type Server } from '../server.model';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {


  @Input() server!:Server;

}
