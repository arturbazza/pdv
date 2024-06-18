import { ToastController } from '@ionic/angular';
import { Api } from './../../services/api';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = "";
  senha: string = "";

  constructor(
    private router:Router, 
    private provider:Api,
    public toastController: ToastController,
    
  ) { }

  ngOnInit() {
  }

  async mensagem(mensagem, cor){
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: cor
    });
    toast.present();
  }


  login(){
    return new Promise(resolve => {
      let dados = {
        usuario: this.usuario,
        senha: this.senha,
             
      }
      this.provider.dadosApi(dados, 'login/login.php').subscribe(
        data=>{
          
          if(data['ok'] == true){
           
            this.mensagem(data['mensagem'], 'success');

            if(data['usu']['nivel'] == 'Administrador'){
              this.router.navigate(['folder']);
            }

            if(data['usu']['nivel'] == 'Tesoureiro'){
              this.router.navigate(['painel-financeiro']);
            }
                        
          }else{
            this.mensagem(data['mensagem'], 'danger');
          }
                
          
        }
      )
    });
  }

  

}
