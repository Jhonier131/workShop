import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css'],
})
export class WomensComponent implements OnInit {
  public itemsPrueba = [
    {
      "id": 1,
      "name": "Vestido floral",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 59,
      "description": "Un encantador vestido floral perfecto para una tarde soleada en el parque.",
      "percent": 15
    },
    {
      "id": 2,
      "name": "Blusa de encaje",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 45,
      "description": "Una delicada blusa de encaje que añade un toque romántico a cualquier conjunto.",
      "percent": 10
    },
    {
      "id": 3,
      "name": "Falda plisada",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 35,
      "description": "Una falda plisada que combina elegancia y comodidad, ideal para cualquier ocasión.",
      "percent": 20
    },
    {
      "id": 4,
      "name": "Pantalones de cuero",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 79,
      "description": "Estos pantalones de cuero añaden un toque de sofisticación y rebeldía a tu estilo.",
      "percent": 5
    },
    {
      "id": 5,
      "name": "Blazer de lino",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 92,
      "description": "Un blazer ligero de lino que te mantendrá elegante y fresca durante todo el día.",
      "percent": 12
    },
    {
      "id": 6,
      "name": "Vestido midi",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 65,
      "description": "Un vestido midi versátil que puedes llevar desde la oficina hasta una cena formal.",
      "percent": 8
    },
    {
      "id": 7,
      "name": "Sudadera con capucha",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 42,
      "description": "Una sudadera con capucha suave y cómoda que te mantendrá abrigada en los días fríos.",
      "percent": 18
    },
    {
      "id": 8,
      "name": "Camiseta sin mangas",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 18,
      "description": "Una camiseta sin mangas básica que es imprescindible en cualquier guardarropa.",
      "percent": 7
    },
    {
      "id": 9,
      "name": "Jeans skinny",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 55,
      "description": "Estos jeans skinny se adaptan a tu cuerpo para un look moderno y favorecedor.",
      "percent": 13
    },
    {
      "id": 10,
      "name": "Jersey de punto",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 38,
      "description": "Un jersey de punto suave y acogedor que es perfecto para los días más frescos.",
      "percent": 20
    },
    {
      "id": 11,
      "name": "Vestido camisero",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 60,
      "description": "Un vestido camisero elegante y versátil que puedes llevar en cualquier ocasión.",
      "percent": 9
    },
    {
      "id": 12,
      "name": "Abrigo de lana",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 110,
      "description": "Un abrigo de lana clásico que te mantendrá abrigada y con estilo durante el invierno.",
      "percent": 16
    },
    {
      "id": 13,
      "name": "Blusa de seda",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 75,
      "description": "Una blusa de seda suave y elegante que añade un toque de lujo a cualquier conjunto.",
      "percent": 11
    },
    {
      "id": 14,
      "name": "Chaqueta de mezclilla",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 50,
      "description": "Una chaqueta de mezclilla atemporal que combina estilo y comodidad a la perfección.",
      "percent": 14
    },
    {
      "id": 15,
      "name": "Falda lápiz",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 40,
      "description": "Una falda lápiz elegante y favorecedora que realza tu figura con estilo.",
      "percent": 6
    },
    {
      "id": 16,
      "name": "Mono elegante",
      "image": "../../../../../assets/img/jean.jpg",
      "price": 70,
      "description": "Un mono elegante que te lleva del día a la noche con facilidad y estilo.",
      "percent": 17
    },
  ]

  carrito: any[] = [];
  constructor() {}

  ngOnInit(): void {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
    }
  }

  agregarCarrito(item:any) {
    console.log(item);

    // const index = this.carrito.findIndex((el) => el.id === item.id);
    // if (index !== -1) {
    //   this.carrito[index].quantity++;
    // } else {
    //   this.carrito.push({ ...item, quantity: 1 });
    // }
    // localStorage.setItem('carrito', JSON.stringify(this.carrito));
    // console.log(localStorage.getItem('carrito'));
  }

}
