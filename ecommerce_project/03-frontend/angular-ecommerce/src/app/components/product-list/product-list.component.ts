import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategroyId: number = 1; //number = 1
  searchMode: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
    
  }


  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    // now search for the products using keyword
    this.productService.searchProducts(theKeyword).subscribe( 
      data => {
        this.products = data;
      }
    );
  }

  handleListProducts() {
     // check if "id" parameter is available
     const hasCategorId: boolean = this.route.snapshot.paramMap.has('id');

     if (hasCategorId) {
       // get the "id" param string. convert string to a number using the "+" symbol
       this.currentCategroyId = +this.route.snapshot.paramMap.get('id')!;
     }
     else {
       // not category id available ... default to category id 1
       this.currentCategroyId = 1;
     }
 
     // now get the products for the given category id
     this.productService.getProducList(this.currentCategroyId).subscribe(
       data => {
         this.products = data;
       }
     );
  }

}
