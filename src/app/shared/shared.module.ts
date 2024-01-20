import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PopoverContentComponent } from './popover-content/popover-content.component';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    BreadCrumbComponent,
    CheckboxComponent,
    FooterComponent,
    HeaderComponent,
    PaginatorComponent,
    PopoverContentComponent,
    SearchComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    SafeHtmlPipe
  ]
})
export class SharedModule { }
