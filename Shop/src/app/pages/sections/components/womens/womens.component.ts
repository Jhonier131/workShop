import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/store/car/car.service';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css'],
})
export class WomensComponent implements OnInit {
  public allClothes: any = [];

  constructor(
    private carStoreService: CarService,
    private shopServices: ShopService
  ) {
  }  

  ngOnInit(): void {
    this.shopServices.getClothesWomens().subscribe( respuesta => {
      console.log('respuesta', respuesta);
      this.allClothes = respuesta.payload;
    })
  }

  agregarCarrito(item:any) {
    console.log('El item es:', item);
    this.carStoreService.addNewItem(item)
  }

}
