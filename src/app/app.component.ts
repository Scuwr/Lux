import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { selectLoaderTasks } from './ngrx/main.reducer';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  loader = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store,
  ) { }

  ngOnInit() {
    this.store.select(selectLoaderTasks).subscribe(loadingTasks => {
      this.loader = loadingTasks > 0
      // console.log(this.loader)
      this.cdr.detectChanges()
    })
  }

}
