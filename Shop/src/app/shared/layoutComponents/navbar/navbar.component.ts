import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/core/store/car/car.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mostrarCarrito: boolean = false;
  public carItems: number = 0;
  public allCarItems: any;

  constructor(private carStoreService: CarService) {
    this.carStoreService.selectCarItems$().subscribe((resp: any) => {
      console.log('CARRITO', resp);
      this.carItems = resp.carItems.length - 1;
      this.allCarItems = resp.carItems;
    });
  }

  ngOnInit(): void {
  }

  toggleCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  increaseQuantity(item: any) {
    this.carStoreService.incrementItem(item)
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) this.carStoreService.decrementItem(item)
  }

  getTotal(): number {
      let total = 0;
      this.allCarItems.map((item: any) => {
        if(Object.keys(item).length) total += item.price * item.quantity
      })
      return total;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.container_car_list') && this.mostrarCarrito && !target.classList.contains('editItem')) this.mostrarCarrito = false;
  }

}
