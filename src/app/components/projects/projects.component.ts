import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects:any[]=[];
  projectForm:FormGroup;

  constructor(private dataService:DataService,private fb:FormBuilder){
    this.projectForm=this.fb.group({
      id: ['', Validators.required],
      projectName: ['', Validators.required],
      clientId: ['', Validators.required], 
      duration: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['', Validators.required]    
    })
  }
  addproject(){
    this.dataService.addData('projects',this.projectForm.value).subscribe((newproject)=>{
      this.projects.push(newproject);
      this.projectForm.reset();
    })
  }
}
