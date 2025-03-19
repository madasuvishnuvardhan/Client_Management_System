import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-client',
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
clients:any[]=[];
constructor(private dataservice:DataService){}
ngOnInit():void{
    this.dataservice.getClients().subscribe(data =>{
      this.clients =data.projects;
    })
}
}
