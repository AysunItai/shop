import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import{AlertifyService} from '../services/alertify.service';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl:'./product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService : AlertifyService, private productService:ProductService) { }
  title="Product List";
  filterText="";
  products:Product[];
  
  

  ngOnInit()  {
    this.productService.getProducts().subscribe(data=>{
      this.products=data

    });
    
  }
  addToChart(product) {
    this.alertifyService.success("hi")
  }

}
