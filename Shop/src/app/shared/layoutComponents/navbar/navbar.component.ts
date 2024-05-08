import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/core/store/car/car.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  itemsCarrito = [
    {
      "id": 1,
      "name": "Vestido floral",
      "image": "assets/img/jean.jpg",
      "price": 59,
      "description": "Un encantador vestido floral perfecto para una tarde soleada en el parque.",
      "percent": 15,
      "quantity": 1
    },
    {
      "id": 2,
      "name": "Blusa de encaje",
      "image": "assets/img/jean.jpg",
      "price": 45,
      "description": "Una delicada blusa de encaje que añade un toque romántico a cualquier conjunto.",
      "percent": 10,
      "quantity": 1
    },
    {
      "id": 1,
      "name": "Vestido floral",
      "image": "assets/img/jean.jpg",
      "price": 59,
      "description": "Un encantador vestido floral perfecto para una tarde soleada en el parque.",
      "percent": 15,
      "quantity": 1
    },
    {
      "id": 2,
      "name": "Blusa de encaje",
      "image": "assets/img/jean.jpg",
      "price": 45,
      "description": "Una delicada blusa de encaje que añade un toque romántico a cualquier conjunto.",
      "percent": 10,
      "quantity": 1
    }
  ];

  mostrarCarrito: boolean = false;
  public carItems: number = 0;
  public allCarItems: any;

  constructor(private carStoreService: CarService) {
    this.carStoreService.selectCarItems$().subscribe((resp: any) => {
      this.carItems = resp.carItems.length
      this.allCarItems = resp.carItems
    });
  }

  ngOnInit(): void {
  }

  toggleCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  increaseQuantity(index: number) {
    console.log(index);
    console.log(this.allCarItems);
    this.allCarItems[index].quantity++;
  }

  decreaseQuantity(index: number) {
      if (this.allCarItems[index].quantity > 1) {
          this.allCarItems[index].quantity--;
      }
  }

  getTotal(): number {
      let total = 0;
      for (let item of this.allCarItems) {
          total += item.price * item.quantity;
      }
      return total;
  }

}
