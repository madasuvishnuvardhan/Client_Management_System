import { Routes,RouterLink } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ClientComponent } from './pages/client/client.component';
import { MeetingComponent } from './pages/meeting/meeting.component';
import { ProjectComponent } from './pages/project/project.component';

export const routes: Routes = [
  {path:'',component:ProjectComponent},
  {path:'clients',component:ClientsComponent},
  {path:'meetings',component:MeetingsComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'client',component:ClientComponent},
  {path:'meeting',component:MeetingComponent},
  {path:'project',component:ProjectComponent}
];
