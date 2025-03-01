import { Component } from '@angular/core';
import { ServerComponent } from './server/server.component';
import { type Server } from './server.model';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [ServerComponent],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

  servers:Server[] = [
    {
      id:'s1',
      name:'Server One',
      status:'down'
    },
    {
      id:'s2',
      name:'Server Two',
      status:'up'
    },
    {
      id:'s3',
      name:'Server Three',
      status:'down'
    },
    {
      id:'s4',
      name:'Server Four',
      status:'up'
    },
  ];

  onServerStartOrDown(id:string){
    console.log('id= ', id);

    for(let s of this.servers){
      if(s.id === id){
        s.status = s.status === 'up'?'down':'up';
      }
    }
    
  }

}
