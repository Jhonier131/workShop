import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  public visibleSidebar = new Subject<boolean>();

  constructor() { }

  public setChangeNavbar(visibleSidebar: boolean) {
    this.visibleSidebar.next(visibleSidebar);
  }
  public getChangeNavbar(): Observable<boolean> {
    return this.visibleSidebar.asObservable();
  }
}
