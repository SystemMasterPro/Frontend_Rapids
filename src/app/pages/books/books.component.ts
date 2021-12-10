import {Component, OnInit} from '@angular/core';

import {
    pdfDefaultOptions
}
  from 'ngx-extended-pdf-viewer';

import { ApiServiceService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  
  datos: any = [];
  
  filtro = '';
  
  title = 'Lector Master';

  public page = 1;

  public pageLabel!: string;

  book_selector = '';
  
  state = false

  span: any;

constructor(private api : ApiServiceService) {

  pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  this.state = false;
  setTimeout(function () {
    const span = document.getElementById("ir-arriba");
    window.addEventListener("scroll", function (event) {
      var top = this.scrollY
      if (top >= 300) {
        if (span != null) {
          span.className = "mostrarBoton";
        }
      } else { 
        if (span != null) {
          span.className = "ir-arriba";
        }
      }
    });
  }, 10);
  }

  ngOnInit(): void {
    this.api.getBooks().subscribe((data) => {
      this.datos = data;
      // console.log(this.datos);
    });
  }

  handleSearch(value: string) {
    this.filtro = value;
    // console.log(value);
  }

  selectBook(book:any) {
    // console.log(book);
    this.book_selector = book
    console.log(this.book_selector);
    this.state = true;
  }

  returnBooks() {
    this.state = false;
  }

  topPage() {
    // window.scroll(0, 0);
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}


