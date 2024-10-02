import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
})
export class MisDatosComponent  implements OnInit {

  @ViewChild('titulo', { read: ElementRef }) titulo: ElementRef<HTMLIonTitleElement> | undefined;
  @ViewChild('nombre_', { read: ElementRef }) nombre_: ElementRef<HTMLIonInputElement> | undefined;
  @ViewChild('apellido_', { read: ElementRef }) apellido_: ElementRef<HTMLIonInputElement> | undefined;

/*   private animation_nombre: Animation | undefined; */

  user = {usuario: '', password: ''};
  nombre = "";
  apellido = "";
  nivel_educacional = "";
  fecha_nacimiento = "";
  //location: any;
  alertButtons = ['Ok'];

  constructor(private activeroute: ActivatedRoute, private router:Router, private alertController: AlertController,private animationCtrl: AnimationController) {
    //this.location = location;
    this.activeroute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()!.extras.state){
        console.log(this.router.getCurrentNavigation()!.extras.state!['user']);
        this.user = this.router.getCurrentNavigation()!.extras.state!['user'];
      }
    });
  }

  ngOnInit() {}

  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sus datos:',
      subHeader: 'Su nombre es: ' + this.nombre + ' ' + this.apellido,
      message: 'Nvl. Educacional: ' + this.nivel_educacional + ' Fecha Nac.: ' + this.fecha_nacimiento,
      buttons: ['Ok'],
    });

    await alert.present();
  }

/*   limpiar(){
    //this.location.reload();
    this.nombre = "";
    this.apellido = "";
    this.nivel_educacional = "";
    this.fecha_nacimiento = "";

    if(this.nombre_ && this.apellido_){
      this.animation_nombre =  this.animationCtrl.create()
      .addElement(this.nombre_.nativeElement)
      .addElement(this.apellido_.nativeElement)
      .duration(1000)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'translate(0%)'},
        { offset: 0.3,  transform: 'translate(1%)'},
        { offset: 0.6, transform: 'translate(-1%)'},
        { offset: 1,  transform: 'translate(0%)'},
      ]);
      this.animation_nombre.play();
    }
  } */

}
