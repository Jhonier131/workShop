import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/store/car/car.service';
import { ShopService } from '../../services/shop.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SubSink } from 'subsink';
import { SubjectService } from 'src/app/core/services/subjectService.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { constantes } from 'src/app/core/data/constantes';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css'],
})
export class WomensComponent implements OnInit, AfterViewInit {
  private subs = new SubSink();
  public allClothes: any = [];
  public allFilters: any = [];

  clotheSelected: any = null;
  sizes: string[] = ['S', 'M', 'L', 'XL'];
  tallaSeleccionada: string | null = null;
  filtrar: boolean = false;
  filterForm!: FormGroup;
  filterMode: string = 'women';
  public titleModdule: string = '';

  constructor(
    public loaderService: LoaderService,
    private carStoreService: CarService,
    private shopServices: ShopService,
    private fb: FormBuilder
  ) {
  }  

  ngOnInit(): void {
    this.loaderService.show();
    this.buildFilterForm();
    this.irAlInicio();
    setTimeout(() => this.getClothes(), 2000);
    this.getClothes();
  }
  ngAfterViewInit(): void {
  }

  buildFilterForm() {
    this.filterForm = this.fb.group({
      order: [''],
      sizes: this.fb.array([]),
      categories: this.fb.array([])
    });
  }

  getClothes() {
    if(window.location.pathname.includes('/shop/women')) {
      this.filterMode = constantes.FILTER_WOMEN;
      this.subs.add(this.shopServices.getClothesWomens().subscribe(respuesta => {
        this.allClothes = respuesta.payload;
        this.titleModdule = 'Ropa para mujer';
        this.loaderService.hide();
      }));
    } else {
      this.filterMode = constantes.FILTER_MEN;
      this.subs.add(this.shopServices.getClothesMen().subscribe(respuesta => {
        this.allClothes = respuesta.payload
        this.titleModdule = 'Ropa para hombre';
        this.loaderService.hide();
      }));
    }
    this.getFilters();
  }

  getFilters() {
    this.subs.add(this.shopServices.getFilters().subscribe(respuesta => {
      this.allFilters = this.filterMode === constantes.FILTER_WOMEN ?
        respuesta.payload.filter((item: any) => item.gender !== "M"):
        respuesta.payload.filter((item: any) => item.gender !== "F");
    }));
  }

  onChangeCategory(event: any) {
    const categoriesArray: FormArray = this.filterForm!.get('categories') as FormArray;

    if (event.checked) 
      categoriesArray.push(this.fb.control(event.source.value.id));
    else {
      const index = categoriesArray.controls.findIndex(x => x.value === event.source.value);
      categoriesArray.removeAt(index);
    }
  }

  onCheckboxChange(event: any) {
    const tallasArray: FormArray = this.filterForm!.get('sizes') as FormArray;

    if (event.checked) {
      tallasArray.push(this.fb.control(event.source.value));
    } else {
      const index = tallasArray.controls.findIndex(x => x.value === event.source.value);
      tallasArray.removeAt(index);
    }
  }

  irAlInicio() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  addCarItem(item:any) {
    console.log('El item es:', item);
    if(item.sizeSelected.length) this.carStoreService.addNewItem(item);
  }

  seleccionarTalla(item: any, sizeSelected: string): void {
    this.allClothes.map((element: any) => {
      if(element.id === item.id) element.sizeSelected = sizeSelected;
      return element;
    });
    console.log(this.allClothes);
  }

  calcPrice(price: number, offSale: number): number {
    return price - (price * offSale / 100);
  }
  
  openFilter() {
    this.filtrar = true;
    document.body.classList.add('no-scroll');
  }

  closeFilter() {
    this.filtrar = false;
    this.filterForm!.reset();
    const tallasArray = this.filterForm.get('sizes') as FormArray;
    const cayegoriesArray = this.filterForm.get('categories') as FormArray;
    while(tallasArray.length) tallasArray.removeAt(0);
    while(cayegoriesArray.length) cayegoriesArray.removeAt(0);
    document.body.classList.remove('no-scroll');
  }

  aplyFilter() {
    this.loaderService.show();
    this.getClothesFiltered(this.filterForm!.value);
    this.closeFilter();
  }

  filterByCategory(category: any):void {
    this.loaderService.show();
    this.getClothesFiltered({'categories':[category.id]});
  }

  getClothesFiltered(filters: any) {
    this.subs.add(this.shopServices.aplyFilters(filters, this.filterMode).subscribe(resp => {
      this.allClothes = resp.payload;
      this.loaderService.hide();
    }));
  }
}
