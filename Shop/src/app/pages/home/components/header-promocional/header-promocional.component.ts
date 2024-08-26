import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-promocional',
  templateUrl: './header-promocional.component.html',
  styleUrls: ['./header-promocional.component.css']
})
export class HeaderPromocionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.irAlInicio();
  }

  irAlInicio() {
    window.scrollTo(0, 0);
  }

}
