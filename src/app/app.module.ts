import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CvComponent } from './components/cv/cv.component';
import { ProfGoalsComponent } from './components/prof-goals/prof-goals.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { EmailComponent } from './components/contact-me/email/email.component';

const appRoutes: Routes = [
  { path: 'aboutMe', component: AboutMeComponent },
    { path: 'contactMe', component: ContactMeComponent },
  { path: 'contactMe/email', component: EmailComponent },
   { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AboutMeComponent,
    CvComponent,
    ProfGoalsComponent,
    ContactMeComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
