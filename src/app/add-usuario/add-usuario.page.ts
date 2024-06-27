import { Api } from 'Arquivos_Curso/pdv/src/services/api';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  nome: string = "";
  cpf: string = "";
  email: string = "";
  senha: string = "";
  nivel: string = "";
  id: string = "";


  constructor(
    private router:Router,
    //private provider:Api,
    private actRouter:ActivatedRoute,
  )  { }

  ngOnInit() {
    //ACT ROUTER SERVE PARA PASSAR PARÂMETROS ENTRE PÁGINAS
    this.actRouter.params.subscribe((data: any) => {      
    })
  }

  Usuarios() {
    this.router.navigate(['usuarios'])
  }

  // funções dos botões que chama a API
  cadastrar() {
  }

  editar() {
  }
}
