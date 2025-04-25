import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  public visibleSidebar = new Subject<boolean>();
  private filterMode = new BehaviorSubject<string>('women');

  constructor() { }

  public setChangeNavbar(visibleSidebar: boolean) {
    this.visibleSidebar.next(visibleSidebar);
  }
  public getChangeNavbar(): Observable<boolean> {
    return this.visibleSidebar.asObservable();
  }

  public setFilterMode(mode: string): void {
    this.filterMode.next(mode);
  }
  public getFilterMode(): Observable<string> {
    return this.filterMode.asObservable();
  }
}
