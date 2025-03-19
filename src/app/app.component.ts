import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MeetingsComponent } from './components/meetings/meetings.component';


@Component({
  selector: 'app-root',
  imports: [MeetingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CLient_Management_System';
}
