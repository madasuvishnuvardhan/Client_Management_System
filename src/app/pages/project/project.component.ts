import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
projects:any[]=[];

constructor(private dataservice:DataService){

}
 
ngOnInit(){
    this.dataservice.getData('projects').subscribe(data =>{
      this.projects=data;
    })
}
}
