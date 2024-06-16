import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBackgroundComponent } from './main-background/main-background.component';
import { ContainerTextComponent } from './container-text/container-text.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBackgroundComponent,
    ContainerTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
