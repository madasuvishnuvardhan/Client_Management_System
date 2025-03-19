import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import{FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-meetings',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.css'
})
export class MeetingsComponent  {
  meetings:any[]=[];
  meetingForm:FormGroup;

  constructor(private dataservice:DataService,private fb:FormBuilder){
    this.meetingForm=this.fb.group({
      id: ['', Validators.required],
      meetingAgenda: ['', Validators.required],
      clientId: ['', Validators.required], 
      meetingDateTime: ['', Validators.required],
    })
  }
   addMeeting(){
    this.dataservice.addData('meetings',this.meetingForm.value).subscribe((newmeeting)=>{
      this.meetings.push(newmeeting);
      this.meetingForm.reset();
    })
   }
}
