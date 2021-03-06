import { Component, OnInit } from '@angular/core';
import { ListaService } from '../services/lista.service';
import { ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
       public periferico;
       public indice;
  constructor(private modalController: ModalController,
    private navParams: NavParams,
    private listaServices: ListaService,
    ) { 

      this.indice = this.navParams.get('index');
      
      
      
    } 
    
  ngOnInit() {
    this.periferico = this.listaServices.getListaById(this.indice);
   
    
   
  }
  close() {
    this.modalController.dismiss();
  }

}
