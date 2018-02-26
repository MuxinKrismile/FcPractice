import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SidebarMenuComponent} from './sidebar-menu.component';
import {TreeviewMenuComponent} from './treeview-menu.component';
import {CustomScrollbarModule} from "./shared/custom-scrollbar/custom-scrollbar.module";


@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    TreeviewMenuComponent
  ],
  imports: [
    CommonModule,
    CustomScrollbarModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
