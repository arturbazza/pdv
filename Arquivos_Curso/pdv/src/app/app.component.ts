import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder', icon: 'home' },
    { title: 'Usuários', url: '/usuarios', icon: 'people' },
    { title: 'Sair', url: '/', icon: 'exit' },
   
  ];

  public appPages2 = [
    { title: 'Home', url: '/painel-financeiro', icon: 'home' },
    { title: 'Contas', url: '/painel-financeiro', icon: 'people' },
    { title: 'Sair', url: '/', icon: 'exit' },
   
  ];

  url : string;
  constructor(private router: Router) {
    
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd ) {
        this.url = event.url; 
        console.log(this.url);
      }
    });
  }
}
