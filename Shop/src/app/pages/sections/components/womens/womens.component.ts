import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/store/car/car.service';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css'],
})
export class WomensComponent implements OnInit {
  // public originClothes: any = [];
  public allClothes: any = [];
  clotheSelected: any = null;
  tallas: string[] = ['S', 'M', 'L', 'XL', 'XXL'];
  tallaSeleccionada: string | null = null;

  constructor(
    private carStoreService: CarService,
    private shopServices: ShopService
  ) {
  }  

  ngOnInit(): void {
    this.irAlInicio();
    this.shopServices.getClothesWomens().subscribe( respuesta => {
      console.log('respuesta', respuesta);
      this.allClothes = respuesta.payload;
    })
  }

  irAlInicio() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  agregarCarrito(item:any) {
    console.log('El item es:', item);
    this.carStoreService.addNewItem(item);
  }

  seleccionarTalla(item: any, talla: string): void {
    this.allClothes.map((element: any) => {
      if(element.id === item.id) element.talla = talla;
      return element;
    });
  }

}
