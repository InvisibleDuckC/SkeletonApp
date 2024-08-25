import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {usuario: '', password: ''};
  nombre = "";
  apellido = "";
  nivel_educacional = "";
  fecha_nacimiento = "";
  //location: any;
  alertButtons = ['Ok'];

  constructor(private activeroute: ActivatedRoute, private router:Router, private alertController: AlertController) {
    //this.location = location;
    this.activeroute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()!.extras.state){
        console.log(this.router.getCurrentNavigation()!.extras.state!['user']);
        this.user = this.router.getCurrentNavigation()!.extras.state!['user'];
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sus datos:',
      subHeader: 'Su nombre es: ' + this.nombre + ' ' + this.apellido,
      message: 'Nvl. Educacional: ' + this.nivel_educacional + ' Fecha Nac.: ' + this.fecha_nacimiento,
      buttons: ['Ok'],
    });

    await alert.present();
  }

  limpiar(){
    //this.location.reload();
    this.nombre = "";
    this.apellido = "";
    this.nivel_educacional = "";
    this.fecha_nacimiento = "";
  }

}
