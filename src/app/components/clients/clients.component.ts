import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
clients:any[]=[];
clientForm:FormGroup;

constructor(private dataservice:DataService,private fb:FormBuilder){
  this.clientForm=this.fb.group({
      id:this.fb.control('',Validators.required),
      name:this.fb.control('',Validators.required),
      email:this.fb.control('',[Validators.required,Validators.email]),
      address:this.fb.control('',Validators.required),
      password:this.fb.control('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$')]),

  })
}

addclient() {
 
    this.dataservice.addData('clients',this.clientForm.value).subscribe(
      
      (newClient) => {
      this.clients.push(newClient);
      this.clientForm.reset();
    });
  
}
}
