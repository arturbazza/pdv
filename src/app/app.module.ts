import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { provideHttpClient } from '@angular/common/http';
import { Api } from 'src/services/api';

@NgModule({
  declarations: [AppComponent],
  imports:
    [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule
    ],
  
  providers: [
    Api,
    {
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy,
    },
    //provideHttpClient() // Adicione esta linha
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
