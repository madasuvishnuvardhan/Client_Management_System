import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
projects:any[]=[];

constructor(private dataservice:DataService){

}
 
ngOnInit(){
    this.dataservice.getProjects().subscribe(data =>{
      this.projects=data.projects;
    })
}
}
