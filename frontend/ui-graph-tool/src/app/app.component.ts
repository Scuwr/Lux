import { ChangeDetectorRef, Component } from '@angular/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  loader = false;

  constructor(
    private cdr: ChangeDetectorRef,
  ) {}

  setLoader($event: any) {
    this.loader = !!$event
    this.cdr.detectChanges();
  }

}
