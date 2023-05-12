import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentInfoComponent } from './pages/student-info/student-info.component';
import { DioceseListComponent } from './pages/diocese/diocese-list/diocese-list.component';

const routes: Routes = [
  {path: '', component: DioceseListComponent},
  {path: 'diocese', component: DioceseListComponent},
  {path: 'student', component: StudentListComponent},
  {path: 'student-info/:action', component: StudentInfoComponent},
  {path: 'student-info/:id', component: StudentInfoComponent},
  {path: 'student-info/:id/:action', component: StudentInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
