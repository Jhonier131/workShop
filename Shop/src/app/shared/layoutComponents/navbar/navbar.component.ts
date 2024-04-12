import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  toggleCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  increaseQuantity(index: number) {
    this.itemsCarrito[index].quantity++;
  }

  decreaseQuantity(index: number) {
      if (this.itemsCarrito[index].quantity > 1) {
          this.itemsCarrito[index].quantity--;
      }
  }

  getTotal(): number {
      let total = 0;
      for (let item of this.itemsCarrito) {
          total += item.price * item.quantity;
      }
      return total;
  }

}
