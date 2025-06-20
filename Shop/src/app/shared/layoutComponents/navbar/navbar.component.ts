import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectService } from 'src/app/core/services/subjectService.service';
import { CarService } from 'src/app/core/store/car/car.service';
import { ShopService } from 'src/app/pages/sections/services/shop.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navbarTransparent: boolean = false;
  mostrarCarrito: boolean = false;
  public carItems: number = 0;
  public allCarItems: any;

  constructor(
    private carStoreService: CarService,
    private subjectService: SubjectService,
    private shop: ShopService
  ) {
  }

  ngOnInit(): void {
    this.getItemsStorage();
    this.validateNavbar();
  }

  validateNavbar() {
    this.subjectService.getChangeNavbar().subscribe((resp: boolean) => this.navbarTransparent = resp);
  }

  getItemsStorage() {
    this.carStoreService.selectCarItems$().subscribe((resp: any) => {
      this.carItems = resp.carItems.length - 1;
      this.allCarItems = resp.carItems;
    });
  }

  toggleCarrito() {
    document.body.classList.toggle('no-scroll');
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  increaseQuantity(item: any) {
    this.carStoreService.incrementItem(item)
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) this.carStoreService.decrementItem(item)
  }

  deleteItem(item: any) {
    this.carStoreService.deleteItemcar(item);
  }

  getTotal(): number {
      let total = 0;
      this.allCarItems.map((item: any) => {
        if(Object.keys(item).length) total += item.price * item.quantity
      })
      return total;
  }

  saleProducts() {
    let i = 0;
    const sale = this.allCarItems.map((item: any) => {
      if(!Object.keys(item).length) return;
      i++;
      return `${i}. Producto: ${item.name} - Cantidad: ${item.quantity}%0D%0A`;
    }).join('');

    window.open("https://api.whatsapp.com/send?phone=573217742884&text=" + "¡Hola! Me gustaría hacer el siguiente pedido:%0D%0A" + sale + "Podrías decirme el precio total por favor. Gracias.", "_blank")
  }

  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent): void {
  //   const target = event.target as HTMLElement;
  //   if (!target.closest('.container_car_list') && this.mostrarCarrito && !target.classList.contains('editItem')) this.mostrarCarrito = false;
  // }

  closeCar() {
    document.body.classList.remove('no-scroll');
    this.mostrarCarrito = false;
  }

}
