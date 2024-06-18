import { Api } from './../../services/api';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

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

  antigo: string = "";
  antigo2: string = "";

  constructor(
    private router:Router, 
    private provider:Api,
    private actRouter:ActivatedRoute,
    public toastController: ToastController
    ) { }

  ngOnInit() {
    
    //ACT ROUTER SERVE PARA RECEBER E PASSAR PARAMETROS ENTRE PÁGINAS
    this.actRouter.params.subscribe((data:any)=>{
      this.id = data.id;
      this.nome = data.nome;
      this.cpf = data.cpf;
      this.email = data.email;
      this.senha = data.senha;
      this.nivel = data.nivel;

      this.antigo = data.email;
      this.antigo2 = data.cpf;
    });
  }


  async mensagem(mensagem, cor){
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: cor
    });
    toast.present();
  }

 
  Usuarios(){
    this.router.navigate(['usuarios']);
  }

  cadastrar(){
    return new Promise(resolve => {
      let dados = {
        nome: this.nome,
        cpf: this.cpf,
        email: this.email,
        senha: this.senha,
        nivel: this.nivel,
        id: this.id,
        antigo: this.antigo,
        antigo2: this.antigo2,
       
      }
      this.provider.dadosApi(dados, 'usuarios/inserir.php').subscribe(
        data=>{
          
          if(data['ok'] == true){
            this.router.navigate(['usuarios']);
            this.mensagem(data['mensagem'], 'success');
            this.limparCampos();
          }else{
            this.mensagem(data['mensagem'], 'danger');
          }
                
          
        }
      )
    });
  }

  
  limparCampos(){
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.senha = "";
    this.nivel = "";

  }

}
