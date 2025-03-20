import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  imports: [CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clients:any[]=[];
    constructor(private dataservice:DataService,private router:Router){}
    ngOnInit():void{
      this.dataservice.getData('clients').subscribe(data =>{
        this.clients =data;
      })
    }
    navigate() {
      this.router.navigate(['/clients']); 
    }
}
