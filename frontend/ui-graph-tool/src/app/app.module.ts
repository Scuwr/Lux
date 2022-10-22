import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService , MessageService} from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenuItem } from 'primeng/api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    ConfirmDialogModule,
    TableModule,
    ContextMenuModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
