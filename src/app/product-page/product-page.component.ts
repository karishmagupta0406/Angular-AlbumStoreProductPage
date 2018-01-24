import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  albumInfo;
  constructor() { }

  ngOnInit() {
  }

}
