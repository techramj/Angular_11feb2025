import { Component, Input } from '@angular/core';
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

}
