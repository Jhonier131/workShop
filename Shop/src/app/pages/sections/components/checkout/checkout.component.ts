import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/core/services/loader.service';
import { PaymentsService } from 'src/app/core/services/payments.service';
import { CarService } from 'src/app/core/store/car/car.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, AfterViewInit {

  @ViewChild('formPay', { static: true }) formPay!: ElementRef;
  checkoutForm!: FormGroup;
  allCarItems!: any;
  private items: any[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private loaderService: LoaderService,
    private carStoreService: CarService,
    private paymentsService: PaymentsService
  ) {}

  ngOnInit(): void {
    this.getItemsStorage();
    this.buildForm();
  }

  ngAfterViewInit(): void {
  }

  buildForm(): void {
    this.checkoutForm = this.fb.group({
      fullName: ['Jhonier Martinez', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      documentId: ['123456789', [Validators.required, Validators.minLength(6)]],
      email: ['redvibesstyle@gmail.com', [Validators.required, Validators.email]],
      phone: ['3217742884', Validators.required],
      department: ['Valle del Cauca', Validators.required],
      address: ['Cra 93 C Bis O', Validators.required],
      paymentMethod: ['payu', Validators.required],
    });
  }

  getItemsStorage() {
    this.carStoreService.selectCarItems$().subscribe((resp: any) => {
      this.allCarItems = resp.carItems.filter((item: any) => Object.keys(item).length > 0);;
      this.items = this.allCarItems.map((item: any) => ({
        productId: item._id,
        size: item.sizeSelected,
        quantity: item.quantity
      }));
    });
  }

  getTotal(): number {
    let total = 0;
    this.allCarItems.map((item: any) => {
      if(Object.keys(item).length) total += item.price * item.quantity
    })
    return total;
  }

  confirmPayment() {
    console.log('💡 formPay está disponible:', this.checkoutForm.controls);
    let datos = {
      ...this.checkoutForm.value,
      amount: this.getTotal(),
      items: this.items
    };

    console.log(datos);
  
    this.paymentsService.getPayForm(datos).subscribe((html) => {
      console.log(html);
      const form = this.formPay.nativeElement;
      form.innerHTML = html.payload;
      form.querySelector('form').submit();
    });
  }
}
