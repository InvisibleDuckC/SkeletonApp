import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Component, ElementRef, ViewChildren, ViewChild} from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController,  } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {

  @ViewChild('titulo', { read: ElementRef }) titulo: ElementRef<HTMLIonTitleElement> | undefined;
  @ViewChild('nombre_', { read: ElementRef }) nombre_: ElementRef<HTMLIonInputElement> | undefined;
  @ViewChild('apellido_', { read: ElementRef }) apellido_: ElementRef<HTMLIonInputElement> | undefined;

  
  private animation: Animation | undefined;

  segment = "misDatos";

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

  ngAfterViewInit() {
    if (this.titulo) {
      this.animation = this.animationCtrl
        .create()
        .addElement(this.titulo.nativeElement)
        .duration(2500)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, transform: 'translate(0%)', opacity: '0.2' },
          { offset: 0.5, transform: 'translate(50%)', opacity: '1' },
          { offset: 1,  transform: 'translate(100%)', opacity: '0.2' },
        ]);
        
      this.animation.play();
    }
  }

  onChangeSegment(event: any){
    this.segment = event.detail.value;
  }

}
