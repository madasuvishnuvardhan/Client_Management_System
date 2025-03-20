import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-meeting',
  imports: [CommonModule],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent implements OnInit{
meetings:any[]=[];

constructor(private dataservice:DataService,private router:Router){

}
ngOnInit(){
    this.dataservice.getData('meetings').subscribe(data =>{
      this.meetings=data;
    })
}
navigate() {
  this.router.navigate(['/meetings']); 
}
}