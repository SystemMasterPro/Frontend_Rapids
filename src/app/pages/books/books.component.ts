import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  datos: any = [];
  filtro = '';
  constructor(private api: ApiServiceService) {}

  ngOnInit(): void {
    this.api.getBooks().subscribe((data) => {
      this.datos = data;
      // console.log(this.datos);
    });
  }

  handleSearch(value: string) {
    this.filtro = value;
    console.log(value);
  }
}
