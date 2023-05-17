import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SubNavbarComponent } from './components/sidebar/sub-navbar.component';
import { AgGridModule } from 'ag-grid-angular';
import { StudentInfoComponent } from './pages/student-info/student-info.component';
import { StudentTabsComponent } from './components/student/student-tabs/student-tabs.component';
import { StudentDetailsComponent } from './components/student/student-details/student-details.component';
import { DocumentListComponent } from './components/common/document-list/document-list.component';
import { DioceseListComponent } from './pages/diocese/diocese-list/diocese-list.component';
import { CreateDioceseModalComponent } from './components/diocese/create-diocese-modal/create-diocese-modal.component';
import { ForaneListComponent } from './pages/forane/forane-list/forane-list.component';
import { ForaneModalComponent } from './components/forane/forane-modal/forane-modal.component';
import { ParishModalComponent } from './components/parish/parish-modal/parish-modal.component';
import { ParishListComponent } from './pages/parish/parish-list/parish-list.component';
import { LoaderComponent } from './components/common/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BodyComponent,
    StudentListComponent,
    DashboardComponent,
    SubNavbarComponent,
    StudentInfoComponent,
    StudentDetailsComponent,
    StudentTabsComponent,
    DocumentListComponent,
    DioceseListComponent,
    CreateDioceseModalComponent,
    ForaneListComponent,
    ParishListComponent,
    ForaneModalComponent,
    ParishModalComponent,
    ParishModalComponent,
    LoaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    HttpClientModule,
    OAuthModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
  ],
})
export class AppModule {}
