import { Component, OnInit } from '@angular/core';
import { Lista } from '../interfaces/variables';
import { ListaService } from '../services/lista.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-lista',
  templateUrl: './edit-lista.page.html',
  styleUrls: ['./edit-lista.page.scss'],
})
export class EditListaPage implements OnInit {

  Lista: Lista;
  edit = false;
  puntuacion = false;
  orderAsc= false;
  orderDes = false;
  private rating1 = false;
  private rating2 = false;
  private rating3 = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ListaService: ListaService,
    private navController: NavController) {

    this.Lista = {
      id: this.ListaService.ListaCounter,
      periferico: '',
      marca:'',
      modelo: '',
      rating: 0
    };
  }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.edit = true;
      this.Lista = this.ListaService.getListaById(+id);
    }

    switch (this.Lista.rating) {
      case 1:
        this.rating1 = true;
        break;
      case 2:
        this.rating1 = true;
        this.rating2 = true;
        break;
      case 3:
        this.rating1 = true;
        this.rating2 = true;
        this.rating3 = true;
        break;
      default:
    }
  }

  saveLista(t: Lista) {
    
    if (this.edit) {
      this.ListaService.saveLista(this.Lista).then(() => this.navController.goBack(true),
        
       
      );
    } else {
      this.ListaService.newLista(this.Lista).then(() => this.navController.goBack(true),
        
      );
    }
  }

  setRating1() {
    this.rating1 = true;
    this.rating2 = false;
    this.rating3 = false;
    this.Lista.rating = 1;
  }

  setRating2() {
    this.rating1 = true;
    this.rating2 = true;
    this.rating3 = false;
    this.Lista.rating = 2;
  }

  setRating3() {
    this.rating1 = true;
    this.rating2 = true;
    this.rating3 = true;
    this.Lista.rating = 3;
  }

  

}
