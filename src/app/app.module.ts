import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService , MessageService} from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule} from 'primeng/tooltip';
import { BlockUIModule } from "primeng/blockui";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TabMenuModule } from 'primeng/tabmenu';

import { StoreModule } from '@ngrx/store';
import { mainFeatureKey, mainReducer } from './ngrx/main.reducer';

import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main-component/main.component';
import { MainService } from './main-component/main.services';
import { AutofocusDirective } from './utils/autofocus.directive';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ViewerComponent } from './viewer-component/viewer.component';
import { SettingsComponent } from './settings/settings.component';
import { DocsComponent } from './docs-component/docs.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidenavComponent,
    AutofocusDirective,
    ViewerComponent,
    SettingsComponent,
    DocsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE }),
    StoreModule.forRoot({ [mainFeatureKey]: mainReducer }),

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
    InputTextareaModule,
    TooltipModule,
    BlockUIModule,
    ProgressSpinnerModule,
    PanelModule,
    TabViewModule,
    InputSwitchModule,
    TabMenuModule,
    AppRoutingModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    MainService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
