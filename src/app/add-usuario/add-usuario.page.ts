import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  nome: string = "";
  cpf: string = "";
  usuario: string = "";
  senha: string = "";
  nivel: string = "";
  id: string = "";


  constructor(private router: Router) { }

  ngOnInit() {
  }

  Usuarios() {
    this.router.navigate(['usuarios'])
  }

  cadastrar() {
  }

  editar() {
  }
}
