import { Component, OnInit } from '@angular/core';
import { ListaService } from '../services/lista.service';
import { Lista } from '../interfaces/variables';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { DetallesPage } from '../detalles/detalles.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  perifericos: Lista[] = [];
  edit: false;

  constructor(
    private ListaService: ListaService,
    private alertController: AlertController,
    private modalController: ModalController,
    private navController: NavController) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.ListaService.getListas().then(data => this.perifericos = data);
  }
  
  async deleteDialog(periferico: string, id: number) {

    const alert = await this.alertController.create({
      header: 'Borrar periferico',
      message: '¿Estás seguro que quieres borrar el periferico <strong>' + periferico + '</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.ListaService.deleteLista(id).then(
              () => this.ListaService.getListas().then(
                data => this.perifericos = data)
            );
          }
        }
      ]
    });

    await alert.present();
  }
 async editLista(periferico:string ,id: number) {
   const alert = await this.alertController.create({
     header: 'Editar periferico',
     message: 'Vas a proceder a editar el periferico <strong> ' + periferico + '</strong>?',
     buttons: [
       {
        text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
       }
      },{
        text: 'Aceptar',
        handler: () => {
        this.navController.navigateForward('/edit/' + id)
      }
    }
    
    ]
       })
       await alert.present();
  }
 
  async muestraDetalles(p) {
    const modal = await this.modalController.create({
      component: DetallesPage,
      componentProps: { index: p }
    });
    return await modal.present();
  }
}
