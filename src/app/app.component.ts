import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder', icon: 'mail' },
    { title: 'Usuários', url: '/usuarios', icon: 'paper-plane' },
  ];
  
  constructor() {}
}
