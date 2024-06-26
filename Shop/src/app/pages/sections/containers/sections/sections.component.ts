import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  public allClothes = [];

  constructor() {}

  ngOnInit(): void {
  }
}
