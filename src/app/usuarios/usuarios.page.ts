import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  addUsuarios() {
    this.router.navigate(['add-usuario']);
  }
}
