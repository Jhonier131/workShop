import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { ActivatedRoute } from '@angular/router';
import { CarItem } from '../../../../core/data/models/car-model';
import { CarService } from 'src/app/core/store/car/car.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  
  public item!: CarItem;
  public sizes: string[] = []
  public quantity: number = 1;

  constructor(
    private shopServices: ShopService,
    private route: ActivatedRoute,
    private carStoreService: CarService
  ) { }

  ngOnInit(): void {
    this.getItemDetail();
  }

  getItemDetail() {
    const id = this.route.snapshot.paramMap.get('id');
    this.shopServices.getItemDetail(id!).subscribe(respuesta => {
      this.item = {...respuesta.payload, quantity: 1};
      this.sizes = Object.keys(this.item.stock);
    });
  }


  increaseQuantity(item: any) {
    if (this.quantity > item.stock[item.size]) return;
    this.quantity++;
  }

  decreaseQuantity(item: any) {
    if (this.quantity <= 1) return;
    this.quantity--;
  }

}
