import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Usuarios() {
    this.router.navigate(['usuarios'])
  }
}
