import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-meeting',
  imports: [],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent implements OnInit{
meetings:any[]=[];

constructor(private dataservice:DataService){

}
ngOnInit(){
    this.dataservice.getMeetings().subscribe(data =>{
      this.meetings=data.meetings;
    })
}
}
