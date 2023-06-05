import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { AddItemModalComponent } from './components/modals/add-item-modal/add-item-modal.component';
import { EditItemModalComponent } from './components/modals/edit-item-modal/edit-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    ToDoItemComponent,
    AddItemModalComponent,
    EditItemModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
