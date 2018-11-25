import { Injectable } from '@angular/core';
import { Lista } from '../interfaces/variables';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  Listas: Lista[] = [];
  rating1: Lista[] = [];
  rating2: Lista[] = [];
  rating3: Lista[] = [];
  ListaCounter = 0;
  orderAsc = true;

  constructor(private storage: Storage) {

  }

  getListas(): Promise<Lista[]> {
    this.storage.get('this.ListaCounter').then(data => { if (data) { this.ListaCounter = data } });
    return this.storage.get('Listas').then(
      data => {
        if (data) {
          this.rating3 = data.filter(t => t.rating === 3),
          this.rating2 = data.filter(t => t.rating === 2),
          this.rating1 = data.filter(t => t.rating === 1)
          
          

            return this.storage.get('Listas');
          }
          
        }
      );
  }

  saveLista(t): Promise<Lista[]> { 
    this.Listas[this.Listas.findIndex(Lista => Lista.id === t.id)] = t;
    return this.storage.set('Listas', this.Listas);
  }

  newLista(t): Promise<Lista[]> {
    this.Listas.push(t);
    this.ListaCounter++;
    return this.storage.set('Listas', this.Listas).then(() =>
      this.storage.set('ListaCounter', this.ListaCounter)
    ); 
  }

  deleteLista(id: number): Promise<Lista[]> {
    this.Listas = this.Listas.filter(t => t.id !== id);
    return this.storage.set('Listas', this.Listas);
  }

  getListaById(id: number): Lista {
    return this.Listas.find(t => t.id === id);
  }
}