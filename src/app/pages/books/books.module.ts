import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from '../../Pipes/search-filter.pipe';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { SearchBookComponent } from 'src/app/components/search-book/search-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BooksComponent, SearchFilterPipe, SearchBookComponent],
  imports: [CommonModule, BooksRoutingModule, FormsModule, ReactiveFormsModule],
})
export class BooksModule {}
