import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SubjectService } from 'src/app/core/services/subjectService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private subjectService: SubjectService,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.subjectService.setChangeNavbar(true);
  }

  ngOnDestroy(): void {
    this.subjectService.setChangeNavbar(false);
  }

}
