import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/counter.reducer';
import { CustomcounterComponent } from './component/customcounter/customcounter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './component/home/home.component';
import { CounterComponent } from './component/counter/counter.component';
import { BlogComponent } from './component/blog/blog.component';
import { MenuheaderComponent } from './menuheader/menuheader.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    CustomcounterComponent,
    HomeComponent,
    CounterComponent,
    BlogComponent,
    MenuheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter:counterReducer}),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 0, logOnly: !isDevMode() }),
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
